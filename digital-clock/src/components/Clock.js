"use client";

import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const digitalClock = time.toLocaleTimeString();

  return (
    <div className="text-7xl p-20 animate-[pulse_1s_cubic-bezier(0.4, 0, 0.6, 1)_infinite]">
      {digitalClock}
    </div>
  );
};
export default Clock;
