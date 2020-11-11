import React from 'react';

import NameEnglish from './NameEnglish';
import NameKorean from './NameKorean';
import GenderSelection from './GenderSelection';
import BirthDate from './BirthDate';

function TravelerInfo({ paymentRequested }) {
  return (
    <div className='TravelerInfo'>
      <h2 className='title'>
        여행자
        <span className='traveler-number'></span>
      </h2>
      <div className='traveler-info__form'>
        <NameEnglish
          paymentRequested={paymentRequested}
        />
        <NameKorean
          paymentRequested={paymentRequested}
        />
        <GenderSelection
          paymentRequested={paymentRequested}
        />
        <BirthDate
          paymentRequested={paymentRequested}
        />
      </div>
    </div>
  );
}

export default TravelerInfo;