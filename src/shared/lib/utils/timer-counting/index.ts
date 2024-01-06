import {useEffect, useState} from "react";

const getPadTime = (time: number) => String(time).padStart(2, '0');

export const useTimerCounting = (time: number, stopTimer = true) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const timeFilled = timeLeft === 0;

  const minutes = getPadTime(Math.floor(timeLeft / 60))
  const seconds = getPadTime(timeLeft - Number(minutes) * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      !stopTimer && setTimeLeft(timeLeft => timeLeft >= 1 ? timeLeft - 1 : 0)
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, stopTimer])

  return {
    timeFilled,
    minutes,
    seconds
  }
}
