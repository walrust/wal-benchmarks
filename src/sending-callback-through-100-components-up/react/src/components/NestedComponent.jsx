import React from 'react';

export default function NestedComponent({ depth, onButtonClick }) {
  const handleClick = () => {
    onButtonClick();
  };

  if (depth != 0) {
    return (
      <div>
        <NestedComponent depth={depth - 1} onButtonClick={onButtonClick} />
      </div>
    );
  } else {
    return <button id="button" onClick={handleClick}>Click me</button>;
  }
};
