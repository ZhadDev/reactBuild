import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  id: "1",
  name: "robin",
  permissions: ["analyze"],
  roles: ["admin", "user", "alanize"],
};

export const securitySlice = createSlice({
  name: "security",
  immer: false,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    authUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.permissions = action.payload.permissions;
      state.roles = action.payload.roles;
    },
  },
});

export default securitySlice.reducer;
export const { increment, decrement, authUser } = securitySlice.actions;
