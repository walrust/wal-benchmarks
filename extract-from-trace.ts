import { readFile, readdir } from "node:fs/promises";

async function extractFromTrace(tracePath: string) {
    let content = await readFile(tracePath, { encoding: "utf8" });
    let json = JSON.parse(content);
    let entries = json["traceEvents"];
    let [clickEntry, commitEntry] = extractRelevantEntries(entries);

    console.log(tracePath);

    return commitEntry.ts - clickEntry.ts + commitEntry.dur;
}

function extractRelevantEntries(entries: any[]): [any, any] {
    let clickEntry: any;
    let commitEntry: any;

    entries.forEach((x) => {
        if (x.name === "EventDispatch" && x.args.data.type === "click") {
            clickEntry = x;
        } else if (x.name === "Commit" && x.ph === "X" && clickEntry) {
            commitEntry = x;
        }
    });
    return [clickEntry, commitEntry];
}

async function processAllTraces(directoryPath: string) {
    var filesCount = 0;
    var totalDuration = 0;

    try {
        const files = await readdir(directoryPath);
        for (const file of files) {
            totalDuration += await extractFromTrace(`${directoryPath}/${file}`);
            filesCount++;
        }
    } catch (error) {
        console.error("Error processing traces:", error);
    }

    console.log(`${directoryPath} Total duration: ${totalDuration} mikroseconds`);
    console.log(`${directoryPath} Average duration: ${totalDuration / filesCount} mikroseconds`);
}

processAllTraces("./results/wal/sending-props-100-components-down");
processAllTraces("./results/react/sending-props-100-components-down");
processAllTraces("./results/yew/sending-props-100-components-down");