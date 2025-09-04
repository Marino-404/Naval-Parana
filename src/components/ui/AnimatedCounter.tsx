import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  trigger?: boolean; // disparar animación cuando sea true
};

const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  trigger = false,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!trigger) return; // solo animar cuando trigger sea true

    let start = from;
    const end = to;
    const increment = (end - start) / (duration * 60);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(handle);
  }, [trigger, from, to, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
