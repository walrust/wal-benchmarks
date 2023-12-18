import { readFile, readdir } from "node:fs/promises";

async function getExecutionTimeInMicroSecondsNClicks(tracePath: string, totalClickCount: number) {
    let content = await readFile(tracePath, { encoding: "utf8" });
    let json = JSON.parse(content);
    let entries = json["traceEvents"];
    let [clickEntry, commitEntry] = getClickAndCommitEntriesFor100Clicks(entries, totalClickCount);

    console.log(tracePath);

    return commitEntry.ts - clickEntry.ts + commitEntry.dur;
}

function getClickAndCommitEntriesFor100Clicks(entries: any[], totalClickCount: number): [any, any] {
    let clickEntry: any;
    let currentClickCount = 0;

    for (const entry of entries) {
        if (entry.name === "EventDispatch" && entry.args.data.type === "click") {
            if (currentClickCount === 0) {
                clickEntry = entry;
            }
            currentClickCount++;
        } else if (entry.name === "Commit" && entry.ph === "X" && currentClickCount === totalClickCount) {
            return [clickEntry, entry];
        }
    }

    throw "Error processing traces";
}

async function processAllTracesForNClicks(directoryPath: string, totalClickCount: number) {
    var filesCount = 0;
    var totalDuration = 0;

    try {
        const files = await readdir(directoryPath);
        for (const file of files) {
            console.log(file);
            totalDuration += await getExecutionTimeInMicroSecondsNClicks(`${directoryPath}/${file}`, totalClickCount);
            filesCount++;
        }
    } catch (error) {
        console.error("Error processing traces:", error);
    }

    console.log(`${directoryPath} Total duration: ${totalDuration} microseconds`);
    console.log(`${directoryPath} Average duration: ${totalDuration / filesCount} microseconds`);
}

processAllTracesForNClicks("./results/yew/sending-props-100-times-100-components-down", 100);