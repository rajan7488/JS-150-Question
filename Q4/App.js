// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  
function AreaOfTrangle(a,b,c){
    let s=(a+b+c)/2;
    let area =Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}


console.log(AreaOfTrangle(5,6,7).toFixed(2));