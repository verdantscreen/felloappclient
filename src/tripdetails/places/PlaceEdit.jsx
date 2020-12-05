import React, { useState } from 'react';
import { Button, Form, Input, InputGroupAddon, InputGroup } from 'reactstrap';

const PlaceEdit = (props) => {
  console.log("PlaceEdit props", props);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [purpose, setPurpose] = useState("");
  const [spend, setSpend] = useState(0);
  const [goBack, setGoBack] = useState(false);

  let tripId = props.tripId;

console.log("token", props.token);
console.log("prop", props);
  const handleSubmit = (e) => {
    console.log("PlaceEdit before prevent def")
    e.preventDefault();
    console.log("PlaceEdit after prevent def")
  fetch(`http://localhost:3001/places/trip${tripId}/place${props.id}`, {
      method: "PUT",
      body: JSON.stringify({
          placedata: {
            date: date,
            place: place,
            purpose: purpose,
            spend: spend,
            goBack: goBack,
            tripId: tripId
          },
      }),
      headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": props.token
      }),
  })
  .then((res) => console.log(res.json()))
  .then((placedata) => {
      setDate("");
      setPlace("");
      setPurpose("");
      setSpend(0);
      setGoBack(false);
  })
  .catch(err => console.log(err));
};

return(
<>
    <br/>
    <br/>
      <h3 style={{color:"#292a2b"}}>Add a Place to Visit</h3>
      <br/>
    {/* <Form onSubmit={handleSubmit} >
      <FormGroup
          style={{fontSize:'small', textAlign:"center", color:"#292a2b"}}>
            <Label>What?:</Label><Input/>
            </FormGroup>
            <FormGroup>
            <Label>How Many?:</Label><Input/></FormGroup>
            <Button type="submit">Click</Button>
      </Form> */}
      <Form onSubmit={handleSubmit} >
      <InputGroup>
      <InputGroupAddon addonType="prepend">Item(s):</InputGroupAddon>
        <Input placeholder="how many?" min={0} max={100} type="number" step="1"  onChange={((e) => setPlace(e.target.value))} />
        <InputGroupAddon addonType="append"></InputGroupAddon>
        <Input placeholder="of what?" onChange={((e) => setDate(e.target.value))} />
        <InputGroupAddon addonType="append">
          <Button color="secondary" type="submit"> + </Button>
        </InputGroupAddon>
      </InputGroup>
      </Form>
    </>
  );
};

export default PlaceEdit;