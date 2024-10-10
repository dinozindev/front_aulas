'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

const schema = yup.object().shape({
    nome: yup.string().required('Nome do serviço é obrigatório'),
    descricao: yup.string().required('Descrição do serviço é obrigatória.'),
    preco: yup.number().required('Preço do serviço é obrigatório.'),
    tipo_pet: yup.string().required('O tipo do pet é obrigatório'),
    nome_pet: yup.string().required('O nome do pet é obrigatório'),
    proprietario_pet: yup.string().required('O nome do proprietário é obrigatório'),
    proprietario_tel: yup.string().length(11, 'Telefone deve ter 11 dígitos.').required('O nome do proprietário é obrigatório')
})

const CadastroServicoPage = () => {
    const {register, handleSubmit, formState : {errors}, setValue, setFocus} = useForm({resolver: yupResolver(schema)})

    const [listaServicos, setListaServicos] = useState<any[]>([]);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const res = await fetch('/api/servicos.json')
                const data = await res.json();
                setListaServicos(data)
            } catch (error) {
                console.log("Erro ao buscar os produtos: ", error)
            }
        }
        fetchServicos()
    }, [])

    const inserirServico = (servico : any) => {

    }
  return (
    <>
    <form>
        <label>Nome do Serviço:
            <input type="text" {...register('nome')} />
            <span>{errors.nome?.message}</span>
        </label>
        <br />

    </form>
    </>
  )
}

export default CadastroServicoPage