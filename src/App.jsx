import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sitebar from './components/Sitebar';
import {BrowserRouter as Router} from 'react-router-dom'; 

  function App() {
    // const [token, setToken] = useState("");
    const [token, setToken] = useState("");

    const updateToken = (newToken) => {
      localStorage.setItem("token", newToken);
      setToken(newToken);
      console.log(token);
    };
  
    useEffect(() => {
      document.title = "Wherever you go, fello!";
    }, []);

  return (
    <div className="App" style={{backgroundColor: "#f2f2e7"}}>
      <h1 style={{color: "#292a2b"}}>fello</h1>
      <Router >
      <Sitebar updateToken={updateToken} token={token} setToken={setToken}/>
      </Router>
    </div>
  );
}

export default App;