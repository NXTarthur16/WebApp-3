import React, { useState } from "react";
import axios from 'axios';

import './CriacaoCard.css';

interface Props {
    text?: string;
    photo?: string;
}

// interface stateProps{
//     pokeImagem: string | null;
// }

var imageReturn: string;

async function Card(){
    const url: string = "https://th.bing.com/th/id/OIP.P6Gh8vmLMispUSWnobsSiQHaFc?pid=ImgDet&w=474&h=348&rs=1https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg";
    var [pokeImagem, setPokeImagem] = useState<string | null>(null);

    await axios.get(
        url,
        {
            headers: {
                // Accept: "application/json",
                responseType: "arraybuffer"
            }
        }
    ).then(
        async function (response){
            var pokeImagem = Buffer.from(response.data, 'binary').toString("base64")

            setPokeImagem(pokeImagem);
            
            return pokeImagem;
        }
    ).catch();
}

Card()

function CriacaoCard(props: Props){
    return (
        <div>
            <h1> 
                {props.text}
            </h1>
            <img 
                src={`data:image/jpeg;base64,${imageReturn}`}
                alt= "imagem" 
            />
            <img src={imageReturn} alt=""></img>
        </div>
    )
}

export default CriacaoCard;