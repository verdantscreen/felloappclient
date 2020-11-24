import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import {} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sitebar from './home/Sitebar';
import Auth from "./auth/Auth";
import AllTripsIndex from "./trips/AllTripsIndex";

  function App() {
    const [sessionToken, setSessionToken] = useState("");
    useEffect(() => {
      if (localStorage.getItem("token")) {
        setSessionToken(localStorage.getItem("token"));
      }
    }, []);
  
    const updateToken = (newToken) => {
      localStorage.setItem("token", newToken);
      setSessionToken(newToken);
      console.log(sessionToken);
    };
  
    const clearToken = () => {
      localStorage.clear();
      setSessionToken("");
    };
  
    const protectedViews = () => {
      return sessionToken === localStorage.getItem("token") ? (
        <AllTripsIndex token={sessionToken} />
      ) : (
        <Auth updateToken={updateToken} />
      );
    };
  return (
    <div className="App" style={{backgroundColor: "#f2f2e7"}}>
      <h1 style={{color: "#292a2b"}}>fello</h1>
      <Sitebar clickLogout={clearToken} token={sessionToken} />
      {protectedViews()}
      <br />
      <body>
        <p style={{backgroundColor: "#f2f2e7", textAlign: "center"}}>Your memories, your time, your peace of mind are precious. <br /> Wherever you roam, for work or play: <br /> Don't wander without your fello, traveler!</p>
      </body>
      
    </div>
  );
}

export default App;
