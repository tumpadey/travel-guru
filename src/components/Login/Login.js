import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './Login.css';
import { useState } from 'react';


const Login = () => {
  const [newUser, setNewUser] =useState(false);
  const [user, setUser] = useState({
    isSign :false,
    name :'',
    email :'',
    password :'',
    photo:'',
    error:'',
    success: false

  })
  
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
          
      firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () => {
       firebase.auth().signInWithPopup(provider)
       .then(res=> {

          const { displayName, email } = res.user;
          console.log(displayName,email);
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          history.replace(from);

      })
         .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
         console.log(errorCode, errorMessage)
      });
}

const handleFaceBookLogin =()=>{
  firebase.auth().signInWithPopup(fbProvider)
  .then(res=>{
      
      
      const {displayName, email} = res.user;
      const signInUser = {displayName, email};
      setLoggedInUser(signInUser);
      history.replace(from);
      
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
          console.log(errorMessage,errorCode);
      
    });


 }
            const handleChange = (e) =>{
                      
              let fromValid = true;
              if(e.target.name === 'email'){

            fromValid = /\S+@\S+\.\S+/.test(e.target.value);


            }
            if(e.target.name === 'password'){

              const isValidPassword1 = e.target.value.length > 4;
              const isValidPassword2 = /\d{1}/.test(e.target.value);
              fromValid = isValidPassword1 && isValidPassword2;
            }

            if(fromValid){
            const newUserInfo ={...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            }

            }
            const handleSubmit =(e)=>{
            if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res=>{
              console.log(res);
              const newUserInfo ={...user};
              newUserInfo.error ='';
              newUserInfo.success= true;
              setUser(newUserInfo);
              updateName(user.name);
              
            })
            .catch(error=>{
            const newUserInfo = {...user};
            newUserInfo.error= error.message;
            newUserInfo.success= false;
            setUser(newUserInfo);

            })
            } 
            if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res=>{
            const newUserInfo = {...user};
            newUserInfo.error ='';
            newUserInfo.success =true;
            setUser(newUserInfo);
            console.log('sign in user info', res.user);
            const {displayName, email} = res.user;
            const signInUser = {displayName, email};
            setLoggedInUser(signInUser);
            history.replace(from);

            })
            .catch(error=> {
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);

            })
            }

            e.preventDefault();
            }

            const updateName = (name)=>{
            console.log("Name",name);
            const user = firebase.auth().currentUser;

            user.updateProfile({
            displayName: name

            }).then(res=>{

            })

            .catch(function(error) {
            console.log(error);
            });

            }
                
              
   

    
    return (
      <div>
        <div><Header></Header></div>
        <div >
       
            <div className="account-info" >
              <h3>Login</h3>
              <hr/>
                <input type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser" id=""/>
                        <label htmlFor="newUser">Sign Up Here </label>
                <form onSubmit={handleSubmit}>
                    {newUser && <input type="text" name="name" onBlur={handleChange} placeholder="emter your name" required/>}
                    <hr/>
                    <input type="text" name="email" onBlur={handleChange} placeholder="emter your email " required/>
                    <hr/>
                    <input type="password" name="password" onBlur={handleChange} placeholder="emter your password" required/>
                    <hr/>
                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
                <p style={{color:'red'}}>{user.error}</p>
                {user.success && <p style={{color:'green'}}>User {newUser ? 'created' :'Logged IN'} Successfully</p>}
               
                </div>
          
            <div className="login-info">
                
                <button  onClick={handleGoogleSignIn} className="  align-items-center  rounded-pill mb-2" >Continue with Google</button>
                <br/>
                <button onClick={handleFaceBookLogin} className=" rounded-pill ">Continue with Facebook</button>
                
                
            </div>
            
            
        </div>
      
        </div>

    );
};

export default Login;