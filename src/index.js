import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Services from './Home/services'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import AirTicketMain from './Home/Services/Air Ticket/AirTicketMain'
import AttestationMain from './Home/Services/Attestation/AttestationMain'
import EmigrationMain from './Home/Services/Emigration/EmigrationMain'
import HajjMain from './Home/Services/Hajj/HajjMain';
import RecruitmentMain from './Home/Services/Recruitment/RecruitmentMain';
import TourPackagesMain from './Home/Services/Tour Packages/TourPackagesMain';
import UmrahMain from './Home/Services/Umrah/UmrahMain';
import VisitVisa from './Home/Services/Visit Visa/VisitVisa';
import WakkalaMain from './Home/Services/Wakkala/WakkalaMain';
import CustomersTable from './Home/Services/Components/CustomerReview/CustomerTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route element={<App/>} path="/" />
      <Route element={<App/>} path="/home" />
      <Route element={<Services/>} path='/services' />
      <Route element={<WakkalaMain/>} path='/services/Wakkala' />
      <Route element={<AirTicketMain/>} path='/services/AirTicket' />
      <Route element={<EmigrationMain/>} path='/services/Emigration' />
      <Route element={<UmrahMain/>} path='/services/Umrah' />
      <Route element={<HajjMain/>} path='/services/Hajj' />
      <Route element={<VisitVisa/>} path='/services/VisitVisa' />
      <Route element={<AttestationMain/>} path='/services/Attestation' />
      <Route element={<TourPackagesMain/>} path='/services/TourPackages' />
      <Route element={<RecruitmentMain/>} path='/services/Recruitment' />
      <Route element={<CustomersTable/>} path='/CustomersTable' />
      </Routes>
    </Router>
  </React.StrictMode>
);