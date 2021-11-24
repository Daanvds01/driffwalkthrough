import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";
import { popupactive, popupnonactive } from "../actions";

const Videopopup = () => {
  const dispatch = useDispatch();
  const displayvid = "null";
  const displaypurch = "none";
  console.log(displayvid);
  console.log(displaypurch);
  function popupactivate() {
    dispatch(popupactive());
  }

  function popupstatus() {
    const displayvid = "none";
    const displaypurch = "null";
    console.log(displayvid);
    console.log(displaypurch);
  }
  return (
    <div className="popupcontainer">
      <span className="popupbar">
        <button id="closebtn" onClick={popupactivate}>
          close
        </button>
      </span>
      <div className="popupcontentbox">
        <div style={{ display: displayvid }} className="driffvideo">
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/p2cCvi6y2jg?controls=0"
          ></iframe>
        </div>
        <div style={{ display: displaypurch }} className="purchasepop">
          purchase option
        </div>
      </div>
      <div className="popupbtn">
        <button onClick={popupstatus} id="closebtn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Videopopup;
