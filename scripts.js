function drawNumber (){

const inpNumber = Math.ceil(document.querySelector(".inp1").value)
const inpNumber2 = Math.floor(document.querySelector(".inp2").value)
const drawn = document.querySelector(".sort")





const result = Math.floor(Math.random() * (inpNumber2 - inpNumber + 1)) + inpNumber;

drawn.innerHTML = result



if (inpNumber >= inpNumber2) {

    alert ("O 1º número não pode ser maior ou igual ao 2º número")
}

if (inpNumber < 0){

alert ("Os numeros não podem ser negativos")

}



}