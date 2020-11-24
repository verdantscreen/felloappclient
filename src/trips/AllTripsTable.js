import React from "react";
import { Table, Button } from "reactstrap";

const TripsTable = (props) => {
  const deleteTrip = (trip) => {
    fetch(`https://fello-server.herokuapp.com/mytrips/${trip.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.token,
      }),
    }).then(() => props.fetchTrips());
  };

  const tripMapper = () => {
    return props.trips.map((trip, index) => {
      return (
        <tr key={index}>
          <th scope="row">{trip.id}</th>
          <td>{trip.destination}</td>
          <td>{trip.departDate}</td>
          <td>{trip.returnDate}</td>
          <td>{trip.companions}</td>
          <td>{trip.occasion}</td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateTrip(trip);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteTrip(trip);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
    <br />
      <h3>Trip History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr style={{textAlign:"center"}}>
            {/* <th> </th> */}
            <th>Destination</th>
            <th>Get Outta Town</th>
            <th>Back Home Again</th>
            <th>Buddies</th>
            <th>What Brings You Here?</th>
          </tr>
        </thead>
        <tbody>{tripMapper()}</tbody>
      </Table>
    </>
  );
};

export default TripsTable;
