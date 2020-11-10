import React, { useState } from 'react';

function GenderSelection() {
  const [gender, setGender] = useState('');

  const handleClick = e => {
    if (gender === e.target.parentNode.value) {
      e.target.parentNode.value = null;
    }

    setGender(e.target.parentNode.value);
  };

  const validateGender = userGender => {
    return !!userGender;
  }

  return (
    <div className='GenderSelection'>
      <label className='title'>
        성별
      </label>
      <select
        className='gender__select'
        onClick={handleClick}
        size="2"
      >
        <option
          className='gender__male'
        >
          남
        </option>
        <option
          className='gender__female'
        >
          여
        </option>
      </select>
      {!validateGender(gender)
        ? (
          <span className='gender__msg'>성별을 선택해주세요.</span>
        )
        : null
      }
    </div>
  );
}

export default GenderSelection;