ternary operator
 <!-- const answer = isgoingOut ? 'yes' : 'no';  -->

const answer = isgoingOut === true ? 'yes' : 'no';  <- this is same meaning of above line

ternory operator allows us to write if else condition in single statement (if there is having only one or two condition)

const isgoingout = true;
let answer;
 if (isgoingOut === true) {
   answer = 'yes';
 } else {
   answer = 'no';
 }

if there is more then one or two use normaal is else statement not ternary.

note -> javascript curly braces allows us to put expression in jsx not only variable.
co you will most the time see tornary operator inside jsx.


<!-- condition rendring  -->

&& And <-

The AND operator compares two expressions. If the first evaluates as “truthy”, the statement will return the value of the second expression. If the first evaluates as “falsy”, the statement will return the value of the first expression.

When only involving boolean values (either true or false), it returns true if only if both expressions are true. If one or both expressions are false, the entire statement will return false.

true && true //returns  the second value, true
true && false //returns the second value, false
false && false //returns the first value, false
123 && 'abc' // returns the second value, 'abc'
'abc' && null //returns the second value, null
undefined && 'abc' //returns the first value, undefined
0 && false //returns the first value, 0

<!-- Imp -> if you have element either you want to show or not on the screen then && operator is very useful for this. and great --> 

<!-- and ternory operater great if you want to select two of one want to show on screen  -->

<!-- we can also use nested ternory if there is more condition but it is not good thing in this situation we should use normal if else or switch condition. -->

<!-- we && and ternory can use outsinde and directly inside in jsx but we cant use if else and switch in jsx ony outside we can use  -->

ex. userlist <- true

{userlist && second expression} if true it will excute second expression and rennder on screen

if i using ! <- this make it false
! <- this operator to do oposite of what you want

{!userlist && second expression} it will not render.

and also we can directly use userlist === true and userlist === false

! <- ut this is shortcut to do