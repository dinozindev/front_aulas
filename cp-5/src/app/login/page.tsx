'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PageLogin = () => {

    const router = useRouter();

    const [error, setError] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const [usuarioCadastrado, setUsuarioCadastrado] = useState('');
    const [senhaCadastrada, setSenhaCadastrada] = useState('');

    const handleLogin = () => {
        if(usuario === usuarioCadastrado && senha === senhaCadastrada) {
            sessionStorage.setItem('logado', 'true');
            router.push('/');

            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } else {
            setError("Usuário e/ou senha incorretos.")  
        }
    }

    useEffect(() => {
        const cadastro = localStorage.getItem('usuario')
        const usuarioObtido = cadastro ? JSON.parse(cadastro) : null;
        if (usuarioObtido) {
            setUsuarioCadastrado(usuarioObtido.nome)
            setSenhaCadastrada(usuarioObtido.senha)
        } 
    }, [])

    return (
        <>
            <label>Usuário:
                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            </label>
            <br />
            <label>Senha:
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
        {error && <p>{error}</p>}
        </>
    )
}

export default PageLogin;