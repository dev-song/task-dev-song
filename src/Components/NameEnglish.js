import React, { useState } from 'react';

function validateName(name) {
  const LEN = name.length;
  let msg = '';

  switch (true) {
    case (LEN < 2):
      msg = '최소 2자 이상 입력해주세요.';
      break;
    case (LEN > 20):
      msg = '최대 20자까지 입력 가능합니다.';
      break;
    case (LEN !== name.match(/[a-zA-Z ]/g).length):
      msg = '영어와 띄어쓰기만 입력 가능합니다.';
      break;
    default:
    // console.log('유효한 이름입니다.');
  }

  return msg;
}

function NameEnglish() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const FIRST_NAME_VALIDATE_MSG = validateName(firstName);
  const LAST_NAME_VALIDATE_MSG = validateName(lastName);

  return (
    <div className='NameEnglish'>
      <div className='first-name--container'>
        <label className='first-name__label'>
          영문 이름
        </label>
        <input
          className='first-name__input'
          type='text'
          placeholder='Gil Dong'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        {!!FIRST_NAME_VALIDATE_MSG
          ? (
            <span className='first-name__msg'>{FIRST_NAME_VALIDATE_MSG}</span>
          )
          : null
        }
      </div>
      <div className='last-name--container'>
        <label className='last-name__label'>
          영문 성
        </label>
        <input
          className='last-name__input'
          type='text'
          placeholder='Hong'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        {!!LAST_NAME_VALIDATE_MSG
          ? (
            <span className='last-name__msg'>{LAST_NAME_VALIDATE_MSG}</span>
          )
          : null
        }
      </div>
    </div>
  );
}

export default NameEnglish;