import React from 'react';

import { jokesData } from './jokesData';
import { Jokes } from './jokes';

export const JokesParent = () => {
  const jokeMap = jokesData.map((data) => {
    return <Jokes set={data} key={data.id} />;
  });

  return <div>{jokeMap}</div>;
};
