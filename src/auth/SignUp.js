import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Signup(props) {
  const {
    buttonLabel,
    className
  } = props;

  const [signupModal, setSignupModal] = useState(false);

  const toggle = () => setSignupModal(!signupModal);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/user/signup', {
      method: 'POST',
      body: JSON.stringify({ user: { name: name, email: email, password: password } }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      props.updateToken(data.sessionToken);
    }).then(alert('Your account has been created!'))
  };

  return (
    <div className="root">
      {localStorage.getItem('token') === null ? <Button type="button" id="buttonHover" style=
        {{backgroundColor: '#f2f2e7',
        color: 'black',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',
        boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
        border: 'none'
        }} onClick={toggle}>Sign Up{buttonLabel}</Button>
        : null}
      <Modal isOpen={signupModal} toggle={toggle} className={className}>
        <ModalHeader style={{fontFamily: 'Corben'}} toggle={toggle}>Become a fello traveler!</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
          <FormGroup>
              <Label htmlFor="name" style={{fontFamily: 'Roboto'}}>Name: </Label>
              <Input onChange={(e) => setName(e.target.value)} name="name" type="name" value={name} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email" style={{fontFamily: 'Roboto'}}>Email: </Label>
              <Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" value={email} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password" style={{fontFamily: 'Roboto'}}>Password: </Label>
              <Input minLength="5" onChange={(e) => setPassword(e.target.value)} name="password" type="password" value={password} />
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
                }} id="buttonHover" type="submit" onClick={toggle}>Sign Up</Button>{' '}
              <Button id="buttonHover" style=
              {{borderRadius: '10px',
              color: "#292a2b",
              fontFamily: 'Corben',
              marginLeft: '5px',
              transition: 'transform 0.3s ease',
              boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
              border: 'none'}} onClick={toggle}>Cancel</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Signup;
