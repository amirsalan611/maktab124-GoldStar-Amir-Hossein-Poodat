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
    saveUserData: (state , action) => {
      state.userData = action.payload;
    },
  },
});

export const { saveUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
