import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
// import TripAdd from "./TripAdd";
// import TripsTable from "./AllTripsTable";
// import TripEdit from "./TripEdit";
// import TripDetailsDisplay from "../tripdetails/TripDetailsDisplay";

const ThoughtsList = (props) => {
  const [trips, setTrips] = useState([]);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [tripToUpdate, setTripToUpdate] = useState({});

  const fetchTrips = () => {
    fetch("http://localhost:3001/trip:tripid/allthoughts", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token, //or localStorage.token
      }),
    })
      .then((res) => res.json())
      .then((tripdata) => {
        setTrips(tripdata);
        console.log(tripdata)
      })
      .catch(err => console.log(err))
  }

  const editUpdateTrip = (trip) => {
    setTripToUpdate(trip);
    console.log(trip);
  }

  const updateOn = () => {
    setUpdateOpen(true);
  }

  const updateOff = () => {
    setUpdateOpen(false);
  }

  useEffect(() => {
    fetchTrips();
  }, [])

  return (
    <>
    <Container>
      <Row>
        <Col md="2">
          {/* <TripAdd 
          fetchTrips={fetchTrips} 
          token={props.token}
          trips={trips}
          />*/}
        </Col> 
        <Col md="10">
          {/* <TripsTable
            trips={trips}
            editUpdateTrip={editUpdateTrip}
            updateOn={updateOn}
            fetchTrips={fetchTrips}
            token={props.token}
          /> */}
        </Col>
        {/* {updateOpen ? 
          // <TripEdit
          //   tripToUpdate={tripToUpdate}
          //   updateOff={updateOff}
          //   token={props.token}
          //   fetchTrips={fetchTrips}
          // /> :
          <></>} */}
      </Row>
    </Container>
    {/* <div style={{display:'none', visibility:'hidden'}}>
     <TripDetailsDisplay 
            style={{display:'none', visibility:'hidden'}} 
            trips={trips}
            editUpdateTrip={editUpdateTrip}
            updateOn={updateOn}
            fetchTrips={fetchTrips}
            token={props.token}/>
     </div> */}
     </>
  )
}

export default ThoughtsList;
