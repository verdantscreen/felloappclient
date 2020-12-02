import React, {} from 'react'
import { Col, Container, Table, Button, Card, Row } from "reactstrap";
import ThingsTable from './ThingsTable';
import PlacesTable from './PlacesTable';
import ThoughtsTable from './ThoughtsTable';

const TripDetails = () => {

    return(
        <>
        <br />
        <h1>Trip Details</h1>
        <h3></h3>
        <Card body className="ml-auto mr-auto mt-5 col-12" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                <Row style={{height: "65vh"}}>
        <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <ThingsTable /></Col>

        <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <PlacesTable /></Col>

        <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <ThoughtsTable /></Col>
                </Row>
        </Card>
        </>
    )

}

export default TripDetails;