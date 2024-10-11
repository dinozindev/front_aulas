'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

const schema = yup.object().shape({
    nome: yup.string().required('Nome do usuário é obrigatório'),
    senha: yup.string().required('A senha é obrigatória.'),
    proprietario_tel: yup.string().length(11, 'Telefone deve ter 11 dígitos.').required('O nome do proprietário é obrigatório'),
    tipo_pet: yup.string().required('O tipo do pet é obrigatório'),
    nome_pet: yup.string().required('O nome do pet é obrigatório'),
    raca_pet: yup.string().required('A raça/espécie do pet é obrigatória'),
    idade_pet: yup.number().required('A idade do pet é obrigatória.')
})

const CadastroUsuarioPage = () => {

    const [usuario, setUsuario] = useState();

    const {register, handleSubmit, formState : {errors}} = useForm({resolver: yupResolver(schema)})

    const inserirUsuario = (usuario : any) => {
        setUsuario(usuario)

    }
    return (
        <>
        <h1 className="page__title">Cadastrar-se</h1>
        <form onSubmit={handleSubmit(inserirUsuario)}>
        <label>Nome do Usuário
            <input type="text" {...register('nome')} />
            <span className="input__error">{errors.nome?.message}</span>
        </label>
        <br />
        <label>Senha
            <input type="text" {...register('senha')} />
            <span className="input__error">{errors.senha?.message}</span>
        </label>
        <br />
        <label>Telefone
            <input type="text" {...register('proprietario_tel')} />
            <span className="input__error">{errors.proprietario_tel?.message}</span>
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
        <label>Raça/Espécie do Pet
            <input type="text" {...register('raca_pet')} />
            <span className="input__error">{errors.raca_pet?.message}</span>
        </label>
        <br />
        <label>Idade do Pet
            <input type="text" {...register('idade_pet')} />
            <span className="input__error">{errors.idade_pet?.message}</span>
        </label>
        <br />
        <input type="submit" className="input__submit" />
        </form>
        </>
    )
}

export default CadastroUsuarioPage;