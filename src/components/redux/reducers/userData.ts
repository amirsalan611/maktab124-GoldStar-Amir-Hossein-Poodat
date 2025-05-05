import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    _id: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    phoneNumber: "",
    address: "",
    role: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
    refreshToken: "",
  },
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      return { ...state, userData: action.payload };
    },
    clearUserData: () => initialState,
  },
});

export const { saveUserData, clearUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
