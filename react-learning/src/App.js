import Header from "./components/Header";
import MenuLeft from "./components/MenuLeft";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const elementshown = useSelector((state) => state.textdisplay);
  const counter = useSelector((state) => state.counter);
  return (
    <Router>
      <div id={elementshown[counter].idName} className="App">
        <div className="grayfilter"></div>
        <Header />
        <MenuLeft />
        <div className="contentbox">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Chat" component={Chat} />
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
