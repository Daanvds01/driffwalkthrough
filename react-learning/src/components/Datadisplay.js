import React from "react";
import { useState } from "react";
import { useStore } from "react-redux";

function Datadisplay() {
  function getData() {
    fetch("buttondata.json")
      .then((res) => res.text())
      .then((data) => {
        setDisplayState(data);
        console.log(displayState);
      });
  }
  const [displayState, setDisplayState] = useState();

  return (
    <div>
      {this.state.users.map((user) => this.state.users.name)}
      <button onClick={getData} id="getData">
        get data
      </button>
      <div onClick={getData} className="datadisplay">
        {displayState}
      </div>
    </div>
  );
}

export default Datadisplay;
