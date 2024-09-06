import { useState } from "react";

interface ContadorProps {
    valorInicial : number;
}

// outra forma de indicar as props
// const Contador = (props: ContadorProps)
const Contador : React.FC<ContadorProps> = ( { valorInicial } ) => {

    const[contador, setContador] = useState(valorInicial);

    const somar = () => {
        setContador(contador + 1)
    }

    const subtrair = () => {
        setContador(contador - 1)
        
    }

    const reiniciar = () => {
        setContador(valorInicial)
    }

  return (
    <>
        <h1>Contador</h1>
        <p><b>Contador: </b>{contador}</p>
        <button onClick={somar}>Somar</button>
        {/* Se o contador for maior que 0, fica ativo, caso contrario fica desabilitado */}
        {contador > 0 ? <button onClick={subtrair}>Subtrair</button> : <button onClick={subtrair} disabled>Subtrair</button>}
        <button onClick={reiniciar}>Reiniciar</button>
    </>
  )
}

export default Contador