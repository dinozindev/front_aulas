import { useState } from "react"

const State = () => {

    const[estilo, setEstilo] = useState('')

  return (
    <>
        <div className="content">
            <h1>Componente: State</h1>  
            <h2>Escolha o estilo do texto: </h2>
            <br />
            <button onClick={() => setEstilo('bold')}>Negrito</button>
            <button onClick={() => setEstilo('italic')}>Itálico</button>
            <button onClick={() => setEstilo('underline')}>Sublinhado</button>
            <br /><br />
            <p style={{fontWeight: estilo === 'bold' ? 'bold' : 'normal', fontStyle: estilo === 'italic' ? 'italic' : 'normal', textDecoration: estilo === 'underline' ? 'underline': 'normal'}}>O estilo deste texto deverá ser modificado.</p>
        </div>
    </>
  )
}

export default State