import counterReducer from "./counter";
import firstloginReducer from "./firstlogin";
import { textdisplayReducer } from "./textdisplay";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  firstLog: firstloginReducer,
  textdisplay: textdisplayReducer,
});

export default allReducers;
