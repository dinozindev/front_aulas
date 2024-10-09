'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductsPage = () => {
    const [produtos, setProdutos] = useState<any[]>([]);
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const res = await fetch('/api/products.json')
                const data = await res.json();
                setProdutos(data);
            }
            catch (error) {
                console.log("Erro ao buscar os produtos: ", error)
            }
        }
        fetchProdutos();
    }, [])
    return (
        <>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <Link href={`/produtos/${produto.id}`}>{produto.nome}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProductsPage;

