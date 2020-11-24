import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Register from './SignUp';
import Signin from './SignIn';
import "bootstrap/dist/css/bootstrap.min.css";

const Auth = (props) => {
    return(
        <Container className="auth-container">
            <Col>
                    <Register updateToken={props.updateToken}/>
            </Col>
            <Col/>
            <Col>
                    <Signin updateToken={props.updateToken}/>
            </Col>
        </Container>
    )
}

export default Auth;