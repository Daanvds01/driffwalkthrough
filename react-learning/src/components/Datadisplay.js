import React from "react";
import { useState } from "react";
import { useStore } from "react-redux";
import Buttondata from "./buttondata.json"
import Themetesting from "./Themetesting";

function Datadisplay() {
  // function getData() {
  //   fetch("buttondata.json")
  //     .then((res) => res.text())
  //     .then((data) => {
  //       setDisplayState(data);
  //       console.log(displayState);
  //     });
  
  // const [displayState, setDisplayState] = useState();

  return (
    <div>
     
      <div className="datadisplay">
        {/* {displayState} */}
        { Buttondata.map(post => {
          return(
            <div className="datareadbox">
            <h4>{post.name}</h4>
            <p>{post.group} </p>
            <p>{post.time}</p>
            </div>
          )
        })}
        
      </div>
      <Themetesting/>
    </div>
  );
}

export default Datadisplay;
