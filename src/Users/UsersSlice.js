import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "user",
  initialState: {
    userName: [],
    userMail: [],
  },
  reducers: {
    yourName: (state, action) => {
      state.userName.push(action.payload);
    },
    yourMail: (state, action) => {
      state.userMail.push(action.payload);
    },
  },
});

export const { yourName, yourMail } = UsersSlice.actions;

export default UsersSlice.reducer;
