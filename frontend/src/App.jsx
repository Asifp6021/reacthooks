// import React, { useState } from 'react';

// import './App.css';

// const App = () => {
// by this code i am trying to push new +1 of things in array i thinking that it will on screen but does'nt react is ingnoring it. why for that we have to use state.

//   const thingsArray = ['things 1', 'things 2'];
//   const things = thingsArray.map((thing) => {
//     return <h3 key={thing}>{thing}</h3>;
//   });

//   const handleChanges = () => {
//     const changes = `things ${thingsArray.length + 1}`;
//     thingsArray.push(changes);
//     console.log(thingsArray);
//   };

//   return (
//     <div className="container-btn">
//       <button className="btn" onClick={handleChanges}>
//
//         click me
//       </button>
//       {things}
//     </div>
//   );
// };

// using state

// const [things, setThings] = useState(['things 1', 'things 2']);

//   const handleChanges = () => {
//
//     setThings((prevState) => {
//   return [...prevState, `things ${prevState.length + 1}`]
// }
//   };

//   const mapOver = things.map((thing) => {
//     return <p key={thing}> {thing}</p>;
//   });

//   return (
//     <div className="container-btn">
//       <button className="btn" onClick={handleChanges}>
//         click me
//       </button>
//       {mapOvercd}
//     </div>
//   );
// };

// export default App;

// import React from 'react';

// import UsePrac1 from './components/UsePrac1';
// import {
//   TernoryOp,
//   Star,
//   Unchang,
//   ChildStarParent,
// } from './components/TernoryOp';

// const App = () => {
//   return (
//     <div>
//       <UsePrac1 />
//       <TernoryOp />

//       <Star />
//       <Unchang />
//       <ChildStarParent />
//     </div>
//   );
// };

// export default App;

// card important state
// import React from 'react';

// import { Card, CardWitProps, SecondMethod } from './components/Card';

// const App = () => {
//   return (
//     <div>
//       <Card darkMode={true} />
//       <CardWitProps />
//       <SecondMethod />
//     </div>
//   );
// };

// export default App;

// conditional rendring

import React from 'react';

import { JokesParent } from './conditionalRendring/JokesParent';
import { Message } from './conditionalRendring/jokes';

const App = () => {
  return (
    <div>
      <JokesParent />
      <Message />
    </div>
  );
};

export default App;
