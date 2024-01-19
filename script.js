const displayText=document.querySelector(".text");
const wrapper=document.querySelector(".wrapper");
const heading=document.querySelector(".heading");
const footer=document.querySelector(".footer1");
const tableBody=document.querySelector(".table-body");
const display=document.querySelector(".display");

function allClear(){
    displayText.innerHTML='';

}
function insert(num){
    if(displayText.innerHTML.length>11){
       return;
    }
    displayText.innerHTML=displayText.innerHTML+num;
}
function back()
{
    let expression=displayText.innerHTML;
    displayText.innerHTML=expression.substring(0,expression.length-1);
}
function equal(){
    
let result=displayText.innerHTML;
for(let i=0;i<result.length;i++)
{
       result=result.replace('^','**');
}
console.log(result);
    result=eval(result);
   result=result.toString();
    if(result.length>12)
    {
        result=result.substring(0,12);
        console.log(result);
    }
    displayText.innerHTML=result;
}

function fta()
{
wrapper.style.backgroundImage="url('./images/cal_background.avif')";
heading.style.color='#e5e5e5';
footer.style.color='#e5e5e5';
tableBody.style.backgroundColor="#18202a";
tableBody.style.color="#e5e5e5";
display.style.backgroundColor='#36474f';
display.style.color='#e5e5e5';
}
function ftb()
{
wrapper.style.backgroundImage="url('./images/cal-bh-white.jpg')";
heading.style.color='black';
footer.style.color='black';
tableBody.style.backgroundColor="#f4f4f4";
tableBody.style.color="black";
display.style.backgroundColor='#fefefe';
display.style.color='black';
}