import { useState, useEffect } from "react";

// Put this in its own component since the JSX is re-evaluated every 10ms due to setInterval. In this component, only the <progress> element is
// re-evaluated, thus, removing unnecessary computations from happening when this code was in DeleteConfirmation. Some optimization.
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    // Provided by the browser. The function provided to setInterval is executed several times, based on the 2nd parameter provided.
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
