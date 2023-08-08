import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);  // State variable to track the count
  const countRef = useRef(0);  // Ref to hold the previous count value
  const increaseButton = useRef<HTMLButtonElement>(null);  // Ref for the increase button element
  const decreaseButton = useRef<HTMLButtonElement>(null);  // Ref for the decrease button element

  useEffect(() => {
    countRef.current = count;  // Update the ref value with the current count
    document.title = count.toString();  // Update the document title with the current count
  }, [count]);

  const increment = () => {
    setCount(count + 1);  // Increase the count value by 1
    increaseButton.current!.style.backgroundColor = "red";  // Change the background color of the increase button
    decreaseButton.current!.style.backgroundColor = "lightblue";  // Change the background color of the decrease button
  };

  const decrement = () => {
    setCount(count - 1);  // Decrease the count value by 1
    increaseButton.current!.style.backgroundColor = "lightblue";  // Change the background color of the increase button
    decreaseButton.current!.style.backgroundColor = "red";  // Change the background color of the decrease button
  };

  const reset = () => {
    setCount(0);  // Reset the count value to 0
    increaseButton.current!.style.backgroundColor = "hsl(0, 0%, 100%)";  // Reset the background color of the increase button
    decreaseButton.current!.style.backgroundColor = "hsl(0, 0%, 100%)";  // Reset the background color of the decrease button
  };

  return (
    <div className="app">
      <h1>Counter App</h1>
      <div className="counter">
{
        //button for decreasing count
}
        <button ref={increaseButton} onClick={decrement}>-</button>
        <span>{count}</span>
{
        //button for increasing count
}
        <button ref={decreaseButton} onClick={increment}>+</button>
      </div>
      <p>Previous count: {countRef.current}</p>
{
        //button for reseting count
}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;