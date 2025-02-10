// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  
let inp=document.querySelector('input');
let btn=document.querySelector('button');
let div=document.querySelector('.parent');
let randomN=parseInt(Math.floor(Math.random()*10+1));
let h2=document.querySelector('h2');
console.log(randomN);
btn.addEventListener('click',(e)=>{
    let guess=parseInt(inp.value);
    
    if(isNaN(guess)){
        alert('pls enter a number!');
    }
    if(guess<1&&guess>10){
        alert('give the no in a range ');
    }
    
    if(guess===randomN){
        h2.innerHTML=`Good Work ${guess}`;
    }
    else{
        h2.innerHTML=`Not mathced ${guess}`;
    }
    inp.value='';

})