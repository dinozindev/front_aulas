interface UseCardProps {
    nome: string;
    idade: number;
    cidade: string;
}

const UseCards = (props : UseCardProps) => {
  return (
    <>
        <h1>Componente UseCards</h1>
        <p><b>Nome: {props.nome}</b></p>
        <p><b>Idade: {props.idade}</b></p>
        <p><b>Cidade: {props.cidade}</b></p>
    </>
  )
}

export default UseCards