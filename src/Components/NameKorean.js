import React from 'react';

function NameKorean() {
  return (
    <div className='NameKorean'>
      <label className='name__label'>
        한글 이름
      </label>
      <input
        className='name__input'
        type='text'
        placeholder='홍길동'
      />
    </div>
  );
}

export default NameKorean;