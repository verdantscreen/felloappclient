import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Label,
  Input,
} from "reactstrap";

const ThoughtsEdit = (props) => {
  const [editDestination, setEditDestination] = useState(props.tripToUpdate.destination);
  const [editDepartDate, setEditDepartDate] = useState(props.tripToUpdate.departDate);
  const [editReturnDate, setEditReturnDate] = useState(props.tripToUpdate.returnDate);
  const [editCompanions, setEditCompanions] = useState(props.tripToUpdate.companions);
  const [editOccasion, setEditOccasion] = useState(props.tripToUpdate.occasion);

  const tripUpdate = (event, trip) => {
    // event.preventDefault();
    fetch(`http://localhost:3001/trip${props.tripToUpdate.id}/thought${props.tripToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        tripdata: {
          destination: editDestination,
          departDate: editDepartDate,
          returnDate: editReturnDate,
          companions: editCompanions,
          occasion: editOccasion,
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token //or localStorage.token
      })
    }).then((res) => {
      props.fetchTrips();
      props.updateOff();
    })
  }

  return (
    <Modal isOpen={true} >
      <ModalHeader style={{color:"#292a2b", fontFamily: 'Corben'}}>Change of Plans?</ModalHeader>
      <ModalBody>
        <Form onSubmit={tripUpdate}>
          <FormGroup>
            <Label htmlFor='destination' style={{fontFamily: 'Roboto'}}>Edit Destination:</Label>
            <Input
              name='destination'
              value={editDestination}
              onChange={(e) => setEditDestination(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='departDate'>Edit Depart Date:</Label>
            <Input
              name='departDate'
              value={editDepartDate}
              onChange={(e) => setEditDepartDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='returnDate'>Edit Return Date:</Label>
            <Input
              name='returnDate'
              value={editReturnDate}
              onChange={(e) => setEditReturnDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
          <Label htmlFor='companions'>Edit Companions:</Label>
          <Input
            name='companions'
            value={editCompanions}
            onChange={(e) => setEditCompanions(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='occasion'>Edit Occasion:</Label>
          <Input
            name='occasion'
            value={editOccasion}
            onChange={(e) => setEditOccasion(e.target.value)}
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
  )
}

export default ThoughtsEdit;
