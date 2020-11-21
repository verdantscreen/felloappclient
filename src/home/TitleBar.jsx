// import React from 'react'
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
// import { Route, Switch, Redirect } from "react-router-dom";
// import SignIn from './auth/SignIn';
// import SignUp from './auth/SignUp';

// type PropTypes = {
//     updateToken:(token: string) => void;
// }

// export default class TitleBar extends React.Component<PropTypes, {}>{
//     state = {
//         isOpen: true
//     };

//     changeOpen = () => {
//         this.setState({
//             isOpen: (!this.state.isOpen)
//         });
//         console.log('test');
//     }

//     render(){
//         return(
//             <div>
//         <Navbar style={{color: "#f2f2e7", backgroundColor: "coral"}} light expand="md">
//             <NavbarBrand style={{color: "#292a2b"}} href="/">  * f * </NavbarBrand>
//             <NavbarToggler onClick={this.changeOpen} />
//             <Collapse isOpen={!this.state.isOpen} navbar>
//              <Nav className="mr-auto" navbar>
//             {/* <NavItem href="/"><NavLink style={{color: "#292a2b"}}>Sign Up</NavLink></NavItem>
//             <NavItem href="/"><NavLink style={{color: "#292a2b"}}>Sign In</NavLink></NavItem> */}
//             <NavbarText><span className="nbt">Wherever you go, </span><span className="nbt"> fello !</span></NavbarText>
//             <NavItem>
//             {localStorage.getItem('token') !== null ? <NavLink href="/search"><span className="nbt">My Trips</span></NavLink>
//             : null}
//             </NavItem>
//             <NavItem>
//             {localStorage.getItem('token') !== null ? <NavLink href="/list"><span className="span">Search</span></NavLink>
//             : null}
//             </NavItem>
//           </Nav>
//           <Nav>
//             <Auth updateToken={updateToken}/>
//           </Nav>
//           <NavLink href="/">
//             {localStorage.getItem('token') !== null ? <Button className="btn1" id="buttonHover"
//             style={{ marginRight: 25,
//             backgroundColor: "#292a2b",
//             borderRadius: '10px',
//             transition: 'transform 0.3s ease',
//             boxShadow: '5px 5px 5px 0px rgba(231,23,232,0.3)',
//             border: 'none' }} onClick={logOut}>Sign Out</Button> 
//             : null}

//             </NavLink>

//             </Collapse>
//         </Navbar>
//         </div>
//         )
//     }
// }

