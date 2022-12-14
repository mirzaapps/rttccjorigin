import React, { useState } from "react";
import './SideBar.css'
import Logo from "../../imgs/logo.png"
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data"
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {Routes, Route, useNavigate} from 'react-router-dom';
import fire from '../../../../firebase_DB/firebaseAPI';

const Sidebar = (props) => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const [menuPage, setmenuPage] = useState(null)

  const navigate = useNavigate();

  const fireSignOut = () => {
    fire.auth().signOut()
  }

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)

  function menuClick(menu,pro){
    setSelected(menu)
    if(pro==='Services'){
      props.changeWord('Services')
    }else if(pro==='Customers'){
      props.changeWord('Customers')
    }else if(pro==='Dashboard'){
      props.changeWord('Dashboard')
    }
  }

  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => menuClick(index,item.heading)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem" onClick={fireSignOut}>
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;