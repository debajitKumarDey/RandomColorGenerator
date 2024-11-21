const getColor = ()=>{
const randomNumber = Math.floor(Math.random()*16777215)
const randomColor = "#"+randomNumber.toString(16)
console.log(randomColor)
document.body.style.backgroundColor= randomColor;
document.getElementById('color-code').innerText=randomColor;
}
document.getElementById('Click').addEventListener(
    'click',
    getColor
)
getColor();