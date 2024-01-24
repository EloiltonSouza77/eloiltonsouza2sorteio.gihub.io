function drawNumber (){

const inpNumber = Math.ceil(document.querySelector(".inp1").value)
const inpNumber2 = Math.floor(document.querySelector(".inp2").value)
const drawn = document.querySelector(".sort")



const result = Math.floor(Math.random() * (inpNumber2 - inpNumber + 1)) + inpNumber;

drawn.innerHTML = result

}