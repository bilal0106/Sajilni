// components/Counter.js
import React, { useState } from 'react';
import styles from './Counter.module.css'; // Assuming you have created the corresponding CSS module file

const Counter = () => {
  const [count, setCount] = useState(0);

  // Single return statement with the styled elements
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={() => setCount(count - 1)}>-</button>
      <span className={styles.value}>{count}</span>
      <button className={styles.button} onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;