import React, {useState} from 'react'
import { Table, Button, FormGroup, Col, Input, Label } from "reactstrap";

const ThingsTable = (props) => {
  
  const deleteThing = (single) => {
  fetch(`http://localhost:3001/things/trip${props.tripId}/thing${single.id}`, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": props.token,
    }),
  }).then(() => props.fetchThings())
};

const thingMap = () => {
  return props.things.map((mappedOver, index) => {
    return (
      <tr 
      key={index}
      >
        <th scope="row"></th>
        <td style={{fontFamily: 'Roboto'}}>{mappedOver.thing}</td>
        <td style={{fontFamily: 'Roboto'}}>{mappedOver.quantity}</td>
        <td style={{fontFamily: 'Roboto'}}>{mappedOver.packed}
        <FormGroup row>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input 
              // onClick={(e) => setPackedCheck(true)} 
              type="checkbox" id="checkbox1" />
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      </td>
        <td style={{fontFamily: 'Roboto'}}>{mappedOver.repacked}
        <FormGroup row>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      </td>
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
              props.editUpdateThing(mappedOver);
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
              deleteThing(mappedOver)
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    )
  })
}


    return(
        <>
         <br />
      <h3 style={{textAlign:"center", color:"#292a2b"}}>Grab Your Things!</h3>
      <hr />
      <Table striped>
        <thead>
          <tr style={{fontSize:'small', textAlign:"center", color:"#292a2b"}}>
            <th> </th>
            <th>What?</th>
            <th>How Many?</th>
            <th>Packed Up?</th>
            <th>Repacked?</th>
          </tr>
        </thead>
      <tbody>
        {thingMap()}
        </tbody>
      </Table>
        </>
    )
}

export default ThingsTable;

// console.log("THINGSTABLE PROPS fix, no longer has empty things array 1020PM", props);
  // console.log("THINGSTABLE mapping over this", props.things);
  // const [packedCheck, setPackedCheck] = useState(false);
  // const [repackedCheck, setRepackedCheck] = useState(false);