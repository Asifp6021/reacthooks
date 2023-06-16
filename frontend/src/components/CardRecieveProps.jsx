import React from 'react';
import { useState } from 'react';

import '../styles/card.css';

export const CardRecieveProps = (props) => {
  const [changeColorOfBox, setChageColorOfBox] = useState(props.change.on);

  const changeIt = () => {
    setChageColorOfBox((prevOn) => !prevOn);
  };

  const style = {
    background: changeColorOfBox ? 'white' : 'black',
  };
  return <div className="box" style={style} onClick={changeIt}></div>;
};

export const SecondMethodChild = (props) => {
  const style = {
    background: props.set.on ? 'white' : 'black',
  };
  return (
    <div
      className="box"
      style={style}
      // onClick={() => props.handleClick(props.id)}
      onClick={props.handleClick}
    ></div>
  );
};

// i dont want to make another usestate in child to update It own state.

// so i am passing id of the each box in toggle function and i am passing it to child handclick(props.id) but is is not going to work because event has it's oven logic so we cant pass it directly but we can do like this Onclick={() => props.handlclick(props.id)} by giving callback fuction

// but child componet dont have access of id or key={secondTime.id} but we can do like this passing new props as id id={secondtime.id}
