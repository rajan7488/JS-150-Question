// . Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.  

function rotateStringRight(str){
    let arr=str.split("");
    let n=0;
    let id=setInterval(()=>{
       
        let lastChar=arr.pop();
        arr.unshift(lastChar);
        console.log(arr.join(""));
        n++;
        if(n===str.length){
            clearInterval(id);
            console.log("stoped");
        }
    },1000);
}



rotateStringRight("w3resource");