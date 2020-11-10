import React from 'react';

function BirthDate() {
  return (
    <div className='BirthDate'>
      <label className='birth-date__label'>
        생년월일
      </label>
      <input
        className='birth-date__input'
        type='number'
        placeholder='YYMMDD'
      />
    </div>
  );
}

export default BirthDate;