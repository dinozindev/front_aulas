'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

const schema = yup.object().shape({
    nome: yup.string().required('Nome do serviço é obrigatório'),
    data: yup.date().min(new Date(), 'A data não pode ser anterior ao dia atual').required('A data do serviço é obrigatória'),
    tipo_pet: yup.string().required('O tipo do pet é obrigatório'),
    nome_pet: yup.string().required('O nome do pet é obrigatório'),
    proprietario_pet: yup.string().required('O nome do proprietário é obrigatório'),
    proprietario_tel: yup.string().length(11, 'Telefone deve ter 11 dígitos.').required('O nome do proprietário é obrigatório')
})

const CadastroServicoPage = () => {
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

    const {register, handleSubmit, formState : {errors}} = useForm({resolver: yupResolver(schema)})

    const inserirServico = (servico : any) => {
        const listaAtualizada = [...listaServicos, servico]
        setListaServicos(listaAtualizada)
        console.log(listaServicos)

    }
  return (
    <>
    <h1 className="page__title">Cadastrar Serviço</h1>
    <form onSubmit={handleSubmit(inserirServico)}>
        <label>Nome do Serviço
            <select {...register('nome')}>
            <option value="" disabled selected>Selecione o tipo de Serviço...</option>
            <option value="Banho">Banho</option>
            <option value="Tosa Completa">Tosa Completa</option>
            <option value="Tosa Higiênica">Tosa Higiênica</option>
            <option value="Consulta Veterinária">Consulta Veterinária</option>
            <option value="Hotel Pet">Hotel Pet</option>
            <option value="Daycare (Creche)">Daycare (Creche)</option>
            <option value="Adestramento">Adestramento</option>
            <option value="Transporte do Pet">Transporte do Pet</option>
            </select>
            <span className="input__error">{errors.nome?.message}</span>
        </label>
        <br/>
        <label>Data do Serviço
            <input type="date" {...register('data')}/>
            <span className="input__error">{errors.data?.message}</span>
        </label>
        <br />
        <label>Tipo do Pet
            <select {...register('tipo_pet')}>
            <option value="" disabled selected>Selecione o tipo de Pet...</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
            <option value="Pássaro">Pássaro</option>
            <option value="Peixe">Peixe</option>
            <option value="Roedor">Roedor</option>
            </select>
            <span className="input__error">{errors.tipo_pet?.message}</span>
        </label>
        <br />
        <label>Nome do Pet
            <input type="text" {...register('nome_pet')} />
            <span className="input__error">{errors.nome_pet?.message}</span>
        </label>
        <br />
        <label>Nome do Proprietário
            <input type="text" {...register('proprietario_pet')} />
            <span className="input__error">{errors.proprietario_pet?.message}</span>
        </label>
        <br />
        <label>Telefone do Proprietário
            <input type="text" {...register('proprietario_tel')} />
            <span className="input__error">{errors.proprietario_tel?.message}</span>
        </label>
        <br />
        <input type="submit" className="input__submit" />
    </form>
    </>
  )
}

export default CadastroServicoPage