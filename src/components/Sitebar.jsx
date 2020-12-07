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
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../auth/Auth';
import Landing from '../pages/Landing';
import TripIndex from "../trips/AllTripsIndex";
import TripDetailsDisplay from "../tripdetails/TripDetailsDisplay";

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
      
    const logOut = () => {
      localStorage.clear();
      props.setToken('');
      props.setIsAuth(false);
      alert('You have been successfully logged out.')
    };
    console.log(props.isAuth);
    return(
        <div>
        <Navbar style={{color: "#f2f2e7", backgroundColor: "coral", fontFamily:'Corben'}} light expand="md">
            <NavbarBrand style={{color: "#292a2b", marginLeft: 25}} href="/">  * f * </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
             <Nav className="mr-auto" navbar>
             { props.isAuth ? <NavItem>
            <NavLink style={{color: "#292a2b", background: "#f2f2e7", borderRadius: '10px'}} href="/mytrips/"><span className="nbt">My Trips</span></NavLink>
            </NavItem>: null}
          </Nav>
          <Nav>
            <Auth isAuth={props.isAuth} setIsAuth={props.setIsAuth} updateToken={props.updateToken} token={props.token} setToken={props.setToken} />
          </Nav>
          <NavLink href="/">
          { props.isAuth ? <Button className="btn1" id="buttonHover"
            style={{ marginRight: 25,
            backgroundColor: "#292a2b",
            borderRadius: '10px',
            transition: 'transform 0.3s ease',
            boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
            border: 'none' }} onClick={logOut}>Sign Out</Button> : null}
            </NavLink>
            <NavbarText><span className="nbtext1">Wherever you go, </span><span className="nbtext2"> fello !</span></NavbarText>
            </Collapse>
        </Navbar> 
    </div>
    )
}

export default Sitebar;