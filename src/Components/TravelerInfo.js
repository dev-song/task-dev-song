import React from 'react';

import NameEnglish from './NameEnglish';
import NameKorean from './NameKorean';
import GenderSelection from './GenderSelection';
import BirthDate from './BirthDate';

function TravelerInfo() {
  return (
    <div className='TravelerInfo'>
      <h2 className='title'>
        여행자
        <span className='traveler-number'></span>
      </h2>
      <div className='traveler-info__form'>
        <NameEnglish />
        <NameKorean />
        <GenderSelection />
        <BirthDate />
      </div>
    </div>
  );
}

export default TravelerInfo;