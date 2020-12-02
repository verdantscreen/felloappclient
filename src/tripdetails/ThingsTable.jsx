import React from 'react'
import { Table, Button, Form } from "reactstrap";

const ThingsTable = () => {

    return(
        <>
         <br />
      <h3 style={{textAlign:"center", color:"#292a2b"}}>Grab Your Things!</h3>
      <Form>
          
      </Form>
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
        <tbody></tbody>
      </Table>
        </>
    )

}

export default ThingsTable;