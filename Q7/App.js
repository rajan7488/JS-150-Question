// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
function findSundays(){
    for(let year=2014;year<=2050;year++){
        let date =new Date(year,0,1);
        if(date.getDay()===0){
            console.log(`!st Janbuary is ${year} is sunday`);
        }
    }
}




findSundays();