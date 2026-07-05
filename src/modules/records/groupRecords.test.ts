import { groupRecordsByMonth } from "./groupRecords";

describe("groupRecordsByMonth", () => {
  test("groups records by month", () => {
    const records = [
      { id: "1", date: "2026-05-10" },
      { id: "2", date: "2026-05-15" },
    ];

    const grouped = groupRecordsByMonth(records as any);

    expect(grouped["2026-05"].length).toBe(2);
  });
});
