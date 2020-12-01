import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './pages/Landing';
import Sitebar from './components/Sitebar';
import {BrowserRouter as Router} from 'react-router-dom'; 

  function App() {
    const [token, setToken] = useState("");
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      if (localStorage.getItem('token')){
        let lstoken = localStorage.getItem('token')
        if (lstoken) {
          setToken(lstoken);
          setIsAuth(true);
          
        }
          else {setToken('')}
      } else console.log("not working")
    }, [isAuth]);

    const updateToken = (sessionToken) => {
      localStorage.setItem('token', sessionToken);
      setToken(sessionToken);
      console.log(sessionToken);
    };
  
  return (
    <div className="App" style={{backgroundColor: "#f2f2e7"}}>
      <h1 style={{color: "#292a2b"}}>fello</h1>
      <Router >
      <Sitebar updateToken={updateToken} token={token} setToken={setToken } isAuth={isAuth} setIsAuth={setIsAuth}/>
      </Router>
      {/* <Landing/> */}
    </div>
  );
}

export default App;

// import React, { Component } from 'react';
// import Sitebar from './components/Sitebar';
// import {BrowserRouter as Router} from 'react-router-dom'; 
// import "bootstrap/dist/css/bootstrap.min.css";

// class App extends Component {
//   render(){
//     return <Sitebar updateToken={updateToken()} token={token} setToken={setToken()} />
//   }
// }