import { useEffect, useRef, useState } from "react";

export default function Clock() {
  const today = new Date();
  const [date, setDate] = useState(
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}
    ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
  );

  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setDate(
        `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}
      ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
      );
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [today]);
  return <>{date}</>;
}
