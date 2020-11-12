import React, { useState } from 'react';
import './styles/BirthDate.css';

function BirthDate({ paymentRequested, passValidation }) {
  const validateBirthDate = date => {
    if (!paymentRequested && date === '') return;

    const LEN = date.length;
    let msg = '';

    switch (true) {
      case (LEN !== 6):
        msg = '6자리의 생년월일을 입력해주세요';
        break;
      case (LEN !== date.match(/\d/g).length):
        msg = '숫자만 입력 가능합니다';
        break;
      default:
      // console.log('유효한 생년월일입니다.');
    }

    return msg;
  };

  const [birthDate, setBirthDate] = useState('');
  const BIRTHDATE_VALIDATE_MSG = validateBirthDate(birthDate);

  passValidation(!BIRTHDATE_VALIDATE_MSG && paymentRequested);

  return (
    <div className='BirthDate'>
      <label className='birth-date__label'>
        생년월일
      </label>
      <input
        className='birth-date__input'
        type='text'
        placeholder='YYMMDD'
        value={birthDate}
        onChange={e => setBirthDate(e.target.value)}
      />
      {!!BIRTHDATE_VALIDATE_MSG
        ? (
          <span className='birth-date__msg'>{BIRTHDATE_VALIDATE_MSG}</span>
        )
        : null
      }
    </div>
  );
}

export default BirthDate;