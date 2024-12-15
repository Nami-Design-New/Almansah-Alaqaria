import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
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

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
