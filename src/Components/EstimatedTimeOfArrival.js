import React, { useState } from 'react';

function EstimatedTimeOfArrival({ paymentRequested, passValidation }) {
  const HOUR_LIST = new Array(24).fill(0).map((v, i) => i);
  const MINUTE_LIST = new Array(60).fill(0).map((v, i) => i);
  const validateTime = (hourText, minuteText) => {
    if (!paymentRequested) return;

    let msg = '';
    if (hourText === '시' || minuteText === '분') msg = '숙소 도착 예정 시간을 선택해주세요.';

    return msg;
  }

  const [hourSelected, setHourSelected] = useState('시');
  const [minuteSelected, setMinuteSelected] = useState('분');
  const ETA_VALIDATE_MSG = validateTime(hourSelected, minuteSelected);

  passValidation(!ETA_VALIDATE_MSG && paymentRequested);

  return (
    <section className='EstimatedTimeOfArrival'>
      <h2 className='title'>
        숙소 도착 예정 시간
      </h2>
      <div className='eta__form'>
        <select
          className='eta__hour'
          onChange={e => setHourSelected(e.target.value)}
        >
          <option defaultValue>시</option>
          {HOUR_LIST.map(hour => (
            <option key={hour}>{hour}시</option>
          ))}
        </select>
        <select
          className='eta__minute'
          onChange={e => setMinuteSelected(e.target.value)}
        >
          <option defaultValue>분</option>
          {MINUTE_LIST.map(minute => (
            <option key={minute}>{minute}분</option>
          ))}
        </select>
        {!!ETA_VALIDATE_MSG
          ? (
            <span className='eta__msg'>{ETA_VALIDATE_MSG}</span>
          )
          : null
        }
      </div>
    </section>
  );
}

export default EstimatedTimeOfArrival;