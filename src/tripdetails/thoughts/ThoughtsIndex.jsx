// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "reactstrap";
// import ThoughtsIndexMap from './ThoughtsIndexMap';
// // import TripAdd from "./TripAdd";
// // import TripsTable from "./AllTripsTable";
// // import TripEdit from "./TripEdit";
// // import TripDetailsDisplay from "../tripdetails/TripDetailsDisplay";

// const ThoughtsList = (props) => {
//   const [trips, setTrips] = useState([]);
//   const [thoughts, setThoughts] = useState([]);
//   const [updateOpen, setUpdateOpen] = useState(false);
//   const [tripToUpdate, setTripToUpdate] = useState({});

//   const fetchTrips = () => {
//     fetch("https://server-fello-app.herokuapp.com/trip:tripid/allthoughts", {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': props.token, //or localStorage.token
//       }),
//     })
//       .then((res) => res.json())
//       .then((tripdata) => {
//         setTrips(tripdata);
//         console.log(tripdata)
//       })
//       .catch(err => console.log(err))
//   }

//   const editUpdateTrip = (trip) => {
//     setTripToUpdate(trip);
//     console.log(trip);
//   }

//   const updateOn = () => {
//     setUpdateOpen(true);
//   }

//   const updateOff = () => {
//     setUpdateOpen(false);
//   }

//   useEffect(() => {
//     fetchTrips();
//   }, [])

//   return (
//     <div>
//        <br/>
//       <hr/>
//       <br/>
//           {/* <h1>Thoughts Index</h1> */}
//         <h3 style={{marginTop:'50px'}}>Jot Down your Thoughts</h3>
//         <br/>
//     <p style={{fontFamily:'Roboto', fontSize:'large'}}>In the long run, boldface type is usually better than misty, watercolored memories.</p>
//     <ThoughtsIndexMap trips={trips} trip={props.trip} setTrips={setTrips} allTrips={props.allTrips} token={props.token} thoughts={thoughts} setThoughts={setThoughts} />
//      </div>
//   )
// }

// export default ThoughtsList;
