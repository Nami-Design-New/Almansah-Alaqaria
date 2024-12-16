import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
    theme: themeSlice,
  },
});
