import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const TripAdd = (props) => {
console.log("ln 5 TripAdd props", props);
console.log("ln 6 TripAdd props.token", props.token);

  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [companions, setCompanions] = useState("");
  const [occasion, setOccasion] = useState("");

// https://fello-server.herokuapp.com/mytrips/ 
  const handleSubmit = (e) => {
    console.log("before prevent def")
    // e.preventDefault();
    console.log("after prevent def")
    fetch(`https://server-fello-app.herokuapp.com/mytrips/addtrip`, {
      method: "POST",
      body: JSON.stringify({
        tripdata: {
            destination: destination,
            departDate: departDate,
            returnDate: returnDate,
            companions: companions,
            occasion: occasion
          },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.token
      }),
    })
      .then((res) => console.log("c.l res.json", res.json()))
      .then((tripdata) => {
        setDestination("");
        setDepartDate("");
        setReturnDate("");
        setCompanions("");
        setOccasion("");
        // props.fetchTrips();
        console.log("c.l tripdata in TripAdd.js", tripdata);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
    <br/>
    <br/>
      <h3 style={{color:"#292a2b"}}>Log a Trip</h3>
      <br/>
      <Form onSubmit={handleSubmit} >
        <FormGroup>
          <Label htmlFor="destination">Destination Known:</Label>
          <Input
          required
          style={{fontFamily:'Roboto', fontSize: 'medium'}}
            name="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="departDate">Get Outta Town:</Label>
          <Input
            style={{textAlign:"right", fontFamily:'Roboto', fontSize:'small', fontWeight:'bolder'}}
            type="date"
            name="departDate"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
          >
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="returnDate">Back Home Again:</Label>
          <Input
            style={{textAlign:"right", fontFamily: 'Roboto', fontSize:'small', fontWeight:'bolder'}}
            type="date"
            name="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="companions">Travel Buddies:</Label>
          <Input
            style={{fontFamily: 'Roboto'}}
            name="companions"
            value={companions}
            onChange={(e) => setCompanions(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="occasion">What Brings You Here?:</Label>
          <Input
          style={{fontFamily: 'Roboto'}}
            type="select"
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option></option>
            <option style={{fontFamily: 'Corben', fontSize:'small'}} value="just bc">just because</option>
            <option style={{fontFamily: 'Corben', fontSize:'small'}} value="family">family</option>
            <option style={{fontFamily: 'Corben', fontSize:'small'}} value="work">work</option>
            <option style={{fontFamily: 'Corben', fontSize:'small'}} value="use Update to specify">something else</option>
            </Input>
        </FormGroup>
        <Button 
        type="submit" 
        style={{textAlign:"center",
                backgroundColor: '#ff7f50',
                color: '#292a2b',
                fontFamily: 'Corben',
                marginRight: '5px',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
                border: 'none'
                }} id="buttonHover" 
        >Log Trip</Button>
      </Form>
      <br />
      <br />
    </>
  );
};

export default TripAdd;
