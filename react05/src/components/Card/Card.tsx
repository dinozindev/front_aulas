import { useState } from "react"
import taco from "/img/taco.jpg"


const Card = () => {

    const [nome, setNome] = useState("");
    const [visivel, setVisivel] = useState(true);

  return (
    <>
    <div className="card">
        <button onClick={() => setVisivel(!visivel)}>{visivel ? 'Esconder' : 'Exibir'}</button>
        {
            visivel && <img src={taco}></img>
        }
        
    </div>
    <div className="card">
        <label>Digite seu nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
        </label>
        <span>Nome digitado: {nome}</span>
    </div>
    </>
  )
}

export default Card