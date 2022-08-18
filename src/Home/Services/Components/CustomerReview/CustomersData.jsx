import React,{useState,useEffect} from 'react'
import './customerData.css'
import {
  UilSearch
} from "@iconscout/react-unicons";

import {SidebarData2} from '../../Data/Data2';
import CustomersTable from './CustomerTable';
import Popup from './customerAdd';
import {Search,Close} from '@mui/icons-material';

function CustomersData() {

  const [EmailInput, setEmailInput] = useState('')

  const [openPopup, setOpenPopup] = useState(false)

  const clearInput = () => {
    setEmailInput('')
  }


const data = [
        {id:1, name: 'Mirza Aman', travel_id:8512, phone_number:8129004343},
        {id:2, name: 'Sadikk khs', travel_id:9462, phone_number:1846257896},
        {id:3, name: 'Mirza Aman', travel_id:2485, phone_number:8129004343},
        {id:4, name: 'Mirza Aman', travel_id:4843, phone_number:8129004343},
        {id:5, name: 'Mirza Aman', travel_id:75465, phone_number:8129004343},
        {id:6, name: 'Mirza Aman', travel_id:15465, phone_number:8129004343},
        {id:7, name: 'Mirza Aman', travel_id:25465, phone_number:8129004343},
        {id:8, name: 'Mirza Aman', travel_id:45465, phone_number:8129004343},
        {id:9, name: 'Mirza Aman', travel_id:5465, phone_number:8129004343},
        {id:10, name: 'Mirza Aman', travel_id:65465, phone_number:8129004343},
        {id:11, name: 'Mirza Aman', travel_id:25465, phone_number:8129004343},
        {id:12, name: 'Mirza Aman', travel_id:905465, phone_number:8129004343},
        {id:13, name: 'Mirza Aman', travel_id:841252465, phone_number:8129004343},
        {id:14, name: 'Mirza Aman', travel_id:55465, phone_number:8129004343},
        {id:15, name: 'Mirza Aman', travel_id:25252465, phone_number:8129004343},
        {id:16, name: 'Mirza Aman', travel_id:552525, phone_number:8129004343},
        {id:17, name: 'Mirza Aman', travel_id:75425, phone_number:8129004343},
        {id:18, name: 'Mirza Aman', travel_id:3648, phone_number:8129004343},
        {id:19, name: 'Mirza Aman', travel_id:1648, phone_number:8129004343},
        {id:20, name: 'Mirzbvb', travel_id:65465, phone_number:81295343},
    ]
//   const SearchGo = () => {
//     if(EmailInput.length!=0){
//       if(EmailInput.length>12){
//         alert("Fetching data")
//       }else{
//         alert("No User Found !")
//       }
//   }else{
//     alert("please enter something !")
//   }
// } 

  return (
    <>
    <div className="CustomersData">
      <div className="Customers">
        <div className="Search">
          <div className="SearchBox">
            <div className="SearchInput">
             <input
              type='text'
              autoFocus
              className='InputEmail'
              required
              placeholder='Enter USer Travel ID'
              value={EmailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              list='data'
              />
              <hr />
              <datalist id='data' >
                {
                  data.map((data,index) =>{
                    return(
                      <option> {data.travel_id} </option>
                    )
                  })
                }
              </datalist>
                <div className="SearchIcon">
                {EmailInput.length === 0 ? (
            <Search />
          ) : (
            <Close id="clearBtn" onClick={clearInput} />
          )}
                </div>
            </div>
                <div className="add-button" onClick={() => setOpenPopup(true)} >
                  <h6>add ✏</h6>
                </div>
          </div>
        </div>
        <div className="CustomersTable">
          <CustomersTable/>
        </div>
      </div>
    </div>
    <Popup 
    openPopup={openPopup}
    setOpenPopup={setOpenPopup}
    >
    </Popup>
    </>
  )
}

export default CustomersData