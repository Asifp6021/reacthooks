const date = new Date();
const hours = date.getHours();

const greeting = (name) => {
  let timeOfDay;
  if (hours >= 4 && hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternnon';
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = 'evening';
  } else {
    timeOfDay = 'night';
  }
  return `good ${timeOfDay}, ${name}`;
};

console.log(greeting('bob'));