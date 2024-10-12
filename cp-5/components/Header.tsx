'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [logadoNoSite, setLogadoNoSite] = useState<any>();

  const update = () => {
    window.location.reload()
  }

  useEffect(() => {
    const logado = localStorage.getItem('logado');
    setLogadoNoSite(logado);
  }, [])

  return (
    <>
    <header>
        <Link href="/"><div className="logo__div">
            <Image src="/img/logo.png" alt='logo' width={50} height={50}/>
            <h1>PetShow</h1>
        </div></Link>
        <ul className="header__ul">
            <li>
            <Link href="/lista-servicos">Lista de Serviços</Link>  
            </li>
            <li>
            <Link href="/cadastro-servico">Agendar um Serviço</Link>
            </li>
            <li>
            <Link href="/detalhes-usuario">Detalhes do Usuário/Pet</Link>  
            </li>
            {logadoNoSite == "true" ? <li>
            <Link href="/logout" onClick={update}>Logout</Link>
            </li> : <li>
            <Link href="/cadastro-usuario">Cadastrar-se</Link>
            </li>}
            
        </ul>
    </header>
    </>
  )
}

export default Header