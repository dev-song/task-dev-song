import React, { useState } from 'react';

function ReservationInfo({ paymentRequested }) {
  const validateText = text => {
    if (!paymentRequested && text === '') return;

    const LEN = text.length;
    let msg = '';

    switch (true) {
      case (LEN === 0):
        msg = '기타 예약 정보를 입력해주세요.';
        break;
      case (LEN > 200):
        msg = '최대 200자까지 입력 가능합니다.';
        break;
      default:
      // console.log('유효한 문자열입니다.');
    }

    return msg;
  }

  const [reservationInfo, setReservationInfo] = useState('');
  const INFO_VALIDATE_MSG = validateText(reservationInfo);

  return (
    <div className='ReservationInfo'>
      <h2 className='title'>
        기타 예약 정보
      </h2>
      <div className='reservation-info--container'>
        <label className='reservation-info__label'>
          오시는 교통 수단을 적어주세요.
        </label>
        <textarea
          className='reservation-info__input'
          placeholder='답변을 입력해 주세요.'
          value={reservationInfo}
          onChange={e => setReservationInfo(e.target.value)}
        />
        {!!INFO_VALIDATE_MSG
          ? (
            <span className='reservation-info__msg'>{INFO_VALIDATE_MSG}</span>
          )
          : null
        }
      </div>
    </div>
  );
}

export default ReservationInfo;