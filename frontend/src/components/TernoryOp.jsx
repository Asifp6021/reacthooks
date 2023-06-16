// import react from 'react';

// import '../styles/usepra1.css';

// const TernoryOp = () => {
//   const isgoingOut = true;

// const answer = isgoingOut ? 'yes' : 'no'; //ternory operator redd note.md file for more

// let answer;
// if (isgoingOut === true) {
//   answer = 'yes';
// } else {
//   answer = 'no';
// }
// return (
//   <div className="main">
//     <h3>is state important to know</h3>
//     <button className="btn">{isgoingOut ? 'yes' : 'no'}</button>
// {
/* when you pass ternory condition directly in jsx we don;t have to assign with variable */
// }
//     </div>
//   );
// };

// export default TernoryOp;

// ternary with state
// it ! <- does opposite of the thing if true do opposite false

// import React, { useState } from 'react';

// import '../styles/usepra1.css';

// const TernoryOp = () => {
//   const [isGoingOut, setIsGoingOut] = useState(true);

//   const changeMind = () => {
//     setIsGoingOut((prevState) => !prevState);
//   };
//   return (
//     <div className="main">
//       <h3>is state important to know</h3>
//       <button className="btn" onClick={changeMind}>
//         {isGoingOut ? 'yes' : 'no'}
//       </button>
//     </div>
//   );
// };

// export default TernoryOp;

// doing practice again
import React, { useState } from 'react';
import ChildStar from './ChildStar';

import '../App.css';

export const TernoryOp = () => {
  const [things, setThings] = useState(['things 1', 'things 2']);

  const handleChanges = () => {
    setThings((prevState) => {
      return [...prevState, `things ${prevState.length + 1}`];
    });
  };

  const mapOverThings = things.map((thing) => {
    return <h3 key={thing}>{thing}</h3>;
  });

  return (
    <div className="container-btn">
      <button onClick={handleChanges}> click me </button>
      {mapOverThings}
    </div>
  );
};

export const Star = () => {
  const [star, setStar] = useState({
    firstname: 'jhon',
    lastname: 'doe',
    phone: '98567373',
    emaile: 'jhon@gmail.com',
    isFavorite: true,
  });

  // let handler;
  // if (star.isFavorite) {
  //   handler = '../../public/filledstar.png';
  // } else {
  //   handler = '../../public/unfillesStar.png';
  // }

  // we can use above if but above if have only teo condition so use ternory
  // const handler = star.isFavorite ? '../../public/filledstar.png' : '../../public/unfillesStar.png';

  return (
    <div className="star-div">
      <div className="star-avtar"></div>
      <img
        src={
          star.isFavorite
            ? '../../public/filledstar.png'
            : '../../public/unfillesStar.png'
        }
        //ternory logic direct in jsx
        alt="star"
        className="img-star"
      ></img>
      <div className="name">
        <p>{star.firstname}</p>
        <p>{star.lastname}</p>
      </div>
      <p className="last">{star.phone}</p>
      <p className="last-1">{star.emaile}</p>
    </div>
  );
};

// task to change isfavorite value using setStar without loosing previous value
export const Unchang = () => {
  const [star, setStar] = useState({
    firstname: 'jhon',
    lastname: 'doe',
    phone: '98567373',
    emaile: 'jhon@gmail.com',
    isFavorite: true,
  });

  const handler = star.isFavorite
    ? '../../public/filledstar.png'
    : '../../public/unfillesStar.png';

  const handle = () => {
    setStar((prevState) => {
      return {
        ...prevState,
        // ...prevState if you dont take oldstate with using spread operator it will erase all remaining state and only will show isFavorite new
        isFavorite: !prevState.isFavorite,
      };
    });
  };

  return (
    <div className="star-div">
      <div className="star-avtar"></div>
      <img
        src={handler}
        //ternory logic direct in jsx
        alt="star"
        className="img-star"
        onClick={handle}
      ></img>
      <div className="name">
        <p>{star.firstname}</p>
        <p>{star.lastname}</p>
      </div>
      <p className="last">{star.phone}</p>
      <p className="last-1">{star.emaile}</p>
    </div>
  );
};

// new task passing state variable as propsas update to child component to update isFavorite image for that i have created ChildStar componet

export const ChildStarParent = () => {
  const [star, setStar] = useState({
    firstname: 'jhon',
    lastname: 'doe',
    phone: '98567373',
    emaile: 'jhon@gmail.com',
    isFavorite: true,
  });

  const handle = () => {
    setStar((prevState) => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite,
      };
    });
  };
  return (
    <div className="star-div">
      <div className="star-avtar"></div>
      <ChildStar update={star} handle={handle} />
      <div className="name">
        <p>{star.firstname}</p>
        <p>{star.lastname}</p>
      </div>
      <p className="last">{star.phone}</p>
      <p className="last-1">{star.emaile}</p>
    </div>
  );
};
