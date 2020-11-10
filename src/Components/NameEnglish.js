import React from 'react';

function NameEnglish() {
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
        />
      </div>
      <div className='last-name--container'>
        <label className='last-name__label'>
          영문 성
        </label>
        <input
          className='last-name__input'
          type='text'
          placeholder='Hong'
        />
      </div>
    </div>
  );
}

export default NameEnglish;