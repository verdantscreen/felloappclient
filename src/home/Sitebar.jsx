import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button, NavbarText } from 'reactstrap';
import Auth from '../auth/Auth';

// export default function Sitebar() {
//     return (
//         <div>
//         <h1>hello</h1>
//         </div>
//     )
// }

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    const [sessionToken, setSessionToken] = useState("");
  
    const updateToken = (newToken) => {
      localStorage.setItem("token", newToken);
      setSessionToken(newToken);
      console.log(sessionToken);
    };
      
    const isAuth = !!localStorage.getItem("token");
  
    const logOut = () => {
      localStorage.clear("token");
      setSessionToken('');
      alert('You have been successfully logged out.')
    };

    return(
        <div>
        <Navbar style={{color: "#f2f2e7", backgroundColor: "coral"}} light expand="md">
            <NavbarBrand style={{color: "#292a2b"}} href="/">  * f * </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
             <Nav className="mr-auto" navbar>
            <NavItem href="/"><NavLink style={{color: "#292a2b"}}>Sign Up</NavLink></NavItem>
            <NavItem href="/"><NavLink style={{color: "#292a2b"}}>Sign In</NavLink></NavItem>
            
            <NavItem>
            {localStorage.getItem('token') !== null ? <NavLink href="/search"><span className="nbt">Recipe Search</span></NavLink>
            : null}
            </NavItem>
            <NavItem>
            {localStorage.getItem('token') !== null ? <NavLink href="/list"><span className="span">Shopping List</span></NavLink>
            : null}
            </NavItem>
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
            boxShadow: '5px 5px 5px 0px rgba(231,23,232,0.3)',
            border: 'none' }} onClick={logOut}>Log out</Button> 
            : null}

            </NavLink>
          <NavbarText><span className="nbt">Finding recipes with </span><span className="nbt">eaze.</span></NavbarText>
            </Collapse>
        </Navbar>
        </div>
    )
}



export default Sitebar;