import React, { useEffect, useState } from "react";

export default function Countdown() {
  const calculateTimeLeft = () => {
    let difference = +new Date(`03/03/2024`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        zile: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ore: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        secunde: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col items-center font-mono"
      >
        <span className="countdown font-mono text-4xl">
          {timeLeft[interval]}
        </span>
        <span>{interval}</span>
      </div>
    );
  });

  return (
    <div>
      <p className="text-sm text-gray-200 font-mono mb-1">coming soon...</p>
      <div className="flex gap-x-8 text-gray-200 ">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
}
