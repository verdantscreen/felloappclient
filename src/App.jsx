import React, { useState, useEffect, Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import Sitebar from './components/Sitebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import TripIndex from "./trips/AllTripsIndex";
// import TripDetailsDisplay from "./tripdetails/TripDetailsDisplay";

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
          else {setToken('')
        setIsAuth(false);
        }
      } else console.log("else else hit")
    }, []); //remove isAuth

    const updateToken = (sessionToken) => {
      localStorage.setItem('token', sessionToken);
      setToken(sessionToken);
      console.log(sessionToken);
    };
  
if(isAuth){

  return (
    <div className="App" style={{backgroundColor: "#f2f2e7"}}>
      <h1 style={{color: "#292a2b"}}>fello</h1>
      <Router >
      <Sitebar 
      updateToken={updateToken} 
      token={token} 
      setToken={setToken } 
      isAuth={isAuth} 
      setIsAuth={setIsAuth}/>
      <TripIndex 
            token={token} 
            setToken={setToken} 
            isAuth={isAuth}
            /> 
        <Switch>
            {/* <Route exact path="/"><Landing/></Route> */}
            <Route exact path="/mytrips/"> 
            {/* <TripIndex 
            token={token} 
            setToken={setToken} 
            isAuth={isAuth}
            />  */}
            </Route>
            {/* <Route exact path="/tripdetails"> <TripDetailsDisplay token={token} setToken={setToken} isAuth={isAuth}/></Route> */}
      </Switch>
      </Router>
      {/* <Landing/> */}
    </div>
  );
} else {
  return(
    <Router >
      <div className="App" style={{backgroundColor: "#f2f2e7"}}>
      <h1 style={{color: "#292a2b"}}>fello</h1>
      <Sitebar 
      updateToken={updateToken} 
      token={token} 
      setToken={setToken } 
      isAuth={isAuth} 
      setIsAuth={setIsAuth}/>
      <Landing/>
      </div>
    </Router>
  )
}
}

export default App;
