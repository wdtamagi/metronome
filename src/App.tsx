import React, { FC, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";

const duration = 900;

const App: FC = () => {
  const [beep, setBeep] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setBeep((s) => !s), duration);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const props = useSpring({
    transform: `rotate(${beep ? "-" : ""}55deg)`,
    config: { duration },
  });
  return (
    <div className="App">
      <animated.div style={props} className="Stick"></animated.div>
    </div>
  );
};

export default App;
