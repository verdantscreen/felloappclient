// import React, {useEffect, useState} from 'react'
// import { Container, Row, Col } from "reactstrap";
// import ThoughtAdd from './ThoughtAdd';
// import ThoughtEdit from './ThoughtEdit';
// import ThoughtsTable from './ThoughtsTable';

// const ThoughtsIndexMap = (props) => {
// console.log("TIM props", props)
//     const [updateOpen, setUpdateOpen] = useState(false);
//     const [thoughtToUpdate, seThoughtToUpdate] = useState({});
// console.log("LINE 11 props.trips in TIM", props.trips);
//     const [thoughts, setThoughts] = useState([]);
//     const [thoughtsMsg, setThoughtsMsg] = useState(`What are you bringing with you?`);

//     const fetchThoughts = () => {
//         // if(props.trip.id !== undefined){
//             const baseUrl = `https://server-fello-app.herokuapp.com/thoughts/trip${props.trip.id}/allthoughts`
//             fetch(baseUrl, {
//                 method: 'GET',
//                 headers: new Headers({
//                     'Content-Type' : 'application/json',
//                     'Authorization': props.token
//                 })
//             }).then(res => res.json())
//             .then((data) =>
//             setThoughts(data)
//             )
//             .catch(err => err)
//         }

//     const editUpdateThought = (Thought) => {
//         setthoughtToUpdate(Thought);
//         console.log(Thought);
//     }

//     const updateOn = () => {
//         setUpdateOpen(true);
//     }

//     const updateOff = () => {
//         setUpdateOpen(false);
//     }

//     useEffect(() => {
//         fetchThoughts();
//         console.log("if statement hit")
//     }, [props.allTrips, props.trip])

//     return(
//         <div>
//         <Container>
//             <Row>
//                 <Col md='12'>
//                     <ThoughtAdd
//                     token={props.token}
//                     thoughts={thoughts}
//                     tripId={props.trip.id}
//                     setTrips={props.setTrips}
//                     />
//                 </Col>
//                 <Col md='12'>
//                     <ThoughtsTable
//                     token={props.token}
//                     thoughts={thoughts}
//                     tripId={props.trip.id}
//                     setTrips={props.setTrips}
//                     editUpdateThought={editUpdateThought}
//                     updateOn={updateOn}
//                     />
//                 </Col>
//                 {props.updateOpen ? 
//                 <ThoughtEdit
//                     token={props.token}
//                     Thoughts={Thoughts}
//                     tripId={props.trip.id}
//                     setTrips={props.setTrips}
//                     editUpdateThought={editUpdateThought}
//                     updateOn={updateOn}
//                     thoughtToUpdate={thoughtToUpdate}
//                     updateOff={updateOff}
//                     /> :
//                     <></>}
//             </Row>
//         </Container>
//         </div>
//     )
// }

// export default ThoughtsIndexMap;