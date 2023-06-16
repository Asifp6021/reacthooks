import React, { useState } from 'react';

import { jokesData } from './jokesData';

export const Jokes = (props) => {
  const [show, setShow] = useState(true);

  const handle = () => {
    setShow((preshow) => !preshow);
  };

  console.log(show);
  return (
    <div>
      {props.set.joke && <h1>{props.set.joke}</h1>}
      {show && <h4>{props.set.punch}</h4>}
      <button onClick={handle}>{show ? 'hide' : 'show'} Headlines </button>
      <hr />
    </div>
  );
};

// i am here using ! <- making opposite of true {!props.set.joke && <h1>{props.set.joke}</h1>} it's value false so it will not render read more note.md file

// more example

export const Message = () => {
  const [msg, setMsg] = useState(['1']);
  return (
    // <div>
    //   <h1>
    //     {msg.length
    // a? `you have ${msg.length} unread messages`
    //       : 'you dont have  message'}
    //     .
    //   </h1>
    // </div>

    <div>
      {msg.length === 0 ? (
        <h1>you are all cought up</h1>
      ) : (
        <h1>
          you have {msg.length} {msg.length > 1 ? 'messages' : 'message'}
        </h1>
      )}
    </div>
  );
};
