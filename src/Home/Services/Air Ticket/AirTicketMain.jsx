import React,{useState,useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

function AirTicketMain() {
  const auth= getAuth();

  const navigate = useNavigate();

  const [page, setPage] = useState(null)

  useEffect(() => {
    
    const subscription = onAuthStateChanged(auth,user => {
      if(user!=null){
        setPage(true)
      }else{
        navigate('/');
      }
    })
  
    return () => {
      subscription()
    }
  }, [])
  
  return (
    <div>AirTicketMain</div>
  )
}

export default AirTicketMain