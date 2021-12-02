import Header from "./components/Header";
import MenuLeft from "./components/MenuLeft";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import Videopopup from "./components/Videopopup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as fs from "fs";
import { gettext } from "./actions";
import Datadisplay from "./components/Datadisplay";

const App = () => {
  const elementshown = useSelector((state) => state.textdisplay);
  const counter = useSelector((state) => state.counter);
  const showingpop = useSelector((state) => state.popupactivation);

  // const fs = require("fs");

  // let sendingdata1 = {
  //   User_id: "name",
  //   group: "group",
  //   Role_id: "role",
  //   buttonname: "button1",
  //   time: "curr time",
  // };

  // let data = JSON.stringify(sendingdata1);
  // fs.writeFileSync("data-2.json", data);

  return (
    <Router>
      <div id={elementshown[counter].idName} className="App">
        {/* <div className="grayfilter"></div> */}
        <Header />
        <MenuLeft />
        {showingpop ? <Videopopup /> : null}

        <div className="contentbox">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Chat" component={Chat} />
            <Route path="/Datadisplay" component={Datadisplay} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

// const [textwalkthrough, setTextwalkthrough] = useState([
//   { id: 1, text: "text1" },
//   {
//     id: 2,
//     text: "text2",
//   },
// ]);
