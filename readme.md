read RectProps readme file.

1. how would you describe the concept of "state"?
=> A way for react to remember saved values from within a componet. This is similar to declaring vriables within a componet, with a few added bonuses.

2. when would you want to use props instead of state ?
=> Anytime you want to pass data into a component so that component can determine what will get displayed on the screen.

3. when would you want to use state instead of props ?
=> Anytime you want a componet to determine to maintain some values from within the component. (And remember those values even when react re-renders the component).

4. what does immutable mean? are props immutable? is state immutable?

immutable -> cannot be change -> props.
mutable -> can be change -> state.

------------------------------------------------
const handleCountMinus = () => {
    setCount(count - 1); 
     <!-- we are using count to set value it is ok but not good practice passing callback fuction is best practice see below. -->
  };

  why should we pass callback function while setting value ?

  -> if you ever need the old value of state to help you determine the value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function will recieve the old value as its parameter, which you can then use to determine your new value of state. 
  
<!-- function add () {
  setcount(function(oldvalue) {
    return oldvalue + 1
  }
} 

using arrow function 
const add = () => {
  setCount(oldvalue => oldvalue + 1)  
} -->