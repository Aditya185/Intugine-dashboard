import React from 'react';
import { Table } from 'reactstrap';



import axios from 'axios';

export default class Center extends React.Component {
  state = {
    orders: []
  }

  componentDidMount() {
    axios({ method: 'POST', url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', headers: {Authorization: 'Bearer tTU3gFVUdP'}, data: { email: 'mayankmittal@intugine.com' } })
    .then(res=>{
            const orders = res.data.data;
            // console.log(orders[0])
            this.setState({orders})
            console.log(this.state.orders)

           
  })
      
  }

  renderTableData() {
    return this.state.orders.map((order, index) => {
     
       const {_id, awbno, carrier, from, to ,pickup_date , extra_fields,current_status} = order
      
       return (
       
          <tr key={_id}>
            
             <td className="td">{awbno}</td>
             <td className="td">{carrier}</td>
             <td className="td">{from}</td>
             <td className="td">{to}</td>
             <td className="td">{carrier}</td>
             <td className="td">{pickup_date}</td>
             <td className="td">{extra_fields? extra_fields.expected_delivery_date: ''}</td>
             <td className="td">{current_status}</td>
            
          </tr>
       )
    })
 }

  render() {
    return (
 //     <div>
 //         <ul>
 //             {this.state.orders.map(order => {
 //                 return <li>{order.awbno}</li>
 //             })}
 //         </ul>
 //     </div>
 
 <Table className="table table-fixed">
 <thead >
   <tr>
     <th className="th">AWB NUMBER</th>
     <th className="th">TRANSPORTER</th>
     <th className="th">SOURCE</th>
     <th className="th">DESTINATION</th>
     <th className="th">BRAND</th>
     <th className="th">START DATE</th>
     <th className="th">ETD</th>
     <th className="th">STATUS</th>
   </tr>
 </thead>
 <tbody >
 {this.renderTableData()}
 </tbody>
</Table>

            
    )
  }
}
