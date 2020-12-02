import React from 'react'
import { Table, Button } from "reactstrap";

const ThoughtsTable = () => {

    return(
        <>
         <br />
      <h3 style={{textAlign:"center", color:"#292a2b"}}>I Was Just Thinking...</h3>
      <hr />
      <Table striped>
        <thead>
          <tr style={{fontSize:'small', textAlign:"left", color:"#292a2b"}}>
            <th> </th>
            <th>Date:</th>
            <th>Thoughts:</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
        </>
    )

}

export default ThoughtsTable;