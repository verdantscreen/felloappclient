import React, {useState} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
// import SomeFeatureLike Search from './filepath';
import Auth from '../auth/Auth';
import Landing from '../pages/Landing';
import TripIndex from "../trips/AllTripsIndex";

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    // const [token, setToken] = useState("");
  
    // const updateToken = (newToken) => {
    //   localStorage.setItem("token", newToken);
    //   setToken(newToken);
    //   console.log(token);
    // }; not useful here!
      
    const isAuth = !!localStorage.getItem("token");
  
    const logOut = () => {
      localStorage.clear("token");
      props.setToken('');
      alert('You have been successfully logged out.')
    };

    return(
        <div>
        <Navbar style={{color: "#f2f2e7", backgroundColor: "coral"}} light expand="md">
            <NavbarBrand style={{color: "#292a2b", marginLeft: 25}} href="/">  * f * </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
             <Nav className="mr-auto" navbar>

            <NavItem>
            { localStorage.getItem('token') !== null ?
            <NavLink href="/mytrips/"><span className="nbt">My Trips</span></NavLink> : null}
            </NavItem>
          </Nav>
          <Nav>
            <Auth updateToken={props.updateToken} token={props.token} setToken={props.setToken}/>
          </Nav>
          <NavLink href="/">
            {localStorage.getItem('token') !== null ? <Button className="btn1" id="buttonHover"
            style={{ marginRight: 25,
            backgroundColor: "#292a2b",
            borderRadius: '10px',
            transition: 'transform 0.3s ease',
            boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
            border: 'none' }} onClick={logOut}>Sign Out</Button> 
            : null}

            </NavLink>
            <NavbarText><span className="nbtext1">Wherever you go, </span><span className="nbtext2"> fello !</span></NavbarText>
            </Collapse>
        </Navbar>
        <BrowserRouter>
        <Switch>
            {/* <Route exact path="/"><Landing/></Route> */}
            <Route exact path="/mytrips/"> { localStorage.getItem('token') !== null ? <TripIndex/> : <Landing/> } </Route>
      </Switch>
      </BrowserRouter>
    </div>
    )
}

export default Sitebar;