import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const Walkthrough = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const elementshown = useSelector((state) => state.textdisplay);
  const newcount = elementshown[counter].id;

  function goBack() {
    dispatch(decrement());
    console.log(newcount);
  }
  function goNext() {
    dispatch(increment());
    console.log(newcount);
    // var updatedindex = document.getElementsByClassName("app");
    // updatedindex.classList.add("stage1");
  }

  return (
    <div className="walkthroughindex">
      <div className={elementshown[counter].position}>
        <span>
          <h2>{props.title}</h2>
        </span>
        <div class="walkimagebox">
          <img id="walkthroughimage" src="img\testimage.jfif"></img>
        </div>
        <div id="walkthroughtext">{elementshown[counter].text}</div>
        <br />

        <Link to={elementshown[counter].linkback}>
          <button
            style={{ visibility: elementshown[counter].visback }}
            onClick={goBack}
            className="walkthroughbuttonback"
          >
            <b> Back </b>
          </button>
        </Link>
        <Link to={elementshown[counter].linknext}>
          <button
            style={{ visibility: elementshown[counter].visnext }}
            onClick={goNext}
            className="walkthroughbuttonnext"
          >
            <b> Next</b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Walkthrough;
