import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// [id] indica que estamos carregando de forma dinamica o conteudo, ou seja, que dependendo do produto que clicarmos, um produto de id X será exibido.

const ProdutosPage = () => {

    const router = useRouter();
    const { id } = router.query;

    const [produto, setProduto] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/products.json');
                const data = await res.json();
                const procuraProd = data.find((produto : { id : number}) => 
                    produto.id == parseInt(id as string));
                setProduto(procuraProd);
            } catch (error){
                console.error('Erro ao buscar o produto: ', error);
            }
        }
        fetchData();
    }, [id])

    if (!produto) {
        return (
            <div>Produto não encontrado!!</div>
        ) 
    } 

    return (
        <>
            <h1>Produto: {produto.nome}</h1>
            <p>Preço: {produto.preco}</p>
            <Image src={produto.imagem} alt={produto.nome}/>
        </>
    )
}

export default ProdutosPage;