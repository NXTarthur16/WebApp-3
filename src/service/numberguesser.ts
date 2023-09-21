import React from "react";

function NumberGuesser(){
    var inputTag = (document.getElementById("inputNumber") as HTMLInputElement);
    var inputValue = Number(inputTag.value)

    if(isNaN(inputValue)){
        alert("Digite apenas números");
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



export default NumberGuesser;