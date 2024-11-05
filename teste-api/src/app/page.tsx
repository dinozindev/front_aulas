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
    tfoot {
      width: 100%;
    }
    tfoot tr td{
      text-align:center;
      background:#333;
      color: white;
      width: 100%;
    }
`

const ListaVeiculos: React.FC = () => {

  const [veiculos, setVeiculos] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/sprint4-java/rest/veiculo")
      .then((resp) => resp.json())
      .then((resp) => {
        setVeiculos(resp);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])

  const handleDelete = (placa: string) => {
    fetch("http://localhost:8080/sprint4-java/rest/veiculo/" + placa, {
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
        <h1>Lista de Veículos</h1>

        <Link href="/veiculo/novo"><button>Inserir Veículo</button></Link>

        <table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Quilometragem</th>
              <th>CPF Proprietário</th>
            </tr>
          </thead>
          <tbody>
            {
              veiculos.map((veiculo) => (
                <tr key={veiculo.placa}>
                  <td>{veiculo.placa}</td>
                  <td>{veiculo.marca}</td>
                  <td>{veiculo.modelo}</td>
                  <td>{veiculo.ano}</td>
                  <td>{veiculo.quilometragem}</td>
                  <td>{veiculo.usuario.cpfUsuario}</td>
                  <td>
                    <Link href="/veiculo/[placa]" as={`/veiculo/${veiculo.placa}`}>
                      <button><E /></button>
                    </Link>
                    <button title="Excluir" onClick={() => handleDelete(veiculo.placa)}><X /> </button>
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
export default ListaVeiculos;