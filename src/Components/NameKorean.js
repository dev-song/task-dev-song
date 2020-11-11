import React, { useState } from 'react';

function NameKorean({ paymentRequested }) {
  const validateName = name => {
    if (!paymentRequested && name === '') return;

    const LEN = name.length;
    let msg = '';

    switch (true) {
      case (LEN < 2):
        msg = '최소 2자 이상 입력해주세요.';
        break;
      case (LEN > 20):
        msg = '최대 20자까지 입력 가능합니다.';
        break;
      case (LEN !== name.match(/[가-힣]/g).length):
        msg = '한글만 입력 가능합니다.';
        break;
      default:
      // console.log('유효한 이름입니다.');
    }

    return msg;
  };

  const [name, setName] = useState('');
  const NAME_VALIDATE_MSG = validateName(name);

  return (
    <div className='NameKorean'>
      <label className='name__label'>
        한글 이름
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
  );
}

export default NameKorean;