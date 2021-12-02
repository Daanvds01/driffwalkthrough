import counterReducer from "./counter";
import firstloginReducer from "./firstlogin";
import { textdisplayReducer } from "./textdisplay";
import { combineReducers } from "redux";
import popupvideo from "./popupvideo";
import datafetch from "./datafetch";
import popupswitch from "./popupswitch";

const allReducers = combineReducers({
  counter: counterReducer,
  firstLog: firstloginReducer,
  textdisplay: textdisplayReducer,
  popupactivation: popupvideo,
  datafetch: datafetch,
  popupswitching: popupswitch,
});

export default allReducers;
