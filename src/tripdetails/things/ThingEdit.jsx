import React, { useState } from 'react';
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
    console.log("thingToUpdate from ThingEdit file", props.thingToUpdate)
  const [editThing, setEditThing] = useState(props.thingToUpdate.thing);
  const [editQuantity, setEditQuantity] = useState(props.thingToUpdate.quantity);
  const [editPacked, setEditPacked] = useState(props.thingToUpdate.packed);
  const [editRepacked, setEditRepacked] = useState(props.thingToUpdate.repacked);

  let tripId = props.tripId;

const thingUpdate = (e, thing) => {
    // e.preventDefault();
  fetch(`http://localhost:3001/things/trip${tripId}/thing${props.thingToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
          packdata: {
            thing: editThing,
            quantity: editQuantity,
            packed: editPacked,
            repacked: editRepacked,
            tripId: tripId
          },
      }),
      headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": props.token
      }),
  }).then((res) => {
    props.fetchThings();
    props.updateOff();
  })
}

return(
<>
<Modal isOpen={true} >
      <ModalHeader style={{color:"#292a2b", fontFamily: 'Corben'}}>Change of Plans?</ModalHeader>
      <ModalBody>
        <Form onSubmit={thingUpdate}>
          <FormGroup>
            <Label htmlFor='thing' style={{fontFamily: 'Roboto'}}>Edit Thing:</Label>
            <Input
              name='thing'
              value={editThing}
              onChange={(e) => setEditThing(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='Quantity'>Edit Quantity:</Label>
            <Input
              name='Quantity'
              value={editQuantity}
              onChange={(e) => setEditQuantity(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
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
        </FormGroup>
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
    </>
  );
};

export default ThingEdit;