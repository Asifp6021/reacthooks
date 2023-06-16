import React, { useState } from 'react';

import '../styles/usepra1.css';

const UsePrac1 = () => {
  const [imp, setImp] = useState('no');
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setImp('yes');
  };

  // count
  const minus = () => {
    setCount(count - 1); // we are using count to set value it is ok but not good practice passing callback fuction is best practice see below plus and read readme file for more info.
  };
  const plus = () => {
    setCount((prevCount) => prevCount + 1); //this is best practice
  };

  return (
    <>
      <div className="main">
        <h3>is state important to know</h3>
        <button className="btn" onClick={handleChange}>
          {imp}
        </button>
      </div>

      {/* couner  */}
      <div className="count-container">
        <button className="counter" onClick={minus}>
          -
        </button>
        <h1 className="count">{count}</h1>
        <button className="counter" onClick={plus}>
          +
        </button>
      </div>
    </>
  );
};

export default UsePrac1;
