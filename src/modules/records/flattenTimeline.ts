import { HealthRecord } from "./types";

export function flattenTimeline(grouped: Record<string, HealthRecord[]>) {
  const result: Array<{ type: "HEADER"; title: string } | { type: "ITEM"; record: HealthRecord }> = [];

  Object.entries(grouped).forEach(([month, records]) => {
    result.push({ type: "HEADER", title: month });

    records.forEach((record) => {
      result.push({ type: "ITEM", record });
    });
  });

  return result;
}
