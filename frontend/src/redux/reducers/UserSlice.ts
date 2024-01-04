import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../services/UserService";
import { UserState } from "../../models/IUser";
import { ContactsState } from "../../models/IContacts";

interface IUser {
  user: UserState[];
  contacts: ContactsState[];
  isLoading: boolean;
  error: string | undefined;
}

const initialState: IUser = {
  user: [],
  contacts: [],
  isLoading: false,
  error: "",
};

// Создание среза
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getContacts.matchPending, (state) => {
        console.log("STATE", state);
        state.isLoading = true;
        state.error = "";
      })
      .addMatcher(
        userApi.endpoints.getContacts.matchFulfilled,
        (state, action) => {
          state.contacts = action.payload;
          state.isLoading = false;
          state.error = "";
        }
      )
      .addMatcher(
        userApi.endpoints.getContacts.matchRejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      );
  },
});

// Экспортируйте редуктор среза и дополнительные редукторы (action creators), если они есть
export const {
  /* Ваши редукторы (action creators) */
} = userSlice.actions;
export default userSlice.reducer;
