import fire from '../../../../firebase_DB/firebaseAPI';
import React from 'react';
import {ref,onValue} from 'firebase/compat/database';
import Table from 'react-bootstrap/Table';
import './CustomerTable.css';


function CustomersTable() {

    const data = [
        {id:1, name: 'Mirza Aman', travel_id:8512, phone_number:8129004343},
        {id:2, name: 'Sadikk khs', travel_id:9462, phone_number:1846257896},
        {id:3, name: 'Mirza Aman', travel_id:2485, phone_number:8129004343},
        {id:4, name: 'Mirza Aman', travel_id:4843, phone_number:8129004343},
        {id:5, name: 'Mirza Aman', travel_id:75465, phone_number:8129004343},
        {id:6, name: 'Mirza Aman', travel_id:15465, phone_number:8129004343},
        {id:7, name: 'Mirza Aman', travel_id:25465, phone_number:8129004343},
        {id:8, name: 'Mirza Aman', travel_id:45465, phone_number:8129004343},
        {id:9, name: 'Mirza Aman', travel_id:5465, phone_number:8129004343},
        {id:10, name: 'Mirza Aman', travel_id:65465, phone_number:8129004343},
        {id:11, name: 'Mirza Aman', travel_id:25465, phone_number:8129004343},
        {id:12, name: 'Mirza Aman', travel_id:905465, phone_number:8129004343},
        {id:13, name: 'Mirza Aman', travel_id:841252465, phone_number:8129004343},
        {id:14, name: 'Mirza Aman', travel_id:55465, phone_number:8129004343},
        {id:15, name: 'Mirza Aman', travel_id:25252465, phone_number:8129004343},
        {id:16, name: 'Mirza Aman', travel_id:552525, phone_number:8129004343},
        {id:17, name: 'Mirza Aman', travel_id:75425, phone_number:8129004343},
        {id:18, name: 'Mirza Aman', travel_id:3648, phone_number:8129004343},
        {id:19, name: 'Mirza Aman', travel_id:1648, phone_number:8129004343},
        {id:20, name: 'Mirzbvb', travel_id:65465, phone_number:81295343},
    ]

    return(
        <div className="whole">
            <Table striped bordered hover>
        <thead>
        <tr> 
          <th>#</th>
          <th>Name</th>
          <th>Travel Id</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((data,index) => {
                return(
                <tr>
                    <td> {index} </td>
                    <td> {data.name} </td>
                    <td> {data.travel_id} </td>
                    <td> +91 {data.phone_number} </td>
                 </tr>
                )
            })
        }
      </tbody>
    </Table>
        </div>
    );
}

export default CustomersTable;