import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import {} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sitebar from './home/Sitebar';
// require('dotenv').config();

// const App: React.FunctionComponent = () => {
  function App() {
  return (
    <div className="App" style={{backgroundColor: "#f2f2e7"}}>
      <h1 style={{color: "#292a2b"}}>fello</h1>
      <Sitebar />
      <br />
      <body>
        <p style={{backgroundColor: "#f2f2e7", textAlign: "center"}}>Your memories, your time, your peace of mind are precious. <br /> Wherever you roam, for work or play: <br /> Don't wander without your fello, traveler!</p>
      </body>
      
    </div>
  );
}

export default App;
