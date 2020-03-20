import React, { Component } from 'react';
import Header from './HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import Center from './CenterComponent';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';


  
import axios from 'axios';



class Main extends Component {

    state = {
        orders: [],
        scan_rev: []
      }

      

      componentDidMount() {
        axios({ method: 'POST', url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', headers: {Authorization: 'Bearer tTU3gFVUdP'}, data: { email: 'mayankmittal@intugine.com' } })
        .then(res=>{
                const orders = res.data.data;
                const scans = res.data.data[0].scan;
                const scan_rev = scans.reverse();
                // console.log(orders[0])
                this.setState({orders})
                this.setState({scan_rev})
                console.log(this.state.scascan_rev)
                console.log(this.state.orders)
    
               
      })
          
      }

      renderTableData() {
        return this.state.orders.map((order, index) => {
           // const { order.extra_fields.expected_delivery_date}=order;
           const {_id, awbno, carrier, from, to ,pickup_date , extra_fields,current_status} = order
          
           return (
           
              <tr key={_id}>
                
                 <td>{awbno}</td>
                 <td>{carrier}</td>
                 <td>{from}</td>
                 <td>{to}</td>
                 <td>{carrier}</td>
                 <td>{pickup_date}</td>
                 <td>{extra_fields? extra_fields.expected_delivery_date: ''}</td>
                 <td>{current_status}</td>
                
              </tr>
           )
        })
     }

     renderTimeLineData(){
      return this.state.scan_rev.map((scan, index) => {
        const {time, location, status_detail} = scan
        return(
          <TimelineItem>
          <p className="timeline_content">
            <span className="timeline_status">
              {time}
          </span>
            <span className="timeline_date">
              {location}
          </span>
            <span className="timeline_time">
              {status_detail}
          </span>
          </p>
        </TimelineItem>
        )

      }
        
      )}

     
    
    

    render(){

        const TimelineList = () => {
            return(
              
             <div>
              <Timeline lineColor={'#ddd'}>
                <div className="timeline_image1">
                  <img src="./assets/destination.svg" alt="" />
                </div>
                 {this.renderTimeLineData()}

               
               
                
                <div className="timeline_image2">
                  <img src="./assets/warehouse.svg" alt="" />
                </div>
              </Timeline> 
              </div>
            
            );
          }

      
      

      

        return (
            <BrowserRouter>

               
            
                        <Header />
               
  
    
    <div className="cards">
          <div className="card">
            <p className="card_head">DEL</p>
            <p className="card_no">916</p >
          </div>
          <div className="card">
            <p className="card_head">INT</p>
            <p className="card_no">232</p >
          </div>
          <div className="card">
            <p className="card_head">OOD</p>
            <p className="card_no">342</p >
          </div>
          <div className="card">
            <p className="card_head">DEX</p>
            <p className="card_no">916</p >
          </div>
          <div className="card">
            <p className="card_head">NFI</p>
            <p className="card_no">916</p >
          </div>
        </div>
        
        
        
     
    


    <div class="row row-content ">
       
    <div class="col-12 col-sm-6">
        <TimelineList/>
    </div>
    <div class="col-12 col-sm-4 order-sm-last col-md-6">
        <Center/>
    </div>

    </div>
           
    

              

                   


            </BrowserRouter>
           
          );
          }
        }
export default Main;
        
    
