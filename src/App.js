import React from 'react';

import TravelerInfo from './Components/TravelerInfo';
import EstimatedTimeOfArrival from './Components/EstimatedTimeOfArrival';
import ContactInfo from './Components/ContactInfo';
import ReservationInfo from './Components/ReservationInfo';
import TermsAgreement from './Components/TermsAgreement';
import Payment from './Components/Payment';

function App() {
  return (
    <form className="App">
      <TravelerInfo />
      <EstimatedTimeOfArrival />
      <ContactInfo />
      <ReservationInfo />
      <TermsAgreement />
      <Payment />
    </form>
  );
}

export default App;