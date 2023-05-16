import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";

const Timer = () => {
  const { stop, setStop, questionNumber, setQuestionNumber } =
    useGlobalContext();
  const [timing, setTiming] = useState(30);

  useEffect(() => {
    if (timing === 0) {
      return setStop(true);
    }
    const interval = setInterval(() => {
      setTiming((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timing]);

  useEffect(() => {
    setTiming(30);
  }, [questionNumber]);

  return timing;
};

export default Timer;
