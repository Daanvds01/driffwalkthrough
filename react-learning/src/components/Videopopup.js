import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";
import { popupactive, popupnonactive } from "../actions";
import { popupswitch } from "../actions";
import Purchasepop from "./Purchasepop";
import Popupvideo from "./Popupvideo";

const Videopopup = () => {
  const popswitch = useSelector((state) => state.popupswitching);
  const dispatch = useDispatch();
 
  function popupactivate() {
    dispatch(popupactive());
    console.log(popswitch);
  }
  function popupchange(){
    dispatch(popupswitch());
    console.log(popswitch);
  }



 
  return (
    <div className="popupcontainer">
      <span className="popupbar">
        <button id="closebtn" onClick={popupactivate}>
          close
        </button>
      </span>
     
      <div className="popupcontentbox">
        
      {popswitch ? <Purchasepop/> : <Popupvideo/>}
      </div>
      <div className="popupbtn">
        <button onClick={popupchange} id="closebtn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Videopopup;
