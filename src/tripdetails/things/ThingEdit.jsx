// import React, { useState } from 'react';
// import {
//   Form,
//   FormGroup,
//   Modal,
//   ModalBody,
//   ModalHeader,
//   Button,
//   Label,
//   Input, } from 'reactstrap';

// const ThingEdit = (props) => {
//   console.log("ThingEdit props", props);
//   const [editThing, setEditThing] = useState(props.thingToUpdate.thing);
//   const [editQuantity, setEditQuantity] = useState(props.thingToUpdate.quantity);
//   const [editPacked, setEditPacked] = useState(props.thingToUpdate.packed);
//   const [editRepacked, setEditRepacked] = useState(props.thingToUpdate.repacked);

//   let tripId = props.tripId;

// console.log("token", props.token);
// console.log("prop", props);
//   const handleSubmit = (e) => {
//     console.log("THINGEDIT before prevent def")
//     e.preventDefault();
//     console.log("THINGEDIT after prevent def")
//   fetch(`http://localhost:3001/things/trip${tripId}/thing${props.thingToUpdate.id}`, {
//       method: "PUT",
//       body: JSON.stringify({
//           packdata: {
//             thing: editThing,
//             quantity: editQuantity,
//             packed: editPacked,
//             repacked: editRepacked,
//             tripId: tripId
//           },
//       }),
//       headers: new Headers({
//           "Content-Type": "application/json",
//           "Authorization": props.token
//       }),
//   })
//   .then((res) => console.log(res.json()))
//   .then((packdata) => {
//       setThing("");
//       setQuantity(0);
//       setPacked(false);
//       setRepacked(false);
//       props.fetchThings(); 
//   })
//   .catch(err => console.log(err));
// };

// return(
// <>
//     <br/>
//     <br/>
//       <h3 style={{color:"#292a2b"}}>Add an Item-to-Pack</h3>
//       <br/>
//     {/* <Form onSubmit={handleSubmit} >
//       <FormGroup
//           style={{fontSize:'small', textAlign:"center", color:"#292a2b"}}>
//             <Label>What?:</Label><Input/>
//             </FormGroup>
//             <FormGroup>
//             <Label>How Many?:</Label><Input/></FormGroup>
//             <Button type="submit">Click</Button>
//       </Form> */}
//       <Form onSubmit={handleSubmit} >
//       <InputGroup>
//       <InputGroupAddon addonType="prepend">Item(s):</InputGroupAddon>
//         <Input placeholder="how many?" min={0} max={100} type="number" step="1"  onChange={((e) => setQuantity(e.target.value))} />
//         <InputGroupAddon addonType="append"></InputGroupAddon>
//         <Input placeholder="of what?" onChange={((e) => setThing(e.target.value))} />
//         <InputGroupAddon addonType="append">
//           <Button color="secondary" type="submit"> + </Button>
//         </InputGroupAddon>
//       </InputGroup>
//       </Form>
//     </>
//   );
// };

// export default ThingEdit;

//       {/* <Form onSubmit={handleSubmit} >
//         <FormGroup>
//           <Label htmlFor="thing">Thing:</Label>
//           <Input
//           style={{fontFamily:'Roboto', fontSize: 'medium'}}
//             name="thing"
//             value={thing}
//             onChange={(e) => setThing(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="quantity">Quantity:</Label>
//           <Input
//             style={{textAlign:"right", fontFamily:'Roboto', fontSize:'small', fontWeight:'bolder'}}
//             name="quantity"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//           >
//           </Input>
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="packed">Packed:</Label>
//           <Input
//             style={{textAlign:"right", fontFamily: 'Roboto', fontSize:'small', fontWeight:'bolder'}}
//             name="packed"
//             value={packed}
//             onChange={(e) => setPacked(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="repacked">Repacked:</Label>
//           <Input
//             style={{fontFamily: 'Roboto'}}
//             name="repacked"
//             value={repacked}
//             onChange={(e) => setRepacked(e.target.value)}
//           />
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
//         >Log Thing</Button>
//       </Form> */}


// // import React, { useState } from "react";
// // import {
// //   Form,
// //   FormGroup,
// //   Modal,
// //   ModalBody,
// //   ModalHeader,
// //   Button,
// //   Label,
// //   Input,
// // } from "reactstrap";

// // const ThingEdit = (props) => {
// //   const [editDestination, setEditDestination] = useState(props.tripToUpdate.destination);
// //   const [editDepartDate, setEditDepartDate] = useState(props.tripToUpdate.departDate);
// //   const [editReturnDate, setEditReturnDate] = useState(props.tripToUpdate.returnDate);
// //   const [editCompanions, setEditCompanions] = useState(props.tripToUpdate.companions);
// //   const [editOccasion, setEditOccasion] = useState(props.tripToUpdate.occasion);

// //   const tripUpdate = (event, trip) => {
// //     console.log(props.tripToUpdate)
// //     // event.preventDefault();
// //     fetch(`http://localhost:3001/mytrips/trip${props.tripToUpdate.id}`, {
// //       method: 'PUT',
// //       body: JSON.stringify({
// //         tripdata: {
// //           destination: editDestination,
// //           departDate: editDepartDate,
// //           returnDate: editReturnDate,
// //           companions: editCompanions,
// //           occasion: editOccasion,
// //         }
// //       }),
// //       headers: new Headers({
// //         'Content-Type': 'application/json',
// //         'Authorization': props.token //or localStorage.token
// //       })
// //     }).then((res) => {
// //       props.fetchTrips();
// //       props.updateOff();
// //     })
// //   }

// //   return (
// //     <Modal isOpen={true} >
// //       <ModalHeader style={{color:"#292a2b", fontFamily: 'Corben'}}>Change of Plans?</ModalHeader>
// //       <ModalBody>
// //         <Form onSubmit={tripUpdate}>
// //           <FormGroup>
// //             <Label htmlFor='destination' style={{fontFamily: 'Roboto'}}>Edit Destination:</Label>
// //             <Input
// //               name='destination'
// //               value={editDestination}
// //               onChange={(e) => setEditDestination(e.target.value)}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label htmlFor='departDate'>Edit Depart Date:</Label>
// //             <Input
// //               name='departDate'
// //               value={editDepartDate}
// //               onChange={(e) => setEditDepartDate(e.target.value)}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label htmlFor='returnDate'>Edit Return Date:</Label>
// //             <Input
// //               name='returnDate'
// //               value={editReturnDate}
// //               onChange={(e) => setEditReturnDate(e.target.value)}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //           <Label htmlFor='companions'>Edit Companions:</Label>
// //           <Input
// //             name='companions'
// //             value={editCompanions}
// //             onChange={(e) => setEditCompanions(e.target.value)}
// //           />
// //         </FormGroup>
// //         <FormGroup>
// //           <Label htmlFor='occasion'>Edit Occasion:</Label>
// //           <Input
// //             name='occasion'
// //             value={editOccasion}
// //             onChange={(e) => setEditOccasion(e.target.value)}
// //           />
// //         </FormGroup>
// //           <Button type="submit" 
// //           style={{backgroundColor: '#ff7f50',
// //           color: '#292a2b',
// //           fontFamily: 'Corben',
// //           marginRight: '5px',
// //           borderRadius: '10px',
// //           transition: 'transform 0.3s ease',
// //           boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
// //           border: 'none'
// //           }} id="buttonHover">Done!</Button>
// //         </Form>
// //       </ModalBody>
// //     </Modal>
// //   )
// // }

// // export default ThingEdit;
