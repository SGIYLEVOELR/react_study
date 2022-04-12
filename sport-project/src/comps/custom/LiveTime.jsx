import React, { useState, useEffect } from 'react';
// moment
import moment, { now } from 'moment';
import 'moment/locale/ko';

const LiveTime = () => {
  const livetime = {
    "padding": "0 0 0.5rem 0"
  };
  // 현재 시간 가져오기
  const nowTime = moment().format('YYYY.MM.DD (dd) HH:mm:ss');
  const [realTime, setRealTime] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setRealTime(nowTime);
    }, 1000);
    return () => clearInterval(id);
  });

  return <div style={livetime}>{realTime}</div>;
};

export default LiveTime;
