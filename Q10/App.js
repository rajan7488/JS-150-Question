let btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
let p=document.querySelector('p');

btn1.addEventListener('click',()=>{
    let num1=document.querySelector('.inp1').value;
    let num2=document.querySelector('.inp2').value;
    let ans=parseInt(num1)*parseInt(num2);
    console.log(ans)
    console.log('click')
    p.innerText=ans;
})

btn2.addEventListener('click',()=>{
    let num1=document.querySelector('.inp1').value;
    let num2=document.querySelector('.inp2').value;
    let ans=parseInt(num1)/parseInt(num2);
    p.innerText=ans;

})