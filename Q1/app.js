// Write a JavaScript program to display the current day and time in the following format.

function getTimeAndDay(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date=new Date();
    const day=days[date.getDay()];
    let hour=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    const ampm=hour>=12?"Pm":"Am";
    hour=hour>12?hour%12: 12;
    const formateMinutes=minutes<10?`0${minutes}`:minutes;
    const formateSeconds=seconds<10?`0{seconds}`:seconds;

    console.log(`Today is : ${day}`);
    console.log(`Current Time is : ${hour} ${ampm} : ${formateMinutes} : ${formateSeconds}`)
}

getTimeAndDay();