import React, { Component } from 'react';
import Header from './HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import Center from './CenterComponent';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';


  
import axios from 'axios';



class Main extends Component {
 
  constructor(props){
    super(props)
    
  }

    state = {
        orders: [],
        scan_rev: []
      }

      fetchDetails = (order) => {
 
        console.log('We need to get the details for ', order);
        console.log(order.scan)
      
      
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
                // console.log(this.state.scascan_rev)
                console.log(this.state.orders)
    
               
      })

     
          
      }

      renderTableData() {
        return this.state.orders.map((order, index) => {
           // const { order.extra_fields.expected_delivery_date}=order;
           const {_id, awbno, carrier, from, to ,pickup_date , extra_fields,current_status} = order
         
           return (
           
              <tr key={_id}  >
                
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
              {status_detail}
          </span>
            <span className="timeline_date">
              {time}
          </span>
            <span className="timeline_time">
              {location}
          </span>
          </p>
        </TimelineItem>
        )

      }
        
      )}

     
    
    

    render(){
       const a =this.state.orders;
       let del =0,int=0,ood=0,dex=0,nfi=0;
       if(this.state.orders){
         a.map(data => data.current_status_code === 'DEL' ? del=del+1:del=del)
       }
       if(this.state.orders){
        a.map(data => data.current_status_code === 'INT' ? int=int+1:int=int)
      }
      if(this.state.orders){
        a.map(data => data.current_status_code === 'OOD' ? ood=ood+1:ood=ood)
      }
      if(this.state.orders){
        a.map(data => data.current_status_code === 'DEX' ? dex=dex+1:dex=dex)
      }
       if(this.state.orders){
        a.map(data => data.current_status_code === 'NFI' ? nfi=nfi+1:nfi=nfi)
      }
    
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
        <p className="card_no">{del}</p >
    </div>
    <div className="card">
      <p className="card_head">INT</p>
        <p className="card_no">{int}</p >
    </div>
    <div className="card">
      <p className="card_head">OOD</p>
        <p className="card_no">{ood}</p >
    </div>
    <div className="card">
      <p className="card_head">DEX</p>
        <p className="card_no">{dex}</p >
    </div>
    <div className="card">
      <p className="card_head">NFI</p>
      <p className="card_no">{nfi}</p >
    </div>
   </div>
    
   
        
     
    
   <Center/>

    {/* <div class="row row-content ">
       
    <div class="col-12 col-sm-6">
        <TimelineList/>
    </div>
    <div class="col-12 col-sm-4 order-sm-last col-md-6">
        <Center/>
    </div>

    </div> */}
           
    

              

                   


            </BrowserRouter>
           
          );
          }
        }
export default Main;
        
    
