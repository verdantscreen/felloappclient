import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import TripAdd from "./TripAdd";
import TripsTable from "./AllTripsTable";
import TripEdit from "./TripEdit";

const TripIndex = (props) => {
  const [trips, setTrips] = useState([]);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [tripToUpdate, setTripToUpdate] = useState({});

  const fetchTrips = () => {
    fetch("http://localhost:3001/mytrips/alltrips", {
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
    <Container>
      <Row>
        <Col md="3">
          <TripAdd 
          fetchTrips={fetchTrips} 
          token={props.token}
          trips={trips}
          />
        </Col>
        <Col md="9">
          <TripsTable
            trips={trips}
            editUpdateTrip={editUpdateTrip}
            updateOn={updateOn}
            fetchTrips={fetchTrips}
            token={props.token}
          />
        </Col>
        {updateOpen ? 
          <TripEdit
            tripToUpdate={tripToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchTrips={fetchTrips}
          /> :
          <></>}
      </Row>
    </Container>
  )
}

export default TripIndex;
