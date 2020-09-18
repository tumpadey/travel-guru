import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import { createContext } from 'react';

import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Search from './components/Search/Search';

export const UserContext = createContext();


function App() {
 const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
   <Router>
      
      <Switch>
       
        <Route path="/home">
        <Home></Home>
        </Route>
        
        <Route path="/booking">
          <Booking></Booking>
        </Route>

        <Route path="/login">
        <Login />
        </Route>
      
        <PrivateRoute path="/search">
        <Search></Search>
        </PrivateRoute>


        <Route exact path="/">
         <Home />
        </Route>
        <Route path="*">

        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
    
       
  );
}

export default App;
