import React, { useState } from 'react';

import TravelerInfo from './Components/TravelerInfo';
import EstimatedTimeOfArrival from './Components/EstimatedTimeOfArrival';
import ContactInfo from './Components/ContactInfo';
import ReservationInfo from './Components/ReservationInfo';
import TermsAgreement from './Components/TermsAgreement';
import Payment from './Components/Payment';

function App() {
  const [mainTermAgreed, setMainTermAgreed] = useState(false);
  const [paymentRequested, setPaymentRequested] = useState(false);
  const handleMainTerm = agreed => {
    setMainTermAgreed(agreed);
  };

  return (
    <form
      className="App"
      onSubmit={e => {
        e.preventDefault();
        setPaymentRequested(true);
      }}
    >
      <TravelerInfo
        paymentRequested={paymentRequested}
      />
      <EstimatedTimeOfArrival
        paymentRequested={paymentRequested}
      />
      <ContactInfo
        paymentRequested={paymentRequested}
      />
      <ReservationInfo
        paymentRequested={paymentRequested}
      />
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