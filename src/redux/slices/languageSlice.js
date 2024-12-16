import { createSlice } from "@reduxjs/toolkit";

const language = createSlice({
  name: "language",
  initialState: {
    lang: sessionStorage.getItem("lang") || "ar",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      sessionStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLanguage } = language.actions;
export default language.reducer;
