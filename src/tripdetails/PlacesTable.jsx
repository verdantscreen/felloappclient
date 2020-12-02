import React from 'react'
import { Table, Button } from "reactstrap";

const PlacesTable = () => {

    return(
        <>
         <br />
      <h3 style={{textAlign:"center", color:"#292a2b"}}>I Know a Place...</h3>
      <hr />
      <Table striped>
        <thead>
          <tr style={{fontSize:'smaller', textAlign:"center", color:"#292a2b"}}>
            <th> </th>
            <th>When?</th>
            <th>Where To?</th>
            <th>What For?</th>
            <th>How Much?</th>
            <th>Do it Again?</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
        </>
    )

}

export default PlacesTable;