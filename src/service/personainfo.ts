import React from 'react';
import '../componentes/switch/Switch.css'

let dadosExibidos = false; 

function personaInfo() {
    var inputNome = document.getElementById("insertNome") as HTMLInputElement;
    var botaoNome = inputNome.value;

    var inputAge = document.getElementById("insertAge") as HTMLInputElement;
    var botaoAge = Number(inputAge.value);

    var inputBairro = document.getElementById("insertBairro") as HTMLInputElement;
    var botaoBairro = inputBairro.value;

    var inputComplemento = document.getElementById("insertComplemento") as HTMLInputElement;
    var botaoComplemento = inputComplemento.value;

    var inputNumber = document.getElementById("insertNumber") as HTMLInputElement;
    var botaoNumber = Number(inputNumber.value);

    var divDados = document.getElementById("inputDados") as HTMLDivElement;

    inputNome.classList.remove("inputOutline");
    inputAge.classList.remove("inputOutline");
    inputBairro.classList.remove("inputOutline");
    inputComplemento.classList.remove("inputOutline");
    inputNumber.classList.remove("inputOutline");

// switch (true) {
//     case dadosExibidos:
//         divDados.innerHTML = "";
//         break;

//     case botaoNome === "" ||
//         botaoAge === 0 ||
//         botaoBairro === "" ||
//         botaoComplemento === "" ||
//         botaoNumber === 0:
//         alert("Por favor, preencha todos os campos.");

//         if (botaoNome === "") {
//             inputNome.classList.add("inputOutline");
//         }
//         if (botaoAge === 0) {
//             inputAge.classList.add("inputOutline");
//         }
//         if (botaoBairro === "") {
//             inputBairro.classList.add("inputOutline");
//         }
//         if (botaoComplemento === "") {
//             inputComplemento.classList.add("inputOutline");
//         }
//         if (botaoNumber === 0) {
//             inputNumber.classList.add("inputOutline");
//         }
//         break;

//     case isNaN(botaoAge) || isNaN(botaoNumber):
//         alert("Por favor, digite apenas números em idade e telefone");
//         break;

//     default:
//         divDados.innerHTML = `
//         <div class='Dados'>
//         Seu nome é ${botaoNome}, tem ${botaoAge} anos, mora na ${botaoBairro} com complemento ${botaoComplemento} e o número de telefone é ${botaoNumber}
//         </div>
//         `;
//         dadosExibidos = true;
//         break;
// }


    if (dadosExibidos) {
        divDados.innerHTML = "";
    }

    if (botaoNome === "" || 
        botaoAge === 0 || 
        botaoBairro === "" || 
        botaoComplemento === "" || 
        botaoNumber === 0) {

        alert("Por favor, preencha todos os campos.");

        if (botaoNome === "") {
            inputNome.classList.add("inputOutline");
        }
        if (botaoAge === 0) {
            inputAge.classList.add("inputOutline");
        }
        if (botaoBairro === "") {
            inputBairro.classList.add("inputOutline");
        }
        if (botaoComplemento === "") {
            inputComplemento.classList.add("inputOutline");
        }
        if (botaoNumber === 0) {
            inputNumber.classList.add("inputOutline");
        }
    } else if (isNaN(botaoAge) || isNaN(botaoNumber)) {
        alert("Por favor, digite apenas números em idade e telefone");
    } else {
        
        divDados.innerHTML = `
        <div class='Dados'>
        Seu nome é ${botaoNome}, tem ${botaoAge} anos, mora na ${botaoBairro} com complemento ${botaoComplemento} e o número de telefone é ${botaoNumber}
        </div>
        `;
        
        dadosExibidos = true;
    }
}

export default personaInfo;