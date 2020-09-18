import React from 'react';
import { useState } from 'react';
import fakeData from '../fakeData/hotelDetails';
const Search = () => {
    const hotelDetails = fakeData;
    const [hotels, setHotels] = useState(hotelDetails);
    return (
        <div>
             <h3><small>252 stays Apr 13-17 3 guests</small></h3>
            <h3>Stay in Beautiful Hotel</h3>
            <h4>Total hotels: {hotels.length}</h4>
           {
              hotels.map(
                  hotel =>
                 <div class="card mb-3">
                     <div class="row no-gutters">
                  <div class="col-md-4">
                     <img src ={hotel.image} alt=""/>
                  </div>
                  <div class="col-md-8" >
                  <div class="card-body">
                   <h5 class="card-title">{hotel.name}</h5>
                   <p class="card-text">{hotel.bed}</p>
                   <p class="card-text">{hotel.facilities}</p>
                   <p class="card-text">${hotel.price}night</p>
                 </div>
                 </div>
                </div>
                </div>       
              ) 
           }
           
        </div>
    );
};

export default Search;