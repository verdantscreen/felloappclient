import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './SignUp';
import Signin from './SignIn';
import "bootstrap/dist/css/bootstrap.min.css";

const Auth = (props) => {
    console.log(props.isAuth)
    return(
        <div>
        {/* <Container className="auth-container"> */}
        <Row>
            <Signup setIsAuth={props.setIsAuth} updateToken={props.updateToken}/>
            <Signin setIsAuth={props.setIsAuth} updateToken={props.updateToken}/>
        </Row>
        </div>
    )
}

export default Auth;

// import React, { Component } from 'react';
// import {Container, Row, Col} from 'reactstrap';
// import Signup from './SignUp';
// import Signin from './SignIn';
// import "bootstrap/dist/css/bootstrap.min.css";

// class Auth extends Component {
//     render()
//         {return <Container className="auth-container">
//             <Col>
//                     <Signup updateToken={this.props.updateToken}/>
//             </Col>
//             <Col/>
//             <Col>
//                     <Signin updateToken={this.props.updateToken}/>
//             </Col>
//         </Container>
//     }
// }

// export default Auth;