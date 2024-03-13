/* 
  Description: Write a program that accepts one or more numbers
  as command-line arguments and prints the sum of those numbers 
  to the console  
*/

/*
 * For loop to iterate we start at index 2
 * Number(process.argv[i]) convert string to a number
 * sum += Number(process.argv[i]) makes the sum of all the numbers
 */

let sum = 0;

for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
