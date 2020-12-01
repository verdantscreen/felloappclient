import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Signin = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signinModal, setSigninModal] = useState(false);

  const toggle = () => setSigninModal(!signinModal);

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/user/signin', {
        method: 'POST',
        body: JSON.stringify({user:{email: email, password: password}}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken)
    })
}

  return (
    <div className="root">
      {localStorage.getItem('token') === null ? <Button style={{backgroundColor: '#f2f2e7',
        color: 'black',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',
        boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
        border: 'none'
        }} id="buttonHover" onClick={toggle}>Sign In {buttonLabel}</Button>
        : null}
      <Modal isOpen={signinModal} toggle={toggle} className={className} >
        <ModalHeader toggle={toggle} style={{fontFamily: 'Corben'}}>Welcome back!</ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email" style={{fontFamily: 'Roboto'}}>Email: </Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password" style={{fontFamily: 'Roboto'}}>Password: </Label>
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password}/>
                </FormGroup>
                <FormGroup>
                <Button style={{backgroundColor: '#ff7f50',
                color: '#292a2b',
                fontFamily: 'Corben',
                marginRight: '5px',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
                border: 'none'
                }} id="buttonHover" onClick={toggle} type="submit">Sign In</Button>{' '}
                <Button id="buttonHover" style=
                {{borderRadius: '10px',
                color: "#292a2b",
                fontFamily: 'Corben',
                marginLeft: '5px',
                transition: 'transform 0.3s ease',
                boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
                border: 'none'}}
                onClick={toggle}>Cancel</Button>
                </FormGroup>
            </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Signin;
