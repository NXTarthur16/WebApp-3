import React from 'react'
import './Switch.css';
import NumberGuesser from '../../service/numberguesser';
import TextInput from '../../service/textinput';
import NumberInput from '../../service/numberinput';
import personaInfo from '../../service/personainfo';



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
            <input type="text" id="inputNome" placeholder='aqui vai seu nome' />
            <input type="number" id="inputNumero" placeholder='aqui vai sua idade'/>
            <button onClick={NumberInput}>Enviar</button>
        </div>
        <div id='inputNúmero-2'></div>
       
        {/*persona info*/}
        <br/>
        <br/>
        <div className='persona'>
            <input type="text" id="insertNome" placeholder='aqui vai seu nome' />
            <input type="text" id="insertAge" placeholder='aqui vai sua idade' />
            <input type="text" id="insertBairro" placeholder='aqui vai seu bairro' />
            <input type="text" id="insertComplemento" placeholder='aqui vai o complemento' />
            <input type="text" id="insertNumber" placeholder='aqui vai seu telefone;' />
            <button onClick={personaInfo}>Enviar</button>
        </div>
        <div id='inputDados'></div>

        </>
    )
}

export default CardNew;