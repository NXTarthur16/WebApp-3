import React from 'react'
import './Switch.css'

function NumberGuesser(){
    var inputTag = (document.getElementById("inputNumber") as HTMLInputElement);
    var inputValue = Number(inputTag.value)

    if(isNaN(inputValue)){
        alert("Dibuttogite apenas números");
    }
    else if(inputValue > 15){
        alert("seu número é maior que 15");
    }else if(inputValue < 15){
        alert("seu número é menor que 15");
    }else{
        alert("seu número é igual a 15");
    }

    // switch (inputValue){
    //     case 18:
    //         alert("vim pelo switch case, número 18");
    //         break;
    //     case 19:
    //         alert("vim pelo switch case, número 19");
    //         break;
    //     default:
    //         break;
    // }

}

function TextInput(){
    var inputTexto = (document.getElementById("inputText") as HTMLInputElement);
    var buttonText = inputTexto.value.toString().toLowerCase();

    var divTag = (document.getElementById("novaMensagem") as HTMLDivElement);

    divTag.innerHTML = `
        <div class='novaClasse'>
            O que você escreveu foi ${buttonText}
        </div>
    `;

    buttonText === "senac" ? alert("Você está no Senac") : alert("Você não está no Senac");
}

function NumberInput(){
    var inputNumber = (document.getElementById("inputNumero") as HTMLInputElement);
    var buttonNumber = Number(inputNumber.value)

    var divNumber = (document.getElementById("inputNúmero-2") as HTMLDivElement);

    divNumber.innerHTML = `
    <div class='novaClasse'>
    Sua idade é ${buttonNumber}
    </div>
    `
}

function CardNew(){
    return(
        <>
        <div className='button'>
            <input type="text" id="inputNumber"  /> {/* number é usado para digitar apenas número se quiser usar outro usar text */} 
            <button onClick={NumberGuesser}>Enviar</button>
        </div>
        <br/>
        <div className='button-2'>
            <input type="text" id="inputText" placeholder='aqui vai o nome' />
            <button onClick={TextInput}>Enviar</button>
        </div>
        <div id='novaMensagem'></div>
        <br/>
        <div className='button-2'>
            <input type="number" id="inputNumero" />
            <button onClick={NumberInput}>Enviar</button>
        </div>
        <div id='inputNúmero-2'></div>
        </>
    )
}

export default CardNew;