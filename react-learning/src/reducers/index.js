import counterReducer from "./counter";
import firstloginReducer from "./firstlogin";
import { textdisplayReducer } from "./textdisplay";
import { combineReducers } from "redux";
import popupvideo from "./popupvideo";

const allReducers = combineReducers({
  counter: counterReducer,
  firstLog: firstloginReducer,
  textdisplay: textdisplayReducer,
  popupactivation: popupvideo,
});

export default allReducers;
