// import React, { useState, useEffect } from 'react'
// import { Col, Card, Row } from "reactstrap";
// import ThingsIndex from './things/ThingsIndex';
// import PlacesIndex from './things/ThingsIndex';

// //fetch: GET all trips
// // set our SV allTrips to fetch results

// const TripDetailsDisplay = (props) => {

//     const [allTrips, setAllTrips] = useState([]);

//     const fetchTrips = () => {
//         fetch(`http://localhost:3001/mytrips/alltrips`, {
//           method: 'GET',
//           headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': props.token, //or localStorage.token
//           }),
//         })
//           .then((res) => res.json())
//           .then((tripsArray) => {
//             setAllTrips(tripsArray);
//             console.log("Trips Array TDD", tripsArray)
//           })
//           .catch(err => console.log(err))
//       }
//   // useEffect to check if user is authed
//       useEffect(() => {
//         fetchTrips();
//       }, [props.isAuth])

//     return(
//         <>
//         <br />
//         <h1>Trip Details</h1>
//         <h3></h3>
//         <Card body className="ml-auto mr-auto mt-5 col-12" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
//             {allTrips.map((trip, index)=> {
//                 return (
//                 <Row style={{height: "65vh"}}>
//         <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
//                       <ThingsIndex trip={trip} isAuth={props.isAuth} allTrips={allTrips} token={props.token} />
//                       </Col>

//         <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
//                       {/* <PlacesIndex trip={trip} isAuth={props.isAuth} allTrips={allTrips} token={props.token}/> */}
//                       </Col>

//         <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
//                       {/* <ThoughtsTable trip={trip} isAuth={props.isAuth} allTrips={allTrips} token={props.token}/> */}
//                       </Col>
//                 </Row>)
//                  })}
//         </Card>
//         </>
//     )

// }

// export default TripDetailsDisplay;