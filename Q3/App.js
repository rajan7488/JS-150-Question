// Write a JavaScript program to get the current date.  

let currentDate = new Date();
let date = currentDate.getDate().toString().padStart(2, "0");
let month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); 
let year = currentDate.getFullYear().toString();

console.log(`Current date is ${date}/${month}/${year}`);
