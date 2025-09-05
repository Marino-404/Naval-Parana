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
    if (!trigger) return;

    let start = from;
    setCount(from); // 🔄 resetear cada vez
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
      {prefix && (
        <span className="text-7xl md:text-6xl align-center">{prefix}</span>
      )}
      <span>{count}</span>
      {suffix && (
        <span className="text-7xl md:text-6xl align-center">{suffix}</span>
      )}
    </span>
  );
};

export default AnimatedCounter;
