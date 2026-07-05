import { RootState } from "../../app/store/store";

export const selectRecords = (state: RootState) => state.records.records;

export const selectRecordSearch = (state: RootState) => state.records.search;
