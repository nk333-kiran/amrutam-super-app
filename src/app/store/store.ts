import { configureStore } from "@reduxjs/toolkit";
import consultationReducer from "../../modules/consultation/consultationSlice";
import shopReducer from "../../modules/shop/shopSlice";
import recordsReducer from "../../modules/records/recordsSlice";

export const store = configureStore({
  reducer: {
    consultation: consultationReducer,
    shop: shopReducer,
    records: recordsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
