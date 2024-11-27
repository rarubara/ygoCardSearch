import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect hook runs after every render
  useEffect(() => {
    console.log(`Component rendered or updated! Current count is: ${count}`);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default ExampleComponent;
