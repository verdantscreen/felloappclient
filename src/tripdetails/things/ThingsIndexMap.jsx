import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from "reactstrap";
import ThingAdd from './ThingAdd';
import ThingEdit from './ThingEdit';
import ThingsTable from './ThingsTable';

const ThingsIndexMap = (props) => {
console.log("TIM props, empty array for trips! allTrips undefined; trips = trip issues at 3:10PM", props)
    const [updateOpen, setUpdateOpen] = useState(false);
    const [thingToUpdate, setThingToUpdate] = useState({});
console.log("LINE 11 props.trips in TIM", props.trips);
    const [things, setThings] = useState([]);
    const [thingsMsg, setThingsMsg] = useState(`What are you bringing with you?`);

    const fetchThings = () => {
        // if(props.trip.id !== undefined){
            const baseUrl = `http://localhost:3001/things/trip${props.trip.id}/allthings`
            fetch(baseUrl, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type' : 'application/json',
                    'Authorization': props.token
                })
            }).then(res => res.json())
            .then((data) =>{
            setThings(data);
            console.log("THINGSINDEXMAP GET allthings for single trip", data);
        })
            .catch(err => err)
        }

    const editUpdateThing = (thing) => {
        setThingToUpdate(thing);
        console.log(thing);
    }

    const updateOn = () => {
        setUpdateOpen(true);
    }

    const updateOff = () => {
        setUpdateOpen(false);
    }

    // fetchThings() needs check to see if trips has populated yet before it runs
    useEffect(() => {
        // if(props.trip.id !== undefined){
        fetchThings();
        console.log("if statement hit")
        // } else { 
        //     setTimeout(()=> {
        //         fetchThings()
        //         console.log("else statement hit")
        //     }, 3000)
        // }
    }, [props.allTrips, props.trip])

    return(
        <div>
        <Container>
            <Row>
                <Col md='8' md={{ size: 6, offset: 3 }}>
                    <ThingAdd
                    token={props.token}
                    things={things}
                    tripId={props.trip.id}
                    setTrips={props.setTrips}
                    fetchThings={fetchThings}
                    />
                </Col>
                <Col md='12'>
                    <ThingsTable
                    token={props.token}
                    things={things}
                    tripId={props.trip.id}
                    setTrips={props.setTrips}
                    editUpdateThing={editUpdateThing}
                    updateOn={updateOn}
                    fetchThings={fetchThings}
                    />
                </Col>
                {props.updateOpen ? 
                <ThingEdit
                    token={props.token}
                    things={things}
                    tripId={props.trip.id}
                    setTrips={props.setTrips}
                    editUpdateThing={editUpdateThing}
                    updateOn={updateOn}
                    thingToUpdate={thingToUpdate}
                    updateOff={updateOff}
                    fetchThings={fetchThings}
                    /> :
                    <></>}
            </Row>
        </Container>
        </div>
    )
}

export default ThingsIndexMap;