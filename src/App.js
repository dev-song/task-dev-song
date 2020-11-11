import React, { useState } from 'react';

import TravelerInfo from './Components/TravelerInfo';
import EstimatedTimeOfArrival from './Components/EstimatedTimeOfArrival';
import ContactInfo from './Components/ContactInfo';
import ReservationInfo from './Components/ReservationInfo';
import TermsAgreement from './Components/TermsAgreement';
import Payment from './Components/Payment';

function App() {
  const [mainTermAgreed, setMainTermAgreed] = useState(false);
  const handleMainTerm = agreed => {
    setMainTermAgreed(agreed);
  };

  return (
    <form className="App">
      <TravelerInfo />
      <EstimatedTimeOfArrival />
      <ContactInfo />
      <ReservationInfo />
      <TermsAgreement
        handleMainTerm={handleMainTerm}
      />
      <Payment
        mainTermAgreed={mainTermAgreed}
      />
    </form>
  );
}

export default App;