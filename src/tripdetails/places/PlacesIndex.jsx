import React, { useState, useEffect } from "react";
import PlacesIndexMap from '../places/PlacesIndexMap';

const PlacesIndex = (props) => {
    const [places, setPlaces] = useState([]);
    const [trips, setTrips] = useState([]);
    console.log("placeindexprops", props);

    const fetchTrips = () => {
      console.log("HERE YE PlacesIndex props.trip.id", props.trip);
      fetch(`http://localhost:3001/mytrips/trip${props.trip.id}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token, //or localStorage.token
        }),
      })
        .then((res) => res.json())
        .then((tripdata) => {
          setTrips(tripdata);
          console.log("*****PlacesIndex c.l. GET single trip", tripdata)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
      fetchTrips();
    }, [props.isAuth])

    return(
        <div>
          <br/>
          <hr/>
          <br/>
          {/* <h1>Places Index</h1> */}
        <h3 style={{marginTop:'50px'}}>What's for kicks in {props.trip.destination}</h3>
        <br/>
    <p style={{fontFamily:'Roboto', fontSize:'large'}}>You'll need something to keep you occupied between {props.trip.departDate} and {props.trip.returnDate}. What've you got planned?</p>
         <PlacesIndexMap trips={trips} trip={props.trip} setTrips={setTrips} allTrips={props.allTrips} token={props.token} places={places} setPlaces={setPlaces} />
        </div>
    )
}

export default PlacesIndex;