import React, {useEffect, useState} from 'react'
import fire from './firebase_DB/firebaseAPI'
import PortUserLogin from './userAuthentication/portaAuthenticationLogin'
import './App.css';
import Logo from './rolex_logo.png';
import Sevices from './Home/services';
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

function App() {

  const auth= getAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const subscription = onAuthStateChanged(auth,user => {
      if(user != null){
        navigate('/services');
      }else{
        navigate('/')
      }
    })
  
    return () => {
      subscription();
    }
  },[])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="Rolex Travel and Tours" className='logo'/>
        <PortUserLogin/>
      </header>

    </div>
  );
}

export default App;
