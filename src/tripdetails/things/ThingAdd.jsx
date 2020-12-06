import React, { useState } from 'react';
import { Button, Form, Input, InputGroupAddon, InputGroup } from 'reactstrap';

const ThingAdd = (props) => {
  console.log("ThingAdd props", props);
  console.log("ThingAdd props.things", props.things);

  const [thing, setThing] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [packed, setPacked] = useState(false);
  const [repacked, setRepacked] = useState(false);
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  let tripId = props.tripId;

  console.log("token", props.token);
console.log("prop", props);

const handleSubmit = (e) => {
  console.log("THINGADD before prevent def TRIPID", tripId)
    e.preventDefault();
    console.log("THINGADD after prevent def PROPS", props)
  fetch(`http://localhost:3001/things/trip${tripId}/addthing`, {
      method: "POST",
      body: JSON.stringify({
          packdata: {
            thing: thing,
            quantity: quantity,
            packed: packed,
            repacked: repacked,
            tripId: tripId
          },
      }),
      headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": props.token
      }),
  })
  .then((res) => console.log(res.json()))
  .then((packdata) => {
      setThing("");
      setQuantity(0);
      setPacked(false);
      setRepacked(false);
      console.log("c.l packdata in ThingAdd.js", packdata);
      props.fetchThings();
  })
  .catch(err => console.log(err));
};

return(
<>
    <br/>
    <br/>
      <h3 style={{color:"#292a2b"}}>Let's Pack</h3>
      <p>What're you bringing with you?</p>
      <br/>
      <Form onSubmit={handleSubmit}  >
      <InputGroup >
      <InputGroupAddon addonType="prepend">Item(s):</InputGroupAddon>
        <Input style={{fontFamily:'Roboto', textAlign:'right'}} placeholder="how many?" min={1} max={100} type="number" step="1" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <InputGroupAddon addonType="append"></InputGroupAddon>
        <Input style={{borderRadius:'0px 5px 5px 0px', fontFamily:'Roboto'}} placeholder="of what?" required name="thing" value={thing} onChange={(e) => setThing(e.target.value)}></Input>
        <InputGroupAddon addonType="append">
          <Button 
          type="submit" 
          style={{textAlign:"center",
                backgroundColor: '#ff7f50',
                color: '#292a2b',
                fontFamily: 'Corben',
                marginLeft: '5px',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
                border: 'none'
                }} 
          id="buttonHover" 
          > Add </Button>
        </InputGroupAddon>
      </InputGroup>
      </Form>
    </>
  );
};

export default ThingAdd;