import { HealthRecord } from "./types";

export function filterRecords(records: HealthRecord[], search: string, filter: string | null) {
  return records.filter((record) => {
    const matchesSearch =
      record.title.toLowerCase().includes(search.toLowerCase()) ||
      record.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const matchesFilter = filter ? record.type === filter : true;

    return matchesSearch && matchesFilter;
  });
}
