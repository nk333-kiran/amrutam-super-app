import { HealthRecord } from "./types";

export function groupRecordsByMonth(records: HealthRecord[]) {
  return records.reduce((groups, record) => {
    const date = new Date(record.date);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(record);

    return groups;
  }, {} as Record<string, HealthRecord[]>);
}
