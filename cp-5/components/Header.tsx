'use client'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
    <header>
        <div className="logo__div">
            <Image src="/img/logo.png" alt='logo' width={50} height={50}/>
            <h1>PetShow</h1>
        </div>
        <ul className="header__ul">
            <li>
            <Link href="/ServicosPage">Lista de Serviços</Link>  
            </li>
            <li>
            <Link href="/CadastroServicoPage">Cadastro de Serviços</Link>
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