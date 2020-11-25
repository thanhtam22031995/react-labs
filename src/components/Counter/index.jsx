import React, { useState } from 'react';
import './Counter.scss';

Counter.propTypes = {};

function Counter(props) {
  const [count, setCount] = useState(0);

  const handleDecreseClick = () => {
    setCount((x) => x - 1);
  };
  const handleIncreaseClick = () => {
    setCount((x) => x + 1);
  };

  return (
    <div className="counter">
      <button onClick={handleDecreseClick}>Decrease</button>
      <p>{count}</p>
      <button onClick={handleIncreaseClick}>Increase</button>
    </div>
  );
}

export default Counter;
