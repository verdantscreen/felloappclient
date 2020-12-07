import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from "reactstrap";
import PlaceAdd from './PlaceAdd';
import PlaceEdit from './PlaceEdit';
import PlacesTable from './PlacesTable';

const PlacesIndexMap = (props) => {
console.log("TIM props", props)
    const [updateOpen, setUpdateOpen] = useState(false);
    const [placeToUpdate, setPlaceToUpdate] = useState({});
console.log("LINE 11 props.trips in TIM", props.trips);
    const [places, setPlaces] = useState([]);
    const [placesMsg, setPlacesMsg] = useState(`You're here, now what?`);

    const fetchPlaces = () => {
            const baseUrl = `https://server-fello-app.herokuapp.com/places/trip${props.trip.id}/allplaces`
            fetch(baseUrl, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type' : 'application/json',
                    'Authorization': props.token
                })
            }).then(res => res.json())
            .then((data) =>
            setPlaces(data)
            )
            .catch(err => err)
        }

    const editUpdatePlace = (place) => {
        setPlaceToUpdate(place);
        console.log(place);
    }

    const updateOn = () => {
        setUpdateOpen(true);
    }

    const updateOff = () => {
        setUpdateOpen(false);
    }

    useEffect(() => {
        fetchPlaces();
        console.log("if statement hit")
    }, [props.allTrips, props.trip])

    return(
        <div>
        <Container>
            <Row>
                <Col md='12'>
                    <PlaceAdd
                    token={props.token}
                    places={places}
                    tripId={props.trip.id}
                    setTrips={props.setTrips}
                    />
                </Col>
                <Col md='12'>
                    <PlacesTable
                    token={props.token}
                    places={places}
                    tripId={props.trip.id}
                    setTrips={props.setTrips}
                    editUpdatePlace={editUpdatePlace}
                    updateOn={updateOn}
                    />
                </Col>
                {props.updateOpen ? 
                <PlaceEdit
                    token={props.token}
                    places={places}
                    tripId={props.trip.id}
                    setTrips={props.setTrips}
                    editUpdatePlace={editUpdatePlace}
                    updateOn={updateOn}
                    placeToUpdate={placeToUpdate}
                    updateOff={updateOff}
                    /> :
                    <></>}
            </Row>
        </Container>
        </div>
    )
}

export default PlacesIndexMap;