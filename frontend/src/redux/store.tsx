import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/AuthService";
import { authSlice } from "./reducers/AuthSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { socketsSlice } from "./reducers/SocketsSlice";
import { userSlice } from "./reducers/UserSlice";
import { userApi } from "../services/UserService";

const rootReducer: any = combineReducers({
  auth: authSlice,
  [authApi.reducerPath]: authApi.reducer,
  sockets: socketsSlice,
  user: userSlice,
  [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof setupStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof setupStore.dispatch;
setupListeners(setupStore.dispatch);
