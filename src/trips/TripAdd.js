import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const TripAdd = (props) => {
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [companions, setCompanions] = useState("");
  const [occasion, setOccasion] = useState("");

  // http://localhost:3000/mytrips/  https://fello-server.herokuapp.com/mytrips/ 
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/mytrips/addtrip`, {
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
      .then((res) => res.json())
      .then((logdata) => {
        console.log(logdata);
        setDestination("");
        setDepartDate("");
        setReturnDate("");
        setCompanions("");
        setOccasion("");
        props.fetchTrips();
      });
  };

  return (
    <>
    <br/>
    <br/>
      <h3 style={{color:"#292a2b"}}>Log a Trip</h3>
      <br/>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="destination">Destination Known:</Label>
          <Input
            name="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="departDate">Get Outta Town:</Label>
          <Input
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
            type="date"
            name="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="companions">Travel Buddies:</Label>
          <Input
            name="companions"
            value={companions}
            onChange={(e) => setCompanions(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="occasion">What Brings You Here?:</Label>
          <Input
            type="select"
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option></option>
            <option value="Just bc">Just Because</option>
            <option value="Family">Family</option>
            <option value="Work">Work</option>
            </Input>
        </FormGroup>
        <Button type="submit" style={{textAlign:"center", backgroundColor:"#ff7f50"}} >Log Trip</Button>
      </Form>
    </>
  );
};

export default TripAdd;
