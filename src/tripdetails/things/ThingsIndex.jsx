import React, { useState, useEffect } from "react";
import ThingsIndexMap from './ThingsIndexMap';
import ThingEdit from './ThingEdit';
// import PlacesIndexMap from '../places/PlacesIndexMap';
// import ThoughtsIndexMap from '../thoughts/ThoughtsIndexMap';

const ThingsIndex = (props) => {
    // const [things, setThings] = useState([]);
    // const [individualTrip, setIndividualTrip] = useState([]);
    // console.log("thingindexprops", props);

    // const fetchTrips = () => {
    //   console.log("HERE YE ThingsIndex props.trip.id", props.trip);
    //   fetch(`https://server-fello-app.herokuapp.com/mytrips/trip${props.trip.id}`, {
    //     method: 'GET',
    //     headers: new Headers({
    //       'Content-Type': 'application/json',
    //       'Authorization': props.token, //or localStorage.token
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((tripdata) => {
    //       setIndividualTrip(tripdata);
    //       console.log("*****ThingsIndex GET SINGLE TRIP", tripdata)
    //     })
    //     .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //   fetchTrips();
    // }, [props.isAuth])

// trips state variable is too slow for prop passing? coming back in console as empty array
    return(
        <div style={{margin: 'auto', width:'100%'}}>
          {/* <h1>Things Index</h1> */}
        <h3 style={{marginTop:'50px'}}>About that trip to {props.trip.destination} :</h3>
        <br/>
    <p style={{fontFamily:'Roboto', fontSize:'large'}}>Looks like you're heading there {props.trip.departDate} and you'll be back by {props.trip.returnDate}. <br /><br /> While you're there, you'll doubtless have Places to Go, people to see, and Thoughts you want to jot down <br /> --- not to mention Bags to Drag along with you.</p>
        {/* {trips.map((singleTrip, index)=>{
       return  */}
       <ThingsIndexMap 
      //  trips={trips}
      //  setTrips={setTrips}
      //  things={things} 
      //  setThings={setThings} 
       trip={props.trip}
       token={props.token} 
      //  tripToUpdate={props.tripToUpdate}
      //  updateOff={props.updateOff}
      //  updateOn={props.updateOn}
      //  updateOpen={props.updateOpen}
       />
         {/* })} */}
         {/* <PlacesIndexMap trips={trips} trip={props.trip} setTrips={setTrips} allTrips={props.allTrips} token={props.token} things={things} setThings={setThings} />
         <ThoughtsIndexMap trips={trips} trip={props.trip} setTrips={setTrips} allTrips={props.allTrips} token={props.token} things={things} setThings={setThings} /> */}
        </div>
    )
}

export default ThingsIndex;