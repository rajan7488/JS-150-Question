// Write a JavaScript program to calculate days left until next Christmas.  

function daysUntilChristmas(){
    let today=new Date();
    let currentYear=today.getFullYear();
    let Christmas=new Date(currentYear,11,25);
    if(today>Christmas){
        Christmas.setFullYear(currentYear+1);
    }
    let diff=Christmas-today;
    let daysLeft=Math.ceil(diff/(1000*60*60*24));
    return daysLeft;
}







console.log(`🎄 Days left until Christmas: ${daysUntilChristmas()} days`);