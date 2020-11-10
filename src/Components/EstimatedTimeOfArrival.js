import React, { useState } from 'react';

function EstimatedTimeOfArrival() {
  const createHourList = () => new Array(24).fill(0).map((v, i) => i);
  const createMinuteList = () => new Array(60).fill(0).map((v, i) => i);
  const validateTime = (hourText, minuteText) => {
    if (hourText === '시' || minuteText === '분') return false;
    return true;
  }

  const [hourSelected, setHourSelected] = useState('시');
  const [minuteSelected, setMinuteSelected] = useState('분');

  return (
    <div className='EstimatedTimeOfArrival'>
      <h2 className='title'>
        숙소 도착 예정 시간
      </h2>
      <div className='eta__form'>
        <select
          className='eta__hour'
          onChange={e => setHourSelected(e.target.value)}
        >
          <option defaultValue>시</option>
          {createHourList().map(hour => (
            <option key={hour}>{hour}시</option>
          ))}
        </select>
        <select
          className='eta__minute'
          onChange={e => setMinuteSelected(e.target.value)}
        >
          <option defaultValue>분</option>
          {createMinuteList().map(minute => (
            <option key={minute}>{minute}분</option>
          ))}
        </select>
        {!validateTime(hourSelected, minuteSelected)
          ? (
            <span className='eta__msg'>숙소 도착 예정 시간을 선택해주세요.</span>
          )
          : null
        }
      </div>
    </div>
  );
}

export default EstimatedTimeOfArrival;