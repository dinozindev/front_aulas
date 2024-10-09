'use client'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PageLogin = () => {

    const router = useRouter();

    const [error, setError] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if(usuario === 'admin' && senha === 'admin') {
            localStorage.setItem('logado', 'true');
            localStorage.setItem('erro', '0');
            router.push('/dashboard');
        } else {
            setError("Usuário e/ou senha incorretos.")  
        }
    }

    useEffect(() => {
        const erro = localStorage.getItem('erro');
        const logado = localStorage.getItem('logado');
        if (erro == '1' && logado == 'false') {
            setError("Página restrita.")
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