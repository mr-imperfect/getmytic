import React from 'react';

import { Table } from 'reactstrap';
import './Ownerlist.css'

const Ownerlist = (props) => {
  return (
    <div>
        <h1>Owner Details</h1>
    <Table bordered dark>
      <thead>
        <tr>
          <th>No</th>
          <th>Owner Name</th>
          <th>Address</th>
          <th>Theater name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Ownerlist;