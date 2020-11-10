import React from 'react';

function ContactInfo() {
  return (
    <div className='ContactInfo'>
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
          />
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
            type='number'
            placeholder="'-' 없이 입력해주세요"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;