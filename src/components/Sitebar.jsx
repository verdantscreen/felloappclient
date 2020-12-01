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
import Auth from '../auth/Auth';
import Landing from '../pages/Landing';
import TripIndex from "../trips/AllTripsIndex";

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
        <Navbar style={{color: "#f2f2e7", backgroundColor: "coral"}} light expand="md">
            <NavbarBrand style={{color: "#292a2b", marginLeft: 25}} href="/">  * f * </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
             <Nav className="mr-auto" navbar>
             { localStorage.getItem('token') !== null ? <NavItem>
            <NavLink href="/mytrips/"><span className="nbt">My Trips</span></NavLink>
            </NavItem>: null}
          </Nav>
          <Nav>
            <Auth isAuth={props.isAuth} updateToken={props.updateToken} token={props.token} setToken={props.setToken}/>
          </Nav>
          <NavLink href="/">
          { localStorage.getItem('token') !== null ? <Button className="btn1" id="buttonHover"
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
        <Landing/>
        <BrowserRouter>
        <Switch>
            {/* <Route exact path="/"><Landing/></Route> */}

            <Route exact path="/mytrips/">{ props.isAuth ? <TripIndex token={props.token} setToken={props.setToken}/> : null}</Route>

      </Switch>
      </BrowserRouter>
    </div>
    )
}

export default Sitebar;