import React from 'react';

import '../App.css';

// accepting props doing destructure
const ChildStar = ({ update, handle }) => {
  return (
    <div>
      <img
        src={
          update.isFavorite
            ? '../../public/filledstar.png'
            : '../../public/unfillesStar.png'
        }
        alt="star"
        className="img-star"
        onClick={handle}
      />
    </div>
  );
};

export default ChildStar;
