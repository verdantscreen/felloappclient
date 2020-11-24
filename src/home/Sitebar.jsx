import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button, NavbarText } from 'reactstrap';
import Auth from '../auth/Auth';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    const [sessionToken, setSessionToken] = useState("");
  
    const updateToken = (newToken) => {
      localStorage.setItem("token", newToken);
      setSessionToken(newToken);
      console.log(sessionToken);
    };
      
    // const isAuth = !!localStorage.getItem("token");
  
    const logOut = () => {
      localStorage.clear("token");
      setSessionToken('');
      alert('You have been successfully logged out.')
    };

    return(
        <div>
        <Navbar style={{color: "#f2f2e7", backgroundColor: "coral"}} light expand="md">
            <NavbarBrand style={{color: "#292a2b", marginLeft: 25}} href="/">  * fello * </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
             <Nav className="mr-auto" navbar>
            {/* <NavItem href="/"><NavLink style={{color: "#292a2b"}}>Sign Up</NavLink></NavItem>
            <NavItem href="/"><NavLink style={{color: "#292a2b"}}>Sign In</NavLink></NavItem> */}
            {/* <NavbarText><span className="nbt">Wherever you go, </span><span className="nbt"> fello !</span></NavbarText> */}
            <NavItem>
            {localStorage.getItem('token') !== null ? <NavLink href="/search"><span className="nbt">My Trips</span></NavLink>
            : null}
            </NavItem>
            {/* <NavItem>
            {localStorage.getItem('token') !== null ? <NavLink href="/list"><span className="span">Things</span></NavLink>
            : null}
            </NavItem>
            <NavItem>
            {localStorage.getItem('token') !== null ? <NavLink href="/list"><span className="span">Doings</span></NavLink>
            : null}
            </NavItem> */}
          </Nav>
          <Nav>
            <Auth updateToken={updateToken}/>
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

            </Collapse>
        </Navbar>        
        <body></body>
    </div>
  //   const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   let newIsOpen = !isOpen;
  //   setIsOpen(newIsOpen);
  // };
  //   return(
  //       <Navbar color="faded" light expand="md">
  //     <NavbarBrand href="/">* f *</NavbarBrand>
  //     <NavbarToggler onClick={toggle} />
  //     <Collapse isOpen={isOpen} navbar>
  //       <Nav className="ml-auto" navbar>
  //         <NavItem>
  //       {props.token ? <Button onClick={props.clickLogout}>Logout</Button> : null }
  //         </NavItem>
  //       </Nav>
  //     </Collapse>
  //   </Navbar>
    )
}



export default Sitebar;