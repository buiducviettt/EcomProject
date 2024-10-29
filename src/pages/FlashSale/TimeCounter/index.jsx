/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import moment from 'moment';
const TimeCounter = ({ duration, className }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const formatTime = (seconds) => {
    const duration = moment.duration(seconds, 'seconds');
    const hours = String(duration.hours()).padStart(2, '0');
    const minutes = String(duration.minutes()).padStart(2, '0');
    const secs = String(duration.seconds()).padStart(2, '0');
    return `${hours}h : ${minutes}m : ${secs}s`;
  };
  return (
    <div className={className}>
      <h1>{timeLeft > 0 ? formatTime(timeLeft) : <h1>Time expire</h1>}</h1>
    </div>
  );
};
export default TimeCounter;
