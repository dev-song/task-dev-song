import React, { useState } from 'react';
import './styles/ContactInfo.css';

function ContactInfo({ paymentRequested, passValidation }) {
  const validateName = name => {
    if (!paymentRequested && name === '') return;

    const LEN = name.length;
    const MATCHING_LETTERS = name.match(/[a-z ]/gi);
    let msg = '';

    switch (true) {
      case (LEN < 2):
        msg = '최소 2자 이상 입력해주세요.';
        break;
      case (LEN > 20):
        msg = '최대 20자까지 입력 가능합니다.';
        break;
      case (!MATCHING_LETTERS || LEN !== MATCHING_LETTERS.length):
        msg = '영어와 띄어쓰기만 입력 가능합니다.';
        break;
      default:
      // console.log('유효한 이름입니다.');
    }

    return msg;
  }

  const validateNumber = numberText => {
    if (!paymentRequested && numberText === '') return;

    const LEN = numberText.length;
    let msg = '';

    switch (true) {
      case (LEN < 2):
        msg = '최소 2자 이상 입력해주세요.';
        break;
      case (LEN > 20):
        msg = '최대 20자까지 입력 가능합니다.';
        break;
      case (LEN !== numberText.match(/\d/g).length):
        msg = '숫자만 입력 가능합니다';
        break;
      default:
      // console.log('유효한 번호입니다.');
    }

    return msg;
  }

  const [name, setName] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const NAME_VALIDATE_MSG = validateName(name);
  const MOBILE_VALIDATE_MSG = validateNumber(mobileNum);

  passValidation(!NAME_VALIDATE_MSG && !MOBILE_VALIDATE_MSG && paymentRequested);

  return (
    <section className='ContactInfo'>
      <h2 className='title'>
        상세 핸드폰 정보
      </h2>
      <div className='contact-info__form'>
        <div className='name--container'>
          <label className='name__label'>
            사용자 이름
          </label>
          <input
            className='name__input'
            type='text'
            placeholder='홍길동'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {!!NAME_VALIDATE_MSG
            ? (
              <span className='name__msg'>{NAME_VALIDATE_MSG}</span>
            )
            : null
          }
        </div>
        <div className='mobile-number--container'>
          <label className='mobile-number__label'>
            핸드폰 번호
          </label>
          <select className='mobile-number__country'>
            <option defaultValue>+82 (대한민국)</option>
          </select>
          <input
            className='mobile-number__input'
            type='text'
            placeholder="'-' 없이 입력해주세요"
            value={mobileNum}
            onChange={e => setMobileNum(e.target.value)}
          />
          {!!MOBILE_VALIDATE_MSG
            ? (
              <span className='mobile-number__msg'>{MOBILE_VALIDATE_MSG}</span>
            )
            : null
          }
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;