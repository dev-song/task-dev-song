import React, { useState } from 'react';
import './styles/GenderSelection.css';

function GenderSelection({ paymentRequested, passValidation }) {
  const validateGender = userGender => {
    if (!paymentRequested) return;

    let msg = '';
    if (!userGender) msg = '성별을 선택해주세요.';

    return msg;
  };
  const handleClick = e => {
    if (gender === e.target.parentNode.value) {
      e.target.parentNode.value = null;
    }

    setGender(e.target.parentNode.value);
  };

  const [gender, setGender] = useState('');
  const GENDER_VALIDATE_MSG = validateGender(gender);

  passValidation(!GENDER_VALIDATE_MSG && paymentRequested);

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
      {!!GENDER_VALIDATE_MSG
        ? (
          <span className='gender__msg'>{GENDER_VALIDATE_MSG}</span>
        )
        : null
      }
    </div>
  );
}

export default GenderSelection;