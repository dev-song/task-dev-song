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
  const [validationPassed, setValidationPassed] = useState(false);
  const handleMainTerm = agreed => {
    setMainTermAgreed(agreed);
  };
  const passValidation = result => {
    setValidationPassed(result);
  }

  return (
    <div className="App">
      {paymentRequested && validationPassed
        ? <div className="Overlay">예약이 완료되었습니다.</div>
        : null
      }
      <form
        className="Reservation"
        onSubmit={e => {
          e.preventDefault();

          if (!mainTermAgreed) return;
          setPaymentRequested(true);
        }}
      >
        <TravelerInfo
          paymentRequested={paymentRequested}
          passValidation={passValidation}
        />
        <EstimatedTimeOfArrival
          paymentRequested={paymentRequested}
          passValidation={passValidation}
        />
        <ContactInfo
          paymentRequested={paymentRequested}
          passValidation={passValidation}
        />
        <ReservationInfo
          paymentRequested={paymentRequested}
          passValidation={passValidation}
        />
        <TermsAgreement
          handleMainTerm={handleMainTerm}
        />
        <Payment
          mainTermAgreed={mainTermAgreed}
          validationPassed={validationPassed}
        />
      </form>
    </div>
  );
}

export default App;