const recordsStorage = {
  save(records: unknown) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("healthRecords", JSON.stringify(records));
    }
  },

  load() {
    if (typeof localStorage === "undefined") {
      return [];
    }

    try {
      const data = localStorage.getItem("healthRecords");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
};

export default recordsStorage;
