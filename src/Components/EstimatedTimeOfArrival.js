import React from 'react';

function createHourList() {
  const HOURS = [];
  for (let hour = 0; hour < 24; hour++) {
    HOURS.push(hour);
  }

  return HOURS;
}

function createMinuteList() {
  const MINUTES = [];
  const INTERVAL = 10;
  for (let minute = 0; minute < 60; minute += INTERVAL) {
    MINUTES.push(minute);
  }

  return MINUTES;
}

function EstimatedTimeOfArrival() {
  const hours = createHourList();
  const minutes = createMinuteList();

  return (
    <div className='EstimatedTimeOfArrival'>
      <h2 className='title'>
        숙소 도착 예정 시간
      </h2>
      <div className='eta__form'>
        <select className='eta__hour'>
          <option defaultValue>시</option>
          {hours.map(hour => (
            <option key={hour}>{hour}시</option>
          ))}
        </select>
        <select className='eta__minute'>
          <option defaultValue>분</option>
          {minutes.map(minute => (
            <option key={minute}>{minute}분</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default EstimatedTimeOfArrival;