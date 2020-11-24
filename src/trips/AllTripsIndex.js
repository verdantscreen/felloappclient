import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import TripAdd from "./TripAdd";
import TripsTable from "./AllTripsTable";
import TripEdit from "./TripEdit";

const TripIndex = (props) => {
  const [trips, setTrips] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [tripToUpdate, setTripToUpdate] = useState({});

  const fetchTrips = () => {
    fetch("https://fello-server.herokuapp.com/mytrips/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.token,
      }),
    })
      .then((res) => res.json())
      .then((logdata) => {
        setTrips(logdata);
      });
  };

  const editUpdateTrip = (Trip) => {
    setTripToUpdate(Trip);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="3">
          <TripAdd fetchTrips={fetchTrips} token={props.token} />
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
        {updateActive ? (
          <TripEdit
            tripToUpdate={tripToUpdate}
            updateOff={updateOff}
            fetchTrips={fetchTrips}
            token={props.token}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default TripIndex;
