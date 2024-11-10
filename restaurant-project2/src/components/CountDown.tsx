"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [difference, setDifference] = useState(0); // Set initial state to 0

  useEffect(() => {
    const targetDate = new Date("10/10/2023");
    const calculateDifference = () => {
      return +targetDate - +new Date(); // Return the difference in milliseconds
    };

    // Set initial difference once client-side rendering is done
    setDifference(calculateDifference());

    const timer = setInterval(() => {
      setDifference(calculateDifference());
    }, 1000);

    // Clean up the interval on unmount
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array to run only on mount

  // If difference is less than or equal to 0, the countdown has finished
  if (difference <= 0) {
    return <span className="countdown-text">Time&apos;s up!</span>;
  }

  // Calculate days, hours, minutes, and seconds
  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  return (
    <span className="countdown-text">
      {d}:{h}:{m}:{s}
    </span>
  );
};

export default CountDown;
