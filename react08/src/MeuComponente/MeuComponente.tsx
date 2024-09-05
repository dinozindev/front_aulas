interface Propriedades {
    texto?: string;
    idade?: number;
    alunos: string[];
}

const MeuComponente = (props: Propriedades) => {
    return (
        <>
            <h1>Componente MeuComponente</h1>
            {/* Se texto existe, exiba a div. Caso contrário, não exiba */}
            {props.texto && <div>Valor Recebido: {props.texto}</div>}
            {props.idade && <p>Idade: {props.idade}</p>}
            Alunos:
            {props.alunos[0]}, {props.alunos[1]}, {props.alunos[2]}
        </>
    )
}

export default MeuComponente;