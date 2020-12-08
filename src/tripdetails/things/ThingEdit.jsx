import React, { useEffect, useState } from 'react';
import {
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Label,
  Input,
} from 'reactstrap';

const ThingEdit = (props) => {
  const [editThing, setEditThing] = useState(props.thingToUpdate.thing);
  const [editQuantity, setEditQuantity] = useState(props.thingToUpdate.quantity);
  const [editPacked, setEditPacked] = useState(props.thingToUpdate.packed);
  const [editRepacked, setEditRepacked] = useState(props.thingToUpdate.repacked);
  const [updateOpen, setUpdateOpen] = useState(false);
  // const [editTripId, setEditTripId] = useState(props.thingToUpdate.tripId);
  // let tripId = props.tripId;

const thingUpdate = (e, thing) => {
    e.preventDefault(); //needed but interfering?
  fetch(`https://server-fello-app.herokuapp.com/things/trip${props.thingToUpdate.tripId}/thing${props.thingToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({
          packdata: {
            thing: editThing,
            quantity: editQuantity,
            packed: editPacked,
            repacked: editRepacked,
            tripId: props.thingToUpdate.tripId
          }
      }),
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
      })
  }).then((res) => {
    props.fetchThings();
    editModalToggle();
    console.log("ARE THERE EVEN ANY fetch results", res)
  })
  // .catch(err => console.log(err));
}
console.log(props.thingToUpdate);
console.log("editThing state variable after fetch is ", editThing)
console.log("editQuantity state variable after fetch is ", editQuantity)
console.log("editPacked state variable after fetch is ", editPacked)
console.log("editRepacked state variable after fetch is ", editRepacked)

const editModalToggle = () => {
  setUpdateOpen(!updateOpen);
  console.log("editModalToggle func hit");
}

// useEffect(()=>{
//   setEditThing(props.thingToUpdate.thing);
// })

return(
  <div>
  <Button
  style={{backgroundColor: '#ff7f50',
  color: '#292a2b',
  fontFamily: 'Corben',
  marginRight: '5px',
  borderRadius: '10px',
  transition: 'transform 0.3s ease',
  boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
  border: 'none'
  }} id="buttonHover" 
    onClick={() => {
      editModalToggle()
    }}
  >
    Update
  </Button>
<Modal 
isOpen={updateOpen} 
toggle={editModalToggle} 
// toggle={toggle} className={className}
>
    <ModalHeader 
    toggle={props.editModalToggle} 
    style={{color:"#292a2b", fontFamily: 'Corben'}}
    >Change Item Specs:</ModalHeader>
      <ModalBody>
        <Form onSubmit={thingUpdate}>
          <FormGroup>
            <Label htmlFor='thing' style={{fontFamily: 'Roboto'}}>Current Item: {props.thingToUpdate.thing}</Label>
            <Input
              name='thing'
              value={editThing}
              onChange={(e) => setEditThing(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='Quantity'>Current Quantity: {props.thingToUpdate.quantity}</Label>
            <Input
              name='Quantity'
              value={editQuantity}
              onChange={(e) => setEditQuantity(e.target.value)}
            />
          </FormGroup>
          {/* <FormGroup>
            <Label htmlFor='Packed'>Edit Packed:</Label>
            <Input
              name='Packed'
              value={editPacked}
              onChange={(e) => setEditPacked(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
          <Label htmlFor='Repacked'>Edit Repacked:</Label>
          <Input
            name='Repacked'
            value={editRepacked}
            onChange={(e) => setEditRepacked(e.target.value)}
          />
        </FormGroup> */}
          <Button type="submit" 
          style={{backgroundColor: '#ff7f50',
          color: '#292a2b',
          fontFamily: 'Corben',
          marginRight: '5px',
          borderRadius: '10px',
          transition: 'transform 0.3s ease',
          boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
          border: 'none'
          }} id="buttonHover">Done!</Button>
        </Form>
      </ModalBody>
    </Modal>
    </div>
  );
};

export default ThingEdit;