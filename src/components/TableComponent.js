import React from 'react';

import axios from 'axios';

export default class TableList extends React.Component {
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

  render() {
    return (
     <div>
         <ul>
             {this.state.orders.map(order => {
                 return <li>{order.awbno}</li>
             })}
         </ul>
     </div>
            
    )
  }
}


