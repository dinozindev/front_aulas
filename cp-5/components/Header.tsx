'use client'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
            <Link href="/cadastro-servico">Cadastro de Serviços</Link>
            </li>
            <li>
            <Link href="/">Detalhes do Pet</Link>  
            </li>
        </ul>
    </header>
    </>
  )
}

export default Header