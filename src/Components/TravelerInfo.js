import React from 'react';
import './styles/TravelerInfo.css';

import NameEnglish from './NameEnglish';
import NameKorean from './NameKorean';
import GenderSelection from './GenderSelection';
import BirthDate from './BirthDate';

function TravelerInfo({ paymentRequested, passValidation }) {
  return (
    <section className='TravelerInfo'>
      <h2 className='title'>
        여행자
        <span className='traveler-number'></span>
      </h2>
      <div className='traveler-info__form'>
        <NameEnglish
          paymentRequested={paymentRequested}
          passValidation={passValidation}
        />
        <NameKorean
          paymentRequested={paymentRequested}
          passValidation={passValidation}
        />
        <GenderSelection
          paymentRequested={paymentRequested}
          passValidation={passValidation}
        />
        <BirthDate
          paymentRequested={paymentRequested}
          passValidation={passValidation}
        />
      </div>
    </section>
  );
}

export default TravelerInfo;