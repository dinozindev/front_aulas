import Link from "next/link";

const AcessoNegadoPage = () => {
    return (
        <>
        <main className="main__alternative">
            <h1>Acesso Negado</h1>
            <p>Cadastre-se primeiro para poder agendar um serviço!</p>
            <div className="denied__div">
                <Link href="/">Voltar a Home</Link>
                <Link href="/cadastro-usuario">Cadastrar-se</Link>
            </div>
        </main>
        </>
    )
}

export default AcessoNegadoPage;