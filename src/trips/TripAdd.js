import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const TripAdd = (props) => {
  // const currentTime = new Date().toLocaleString().slice(0, 10);
//   function formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2) 
//         month = '0' + month;
//     if (day.length < 2) 
//         day = '0' + day;

//     return [year, month, day].join('-');
// }
console.log(props.token);

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
      .then((res) => console.log(res.json()))
      .then((tripdata) => {
        setDestination("");
        setDepartDate("");
        setReturnDate("");
        setCompanions("");
        setOccasion("");
        // props.fetchTrips();
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
