import React from 'react';

function ReservationInfo() {
  return (
    <div className='ReservationInfo'>
      <h2 className='title'>
        기타 예약 정보
      </h2>
      <form className='reservation-info--container'>
        <label className='reservation-info__label'>
          오시는 교통 수단을 적어주세요.
        </label>
        <textarea className='reservation-info__input'
          placeholder='답변을 입력해 주세요.'
        />
      </form>
    </div>
  );
}

export default ReservationInfo;