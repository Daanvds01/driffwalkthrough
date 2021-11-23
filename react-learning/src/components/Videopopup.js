import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const Videopopup = () => {
    return (
      
            <div className="popupcontainer">
                <span className="popupbar">Header</span>
                <div className="driffvideo">
                <iframe width="420" height="315" src="https://www.youtube.com/embed/p2cCvi6y2jg?controls=0"></iframe>
            </div>
            <div className="popupbtn"><button>Next</button></div>
            </div>
  
    )
}

export default Videopopup
