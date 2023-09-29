//* Q1: Evaluate each of the following Javascript expressions and show the value
//* 1. ‐9*3                              --> 27
//* 2. “value is “ + 50                  --> value is 50
//* 3. 17 % 5                            --> 2
//* 4. 5 % 17                            --> 5
//* 5. 5/10                              --> 0.5
//* 6. (4 == 4)                          --> true
//* 7. (4 != 5)                          --> true
//* 8. (7 <= 8)                          --> true
//* 9. Math.ceil(x) ‐ Math.floor(x)      --> 1

////////////////////////////////////////////////////////////////////////!

//* Q2 : Read a number (using prompt) and display it using alert

// const number = parseFloat(prompt("Enter a number:"));
// if (typeof number === "number") {
//   alert(`Your number is ${number}`);
// }
// console.log(typeof number);

////////////////////////////////////////////////////////////////////////!

//* Q3 : Read in two numbers and display them in ascending order.

// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));

// if (num1 > num2) {
//   alert(`${num1}\n${num2}`);
// } else if (num1 < num2) {
//   alert(`${num2}\n${num1}`);
// } else {
//   alert(`${num1} ${num2}`);
// }

////////////////////////////////////////////////////////////////////////!

//* Q4: Read in two numbers and display the larger

// const number1 = parseFloat(prompt("Enter the first number:"));
// const number2 = parseFloat(prompt("Enter the second number:"));
// let max = number1;

// if (number1 < number2) {
//   max = number2;
//   alert(`${max}`);
// } else if (number1 === number2) {
//   alert(`${max}`);
// } else {
//   alert(`${max}`);
// }

////////////////////////////////////////////////////////////////////////!

//* Q5: Read two numbers and display their sum.  What problem did you encounter?

//? If you try to sum numbers using the prompt() popup box it will concatenate the numbers (e.g. 5 + 5 = 55), because the prompt() method can only take a string value from the user, so we need to convert it to the data type "number".

// const numbe1 = parseFloat(prompt("Enter the first number:"));
// const numbe2 = parseFloat(prompt("Enter the second number:"));
// const sum = numbe1 + numbe2;

// alert(`${numbe1} + ${numbe2} = ${sum}`);

////////////////////////////////////////////////////////////////////////!

//* Q6: If you have a “num” variable,  Your task is to print:

//* - ONE, if it is equal to 1 .
//* - TWO, if it is equal to 2.
//* - THREE, if it is equal to 3 .
//* - FOUR, if it is equal to 4.
//* - FIVE, if it is equal to 5.
//* - SIX, if it is equal to 6 .
//* - SEVEN, if it is equal to 7.
//* - EIGHT, if it is equal to 8.
//* - NINE, if it is equal to 9.
//* - PLEASE TRY AGAIN, if there is none of the above.

// const num = 5;

// switch (num) {
//   case 1:
//     if (num === 1) {
//       console.log("ONE");
//     }
//     break;
//   case 2:
//     if (num === 2) {
//       console.log("TWO");
//     }
//     break;
//   case 3:
//     if (num === 3) {
//       console.log("THREE");
//     }
//     break;
//   case 4:
//     if (num === 4) {
//       console.log("FOUR");
//     }
//     break;
//   case 5:
//     if (num === 5) {
//       console.log("FIVE");
//     }
//     break;
//   case 6:
//     if (num === 6) {
//       console.log("SIX");
//     }
//     break;
//   case 7:
//     if (num === 7) {
//       console.log("SEVEN");
//     }
//     break;
//   case 8:
//     if (num === 8) {
//       console.log("EIGHT");
//     }
//     break;
//   case 9:
//     if (num === 9) {
//       console.log("NINE");
//     }
//     break;
//   default:
//     console.log("PLEASE TRY AGAIN");
// }
