import React,{useState,useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

import NoUser from './NoUser';

import AdminPanel from './Services/Components/AdminPanel';

import fire from '../firebase_DB/firebaseAPI';

import './Services.css'
import DropDown from './DropDown/DropDown';

function Services() {

  const auth= getAuth();

  const navigate = useNavigate();

  const [page, setPage] = useState(null)

  const [UserAuth, setUserAuth] = useState(false)

  useEffect(() => {
    
    const subscription = onAuthStateChanged(auth,user => {
      if(user!=null){
        setUserAuth(true)
      }else{
        setUserAuth(false)
      }
    })
  
    return () => {
      subscription()
    }
  }, [])
  
  
  return (
    <div className='Container'>
      <div className='DropDown' >
        {
          UserAuth? <AdminPanel/> : <NoUser/>
        }
      </div>
    </div>
  )
}

export default Services