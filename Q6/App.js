// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

function isLeapYear(year){
    if((year%4===0&&year%100!==0)||(year%400===0)){
        return `${year} is leap year`;
    }
    else{
        return `${year} is not a leap year`;
    }
}


console.log(isLeapYear(1900));