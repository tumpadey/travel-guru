import React from 'react';

import { Col, Form, Row} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './Booking.css';




const Booking = () => {
    const history = useHistory()
    const handleSearch = (search) =>{
        history.push('/search');
    }
    
    
    return (
        <div className="background-image">
            <Header></Header>
            
            {/* <div className='mx-5 d-flex justify-content-center align-items-center '>
             <div className='col-md-5'>
          <h1 className="PlaceName">COX'S BAZAR</h1>
          <p className="Detail">Cox's Bazar in Bangladesh is the world's longest natural 
            <br/>
            sea beach,and a popular tourist destination in the country.
            <br/>
            It is famous mostly for its long natural sandy beach, 
            <br/>
            and it is infamous for the largest refugee camp in the
            <br/>
            world. It is located 150 km (93 mi) south of the divisional
            <br/>
            headquarter city of Chittagong. Cox's Bazar is also known
            <br/>
            by the name Panowa, which translates literally as
            <br/>
            "yellow flower". Another old name was "Palongkee".
          </p>
          </div> */}
          
        
        <div className="Form">
          <Form  className='bg-light   py-4 rounded' >
          <Form.Group>
             <Form.Label>Name</Form.Label>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                       
                        
                    </Row>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Origin</Form.Label>
                    <Form.Control type="origin" placeholder="Enter city" />
                  
                </Form.Group>

                <Form.Group >
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="destination" placeholder="Enter destination" />
                </Form.Group>
                <button onClick={() => handleSearch()} type="submit" class="btn btn-warning">Start Booking</button>
                
                
           </Form>
           </div> 
          
          
          
          </div>  
            
       
            
        // </div>
    );
};

export default Booking;