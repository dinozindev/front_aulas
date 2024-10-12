'use client'
import { useEffect, useState } from "react";


const DetalhesUsuarioPage = () => {
    const [usuario, setUsuario] = useState<any>(null);

    useEffect(() => {
      const usuarioCadastrado = localStorage.getItem('usuario');
      const usuarioObtido = usuarioCadastrado ? JSON.parse(usuarioCadastrado) : null;
      setUsuario(usuarioObtido);
    }, [])

    return (
        <>
        {usuario ? 
        <main className="main__details">
            <div className="card__user">
                <h1>Detalhes do Usuário e Pet</h1>
                <p>Nome: {usuario.nome}</p>
                <p>Senha: {usuario.senha}</p>
                <p>Telefone do Proprietário: {usuario.proprietario_tel}</p>
                <p>Tipo do Pet: {usuario.tipo_pet}</p> 
                <p>Nome do Pet: {usuario.nome_pet}</p>
                <p>Idade do Pet: {usuario.idade_pet} ano(s)</p>
                <p>Raça do Pet: {usuario.raca_pet}</p>
            </div>
            <div className="card__user">
                <h1>Serviço agendado</h1>
            </div>
        </main>
         :  <p>Carregando...</p>
        }
    </>
    )
}

export default DetalhesUsuarioPage;