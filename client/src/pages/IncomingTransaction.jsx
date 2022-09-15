import React from 'react';
import './css/Transcation.css';
import Table from 'react-bootstrap/Table';
import dataTrans from '../dataDummy/DataFakeTransaction'
import DropdownAdm from "../components/DropdownAdm";

const TablePage = ({}) => {
  return (
    <div className="transcation-container">
        <h4 style={{marginBottom: '30px'}}>Incoming Transaction</h4>
        <Table hover className="transcation-table">
            <thead>
                <tr style={{color: "#E50914", background: "#1F1F1F"}}>
                    <th>No.</th>
                    <th>Users</th>
                    <th>Bukti Transfer</th>
                    <th>Remaining Active</th>
                    <th>Status User</th>
                    <th>Status Payment</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {dataTrans.map((data, index) => {
                    let color = data.id < "3" ? '#0ACF83' : (data.status <= "3" ? '#F7941E' : '#FF0742' );
                    return(
                        <tr style={{color: "#FFFFFF"}}>
                            <td>{data.id}</td>
                            <td>{data.users}</td>
                            <td>{data.prove}</td>    
                            <td>{data.remain}</td>    
                            <td style={{color}}>{data.status}</td>    
                            <td style={{color}}>{data.statusPay}</td>    
                            <td><DropdownAdm/></td>    
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  );
}

export default TablePage;