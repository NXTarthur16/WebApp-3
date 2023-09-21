import React from "react";

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

export default TextInput;