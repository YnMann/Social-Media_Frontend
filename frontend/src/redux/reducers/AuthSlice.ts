import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../models/IAuth";

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{  name: string; token: string }>
    ) => {
      state.token = action.payload.token;
    },
    defaultState: (state) => {
      state = initialState;
      return state
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;
