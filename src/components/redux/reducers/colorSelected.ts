import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorSelected: "",
};

const colorSelectedSlice = createSlice({
  name: "colorSelected",
  initialState,
  reducers: {
   setColorSelected: (state, action) => {
    state.colorSelected = action.payload;
   }
  },
});

export const { setColorSelected } = colorSelectedSlice.actions;
export default colorSelectedSlice.reducer;
