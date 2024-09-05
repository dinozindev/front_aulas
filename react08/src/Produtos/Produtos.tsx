import MeuComponente from "../MeuComponente/MeuComponente"

const Produtos = () => {
    const alunos = ['José', 'Carlos', 'Marcos']
    return (
        <>
            <div className="content">
                <h1>Produtos</h1>
                <MeuComponente alunos={alunos} />
            </div>
        </>
    )
}
export default Produtos