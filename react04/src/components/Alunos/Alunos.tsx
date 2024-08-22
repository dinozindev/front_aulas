import { useState } from "react";

const Alunos = () => {
    const [nome, setNome] = useState<string>("")
    return (
        <>
            <h1>Componente ALUNOS</h1>
            <h1>Trabalhando com useState()</h1>
            <h2>Nome: {nome}</h2>
            <button onClick={() => setNome("Carlos")}>Clique</button>
        </>
    )
}

export default Alunos;