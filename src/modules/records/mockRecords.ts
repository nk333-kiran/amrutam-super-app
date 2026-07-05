import { HealthRecord } from "./types";

const recordTypes = ["LAB_REPORT", "PRESCRIPTION", "CONSULTATION", "VACCINATION", "ALLERGY"] as const;

const tagsPool = ["Blood Test", "Vitamin", "Diabetes", "Skin", "Fever", "Cholesterol"];

export function generateRecords(count = 10000): HealthRecord[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `record-${i}`,
    type: recordTypes[i % recordTypes.length],
    title: `Health Record ${i}`,
    description: "Patient medical history entry",
    tags: [tagsPool[i % tagsPool.length]],
    date: new Date(2024 + (i % 3), i % 12, (i % 28) + 1).toISOString(),
    attachments: [
      {
        id: `attachment-${i}`,
        type: i % 2 === 0 ? "IMAGE" : "PDF",
        url: "https://example.com/file",
        thumbnail: "https://via.placeholder.com/100",
      },
    ],
  }));
}
