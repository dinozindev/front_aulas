"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit as E, FaTrash as X } from 'react-icons/fa';
import styled from "styled-components";

const DivLista = styled.div`
  width:70%;
  margin: auto;
  font-family: arial;
  h1{
    text-align:center;
  }
  a{
    text-decoration:none;
    padding: 10px 15px;
    margin-bottom? 20px;
    background: yellowgreen;
    color: white;
    display:inline-block;
  }
  table, tbody{
    width:100%;
    margin:auto;
  }
    thead tr{
      background:darkblue;
      color: white;
    }
    thead tr th{
      padding: 10px;
    }
    tbody tr:nth-child(2n+2){
      background:#ccc
    }
    tbody tr td a{
      background:none;
      margin-bottom:5px;
      color:blue;
    }
    tbody tr td button{
      color: #f00;
      background:none;
      border:none;
    }
    tfoot tr td{
      text-algin:center;
      background:#333;
      color: white;
    }
`

const ListaProdutos: React.FC = () => {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/appRWD/rest/produto/")
      .then((resp) => resp.json())
      .then((resp) => {
        setProdutos(resp);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])

  const handleDelete = (id: number) => {
    fetch("http://localhost:8080/appRWD/rest/produto/" + id, {
      method: 'DELETE'
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <DivLista>
        <h1>Lista de Produtos</h1>

        <Link href="/produto/novo"><button>Inserir Produto</button></Link>

        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {
              produtos.map((produto) => (
                <tr key={produto.codigo}>
                  <td>{produto.titulo}</td>
                  <td>{produto.preco}</td>
                  <td>{produto.quantidade}</td>
                  <td>
                    <Link href="/produto/[id]" as={`/produto/${produto.codigo}`}>
                      <button><E /></button>
                    </Link>
                    <button title="Excluir" onClick={() => handleDelete(produto.codigo)}><X /> </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>Produtos vindos do Server, via API</td>
            </tr>
          </tfoot>
        </table>
      </DivLista>
    </>
  )
}
export default ListaProdutos;