'use client'

import cachorro from "../../public/img/cachorro-main.png"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <> 
    <main className="main__page">
      <div>
        <h1>Tudo que seu Pet precisa!</h1>
        <p>Tosas, Banhos, Estádias e muito mais!</p>
        <Link className="home__link" href='/lista-servicos'>Serviços</Link>
      </div>
      <Image src={cachorro} alt="cachorro" width={500} height={700}/>
    </main>
    </>
  );
}
