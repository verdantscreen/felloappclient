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

const TripEdit = (props) => {
  const [editDestination, setEditDestination] = useState(props.tripToUpdate.destination);
  const [editDepartDate, setEditDepartDate] = useState(props.tripToUpdate.departDate);
  const [editReturnDate, setEditReturnDate] = useState(props.tripToUpdate.returnDate);
  const [editCompanions, setEditCompanions] = useState(props.tripToUpdate.companions);
  const [editOccasion, setEditOccasion] = useState(props.tripToUpdate.occasion);

  const tripUpdate = (event, trip) => {
    // event.preventDefault();
    fetch(`http://localhost:3001/mytrips/${props.tripToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        tripdata: {
          destination: editDestination,
          departDate: editDepartDate,
          returnDate: editReturnDate,
          companions: editCompanions,
          occasion: editOccasion,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.token,
      }),
    }).then((res) => {
      props.fetchTrips();
      props.updateOff();
    });
  };
  return (
    <Modal isOpen={true} style={{color:"#292a2b"}}>
      <ModalHeader>Log a trip</ModalHeader>
      <ModalBody>
        <Form onSubmit={tripUpdate}>
          <FormGroup>
            <Label htmlFor="destination">Edit destination:</Label>
            <Input
              name="destination"
              value={editDestination}
              onChange={(e) => setEditDestination(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="depart date">Edit Depart date :</Label>
            <Input
              name="departDate"
              value={editDepartDate}
              onChange={(e) => setEditDepartDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="returnDate">Edit Return date :</Label>
            <Input
              name="returnDate"
              value={editReturnDate}
              onChange={(e) => setEditReturnDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
          <Label htmlFor="companions">Edit companions :</Label>
          <Input
            name="companions"
            value={editCompanions}
            onChange={(e) => setEditCompanions(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="occasion">Edit Occasion  :</Label>
          <Input
            name="occasion"
            value={editOccasion}
            onChange={(e) => setEditOccasion(e.target.value)}
          />
        </FormGroup>
          <Button type="submit">Update Trip</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default TripEdit;
