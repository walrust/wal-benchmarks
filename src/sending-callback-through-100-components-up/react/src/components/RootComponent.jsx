import React, { useState } from 'react';
import NestedComponent from './NestedComponent';

const RootComponent = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <NestedComponent depth={100} onButtonClick={handleButtonClick} />
    </div>
  );
};

export default RootComponent;
