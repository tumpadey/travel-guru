import React from 'react';
import {   Card, Col, Row } from 'react-bootstrap';
import { Link  } from 'react-router-dom';
import Header from '../Header/Header';

import './Home.css';
const Home = () => {
    
     
    
    return (
       
    <div className="background-image">
        <div>
        <Header></Header>
        </div>    
        <div>
        <Row className="BookingPlace">
        <Col>
         <Card style={{ width: '18rem', border: '3px solid yellow' }}>
        <Card.Img variant="top" src="https://incredibledeshbangla.files.wordpress.com/2015/05/cox_bazar_sea_beach2.jpg" />
        <Card.Body>
            <Card.Title>Cox'Bazar</Card.Title>
            <Card.Text>
            Cox's Bazar is a district in the Chittagong Division of Bangladesh. It is named after Cox's Bazar town. 
            
            </Card.Text>
            
            <Link variant="warning" class="btn btn-warning" to="/booking">Booking -></Link>
        </Card.Body>
        </Card>
        </Col>
            <Col>
         <Card style={{ width: '18rem', border: '3px solid yellow' }}>
        <Card.Img variant="top" src="https://live.staticflickr.com/4367/36691543861_c9572ab3c2_b.jpg" />
        <Card.Body>
            <Card.Title>Sundorbon</Card.Title>
            <Card.Text>
            The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges,Brahmaputra and Meghna Rivers in the Bay of Bengal.
            </Card.Text>
            <Link variant="warning" class="btn btn-warning" to="/booking">Booking -></Link>
        </Card.Body>
        </Card>
        </Col>
         <Col>
         <Card style={{ width: '18rem', border: '3px solid yellow' }}>
            <Card.Img variant="top" src="https://tourrom.com/wp-content/uploads/2019/01/Discover-sajek-valley.jpg" />
            <Card.Body>
            <Card.Title>Sajek</Card.Title>
            <Card.Text>
            Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains.
            </Card.Text>
            <Link variant="warning" class="btn btn-warning" to="/booking">Booking -></Link>
        </Card.Body>
        </Card>
    </Col>
        </Row>
    </div>
             
            
        </div>
          
           
  
    );
}

export default Home;
