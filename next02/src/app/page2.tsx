'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'; // usa tudo do yup como 'yup'.

type FormValues = {
    nome: string;
    sobrenome: string;
    cpf: string;
}

const schema = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório.'),
    sobrenome: yup.string().required('O sobrenome é obrigatório.'),
    cpf: yup.string().required('O CPF é obrigatório.').min(11, "O CPF deve ter 11 caracteres.")
})

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data) // envia os dados para o destino, uma API por exemplo, neste caso escreve os dados recebidos no console
    }
    return (
        <>
            <h1>Trabalhando com REACT-HOOK-FORM</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nome:
                    <input {...register("nome")} />
                    {errors.nome && <span>{errors.nome.message}</span>}
                </label>
                <br />
                <label>Sobrenome:
                    <input {...register("sobrenome")} />
                    {errors.sobrenome && <span>{errors.sobrenome.message}</span>}
                </label>
                <br />
                <label>CPF:
                    <input {...register("cpf")} />
                    {errors.cpf && <span>{errors.cpf.message}</span>}
                </label>
                <input type="submit" />
            </form>
        </>
    );
}

export default Home;
