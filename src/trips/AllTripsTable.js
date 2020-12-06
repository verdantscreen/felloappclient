import React from "react";
import { Table, Button } from "reactstrap";
// import TripDetailsDisplay from '../tripdetails/TripDetailsDisplay'

const TripsTable = (props) => {

  const deleteTrip = (frog) => {
    fetch(`http://localhost:3001/mytrips/trip${frog.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.token, //or localStorage.token
      }),
    }).then(() => props.fetchTrips())
  };

  const tripMap = () => {
    return props.trips.map((any, index) => {
      return (
        <tr key={index}>
          <th scope="row"></th>
          <td><button style={{color: '#ff7f50', border:'none', backgroundColor: 'transparent'}}
          onClick={(()=>{
            props.setSingleTrip(any)
          })}>
            {any.destination}
            </button>
          </td>
          <td style={{fontFamily: 'Roboto'}}>{any.departDate}</td>
          <td style={{fontFamily: 'Roboto'}}>{any.returnDate}</td>
          <td style={{fontFamily: 'Roboto'}}>{any.companions}</td>
          <td style={{fontFamily: 'Roboto'}}>{any.occasion}</td>
          <td>
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
                props.editUpdateTrip(any);
                props.updateOn()
              }}
            >
              Update
            </Button>
            <Button
              style={{textAlign:"center",
              backgroundColor: '#292a2b',
              color: '#f2f2e7',
              fontFamily: 'Corben',
              margin: '5px',
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              boxShadow: '5px 5px 5px 0px rgba(85,61,52,0.3)',
              border: 'none'
              }}
              onClick={() => {
                deleteTrip(any)
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      )
    })
  }

  return (
    <>
    <br />
      <h3 style={{textAlign:"center", color:"#292a2b"}}>Trip History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr style={{textAlign:"center", color:"#292a2b"}}>
            <th> </th>
            <th>Destination Known</th>
            <th>Get Outta Town</th>
            <th>Back Home Again</th>
            <th>Travel Buddies</th>
            <th>What Brings You Here?</th>
          </tr>
        </thead>
        <tbody>{tripMap()}</tbody>
      </Table>
    </>
  )
}

export default TripsTable;
