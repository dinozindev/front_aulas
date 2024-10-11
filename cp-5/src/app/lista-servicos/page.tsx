'use client'
import { useEffect, useState } from "react";

const ServicosPage = () => {
  const [listaServicos, setListaServicos] = useState<any[]>([]);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const res = await fetch('/api/servicos.json'); 
                const data = await res.json();
                setListaServicos(data)
                console.log(data)
            } catch (error) {
                console.log("Erro ao buscar os serviços: ", error);
            }
        }
        fetchServicos();
    }, []);


  return (
    <>
     {listaServicos.map(servico => (
      <div>
        <h1>Serviço: {servico.nome}</h1>
        <p>Descrição: {servico.descricao}</p>
        <p>Preço: R${servico.preco}</p>
        <p>Tipo de Pet: {servico.tipo_pet}</p>
        <p>Nome do Pet: {servico.nome_pet}</p>
        <p>Nome do Proprietário: {servico.proprietario_pet}</p>
        <p>Telefone do Proprietário: {servico.proprietario_tel}</p>
      </div>
    ))}
    </>
  )
}

export default ServicosPage