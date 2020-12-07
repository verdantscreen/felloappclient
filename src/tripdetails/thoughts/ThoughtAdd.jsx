// // /trip:tripid/addthought

// import React, { useState } from "react";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// const ThoughtsAdd = (props) => {

// console.log(props.token);

//   const [date, setDate] = useState("");
//   const [thought, setThought] = useState("");

// // https://fello-server.herokuapp.com/mytrips/ 
//   const handleSubmit = (e) => {
//     console.log("before prevent def")
//     // e.preventDefault();
//     console.log("after prevent def")
//     fetch(`https://server-fello-app.herokuapp.com/thoughts/trip:tripid/addthought`, {
//       method: "POST",
//       body: JSON.stringify({
//         thoughtdata: {
//             date: date,
//             thought: thought
//           },
//       }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//         "Authorization": props.token
//       }),
//     })
//       .then((res) => console.log(res.json()))
//       .then((thoughtdata) => {
//         setDate("");
//         setThought("");
//         // props.fetchTrips();
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <>
//     <br/>
//     {/* <br/> */}
//       {/* <h3 style={{color:"#292a2b"}}>Make an Entry</h3> */}
//       {/* <br/> */}
//       <Form onSubmit={handleSubmit} >
//         <FormGroup>
//           <Label htmlFor="date">Entry Date:</Label>
//           <Input
//           style={{textAlign:"right", fontFamily:'Roboto', fontSize:'small', fontWeight:'bolder'}}
//             name="date"
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="thought">Get Outta Town:</Label>
//           <Input
//             style={{textAlign:"right", fontFamily:'Roboto', fontSize:'small', fontWeight:'bolder'}}
//             name="thought"
//             value={thought}
//             onChange={(e) => setThought(e.target.value)}
//           >
//           </Input>
//         </FormGroup>
//         <Button 
//         type="submit" 
//         style={{textAlign:"center",
//                 backgroundColor: '#ff7f50',
//                 color: '#292a2b',
//                 fontFamily: 'Corben',
//                 marginRight: '5px',
//                 borderRadius: '10px',
//                 transition: 'transform 0.3s ease',
//                 boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
//                 border: 'none'
//                 }} id="buttonHover" 
//         >Log Thought</Button>
//       </Form>
//     </>
//   );
// };

// export default ThoughtsAdd;
