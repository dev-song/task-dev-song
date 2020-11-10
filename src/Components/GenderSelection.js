import React from 'react';

function GenderSelection() {
  return (
    <div className='GenderSelection'>
      <label className='title'>
        성별
      </label>
      <select
        className='gender__select'
        size="2"
      >
        <option className='gender__male'>남</option>
        <option className='gender__female'>여</option>
      </select>
    </div>
  );
}

export default GenderSelection;