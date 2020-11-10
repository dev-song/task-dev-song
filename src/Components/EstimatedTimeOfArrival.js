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
      <form className='eta__form'>
        <select className='hour__select'>
          <option>시</option>
          {hours.map(hour => (
            <option>{hour}시</option>
          ))}
        </select>
        <select className='minute__select'>
          <option>분</option>
          {minutes.map(minute => (
            <option>{minute}분</option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default EstimatedTimeOfArrival;