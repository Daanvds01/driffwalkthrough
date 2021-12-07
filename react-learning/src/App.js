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
import {ThemeProvider} from "styled-components"


const App = () => {
  const elementshown = useSelector((state) => state.textdisplay);
  const counter = useSelector((state) => state.counter);
  const showingpop = useSelector((state) => state.popupactivation);

  const theme = { 
    colors: {
      header: '#ebfbff', //#323ea8
      body: '#329ea8',
      footer: '#003333'
    }
  }
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;

 // const testdata = {
  //   name: 'Daan',
  //   Role: 'admin',
  //   group: 'testgroup',
  // };
  
  // const fs = require('fs')
  
  // const saveData = (testdata) =>{
  //   const finishedfunction = (error) =>{
  //     if(error){
  //       console.error(error)
  //       return;
  //     }
  //   }

  //   const jsonData = JSON.stringify(testdata)
  //   fs.writeFile('dataexport.json',jsonData,finishedfunction)
  // }

  // saveData(testdata);
  

// const [textwalkthrough, setTextwalkthrough] = useState([
//   { id: 1, text: "text1" },
//   {
//     id: 2,
//     text: "text2",
//   },
// ]);
