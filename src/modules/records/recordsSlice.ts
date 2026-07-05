import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateRecords } from "./mockRecords";

type RecordsState = {
  records: ReturnType<typeof generateRecords>;
  search: string;
  filter: string | null;
};

const initialState: RecordsState = {
  records: generateRecords(),
  search: "",
  filter: null,
};

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    setFilter(state, action: PayloadAction<string | null>) {
      state.filter = action.payload;
    },
  },
});

export const { setSearch, setFilter } = recordsSlice.actions;

export default recordsSlice.reducer;
