import { combineReducers } from "redux";
import userReducer from "./reducers/chatReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
