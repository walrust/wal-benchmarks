import { readFile } from "node:fs/promises";

export async function getExecutionTimeInMicroSecondsNClicks(tracePath: string, totalClickCount: number): Promise<number> {
    let content = await readFile(tracePath, { encoding: "utf8" });
    let json = JSON.parse(content);
    let entries = json["traceEvents"];
    let [clickEntry, commitEntry] = getClickAndCommitEntriesFor100Clicks(entries, totalClickCount);
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
