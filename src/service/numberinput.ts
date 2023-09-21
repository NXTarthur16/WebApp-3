import React from "react";

function NumberInput(){
    var inputNumber = (document.getElementById("inputNumero") as HTMLInputElement);
    var buttonNumber = Number(inputNumber.value)

    var inputBotao = (document.getElementById("inputNome") as HTMLInputElement);
    var buttonNome = inputBotao.value;

    var divNumber = (document.getElementById("inputNúmero-2") as HTMLDivElement);

    divNumber.innerHTML = `
    <div> 
    seu nome é ${buttonNome} e sua idade é ${buttonNumber}
    </div>
    `
}

export default NumberInput;