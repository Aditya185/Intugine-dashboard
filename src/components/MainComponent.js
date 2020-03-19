import React, { Component } from 'react';
import Header from './HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import Center from './CenterComponent';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class Main extends Component {

  
    

    render(){

      

      

        return (
            <BrowserRouter>

                <div>
            
                        <Header />
    <div class = "row row-content">
    <div class="col-sm-4 col-md-3 order-2">
      <Card>
        <CardImg top width="20" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      </div>
      <div class="col-sm-4 col-md-3 order-2">
      <Card>
        <CardImg top width="20" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      </div>
      <div class="col-sm-4 col-md-3 order-2">
      <Card>
        <CardImg top width="20" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      </div>
      <div class="col-sm-4 col-md-3 order-2">
      <Card>
        <CardImg top width="20" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      </div>
      <div class="col-sm-4 col-md-3 order-2">
      <Card>
        <CardImg top width="20" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      </div>
    </div>

                        <div class="row row-content ">
       
                            <div class="col-sm-4 col-md-3 order-2">
                            <img src='assets/profile.svg' height="20" width="20" alt='Profile'/> 
                            <Timeline lineColor={'#ddd'} src="/assets/warehouse.svg" >
                          
                                <TimelineItem
                                   
                                   
                                >
                                   
                                    <h4>Subtitle</h4>
                                    <p>
                                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                  
                                    </p>
                                   
                                </TimelineItem>
                                <TimelineItem
                                    key="002"
                                  
                                >
                                  
                                    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
                                    <p>
                                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                  
                                    </p>
                                  
                                </TimelineItem>
                                <TimelineItem
                                    key="003"
                                   
                                >
                                   
                                    <h4>Subtitle</h4>
                                    <p>
                                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                  
                                    </p>
                                  
                                </TimelineItem>
                                <TimelineItem
                                    key="004"
                                   
                                >
                                   
                                    <h4>Subtitle</h4>
                                    <p>
                                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                   
                                    </p>
                                   
                                </TimelineItem>
                                </Timeline>
                              </div>
                              <div class="col-12 col-sm-4 order-sm-last col-md">
                              <Center/>
                              </div>

                            </div>
           
                   </div>

              

                   


            </BrowserRouter>
           
          );
          }
        }
export default Main;
        
    
