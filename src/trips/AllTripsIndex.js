import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import TripAdd from "./TripAdd";
import TripsTable from "./AllTripsTable";
import TripEdit from "./TripEdit";
import ThingsIndex from '../tripdetails/things/ThingsIndex';
// import PlacesIndex from '../tripdetails/places/PlacesIndex';
import ThoughtsIndex from '../tripdetails/thoughts/ThoughtsIndex';
// import TripDetailsDisplay from "../tripdetails/TripDetailsDisplay";

const TripIndex = (props) => {
  const [trips, setTrips] = useState([]);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [tripToUpdate, setTripToUpdate] = useState({});
  const [singleTrip, setSingleTrip] = useState();

  const fetchTrips = () => {
    fetch("https://server-fello-app.herokuapp.com/mytrips/alltrips", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token, //or localStorage.token
      }),
    })
      .then((res) => res.json())
      .then((tripdata) => {
        setTrips(tripdata);
        console.log("the tripdata I want ln24 AllTripsIndex", tripdata)
      })
      .catch(err => console.log(err))
  }

  const editUpdateTrip = (whatever) => {
    setTripToUpdate(whatever);
    console.log("ALLTRIPSINDEX what is whatever?: ", whatever);
  }

  const updateOn = () => {
    setUpdateOpen(true);
  }

  const updateOff = () => {
    setUpdateOpen(false);
  }

  useEffect(() => {
    fetchTrips();
  }, [props.isAuth])

  return singleTrip ? 
  (
  <div>
  {/* <TripDetailsDisplay trip={singleTrip} isAuth={props.isAuth} token={props.token}/> */}
  <Container >
      <Row>
        {/* <Col > */}
  <ThingsIndex 
  trip={singleTrip} 
  isAuth={props.isAuth} 
  token={props.token} 
  trips={trips} 
  tripToUpdate={tripToUpdate}
  updateOff={updateOff}
  updateOn={updateOn}
  updateOpen={updateOpen}
  editUpdateTrip={editUpdateTrip}
  />
    <br/>
  <hr/>
  <br/>
{/* </Col> */}
 
{/* <Col> */}
  {/* <PlacesIndex
  trip={singleTrip} 
  isAuth={props.isAuth} 
  token={props.token} 
  trips={trips} 
  tripToUpdate={tripToUpdate}
  updateOff={updateOff}
  updateOn={updateOn}
  updateOpen={updateOpen}
  editUpdateTrip={editUpdateTrip}
  /> */}
  {/* </Col> */}
  <br/>
  <hr/>
  <br/>
  {/* <ThoughtsIndex
   trip={singleTrip} 
   isAuth={props.isAuth} 
   token={props.token} 
   trips={trips} 
   tripToUpdate={tripToUpdate}
   updateOff={updateOff}
   updateOn={updateOn}
   updateOpen={updateOpen}
   editUpdateTrip={editUpdateTrip}
   /> */}
  </Row>
  </Container>
  </div>
  ) : (
    <div>
    <Container>
      <Row>
        <Col md="2">
          <TripAdd 
          fetchTrips={fetchTrips} 
          token={props.token}
          trips={trips}
          />
        </Col>
        <Col md="10">
          <TripsTable
          setSingleTrip={setSingleTrip}
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
     </div>
  )
}

export default TripIndex;
