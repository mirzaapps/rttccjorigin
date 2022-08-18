import SideBar from './SideBar/SideBar';
import MainDash from './MainDash/MainDash';
import './AdminStyle.css';
import React,{useState,useEffect} from 'react';
import CustomersData from './CustomerReview/CustomersData';
import ServicesData from '../../ProRedirect/Services2/ServicesData';

function AdminPanel() {

  const [word, setWord] = useState('Dashboard')

  let component

  if(word==='Dashboard'){
    component=<MainDash/>
  }else if(word==='Customers'){
    component=<CustomersData/>
  }else if(word==='Services'){
    component=<ServicesData/>
  }

    return (
      <div className="Appw">
        <div className="AppGlass">
          <SideBar changeWord={word => setWord(word)} />
          {component}
        </div>
      </div>
    );
  }
  
  export default AdminPanel;