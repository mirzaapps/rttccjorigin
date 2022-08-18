import React,{useEffect,useState} from "react";
import Cards from "../Cards/Cards";
import fire from '../../../../firebase_DB/firebaseAPI';
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <UserId/>
    </div>
  );
};

export default MainDash;

const UserId = () => {

  const [UserName, setUserName] = useState('No user name')

  useEffect(() => {

    if(fire.auth().currentUser.email === 'smswyd@rolex.com'){
      setUserName('Shamsudheen')
    }
  }, [])
  

  return(
    <div className="FireUser">
      <div className="UserID">
        <div className="ID">
          <h4> User: {fire.auth().currentUser?.email} </h4>
          <h4> User Name: {UserName} </h4>
        </div>
      </div>
    </div>
  );
} 