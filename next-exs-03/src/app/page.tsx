'use client'

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().email("Insira um E-mail válido.").required("O E-mail é obrigatório."),
    senha: yup.string().required("A senha é obrigatória."),
    data: yup.date().max(new Date(), 'Não é possível incluir uma data futura.').required("A data de nascimento é obrigatória."),
    numero: yup.string().max(11, 'O telefone deve ter 11 dígitos.').required("O número de telefone é obrigatório."),
    endereco: yup.string(),
    cidade: yup.string(),
    estado: yup.string(),
    cep: yup.string().length(8, 'CEP deve ter 8 dígitos.').required('CEP é obrigatório.')
})

export default function Home() {
  const {register, handleSubmit, formState : { errors }, setValue} = useForm({resolver : yupResolver(schema)});

  const [listaCliente, setListaCliente] = useState<any[]>([]);

  const inserirCliente = (cliente : any) => {
    // pega os valores atuais pelo spread, e adiciona cliente
    setListaCliente([...listaCliente, cliente]);
    console.log(listaCliente)
    }

    const buscaCep = (e: { target : { value : string } }) => {
      // troca valores não numéricos por um espaço em brancos
        const cep = e.target.value.replace(/\D/g,'');
        fetch(`https://viacep.com.br/ws/${cep}/json`) // interpolação
        .then(response => response.json())
        .then(data => {
          setValue('endereco', data.logradouro);
          setValue('cidade', data.localidade);
          setValue('estado', data.uf);
        })
    }
  return (
   <>
    <form onSubmit={handleSubmit(inserirCliente)}>
        <fieldset>
          <legend>Dados Pessoais</legend>
        <label>E-mail:
          <input type="text" {...register('email')}/>
          <span>{errors.email?.message}</span>
        </label>
        <br />
        <label>Senha:
          <input type="text" {...register('senha')}/>
          <span>{errors.senha?.message}</span>
        </label>
        <br />
        <label>Data de nascimento:
          <input type="date" {...register('data')}/>
          <span>{errors.data?.message}</span>
        </label>
        <br />
        <label>Número de Telefone:
          <input type="text" {...register('numero')}/>
          <span>{errors.numero?.message}</span>
        </label>
        <br />
        <label>CEP:
          <input type="text" {...register('cep')} onBlur={buscaCep}/>
          <span>{errors.cep?.message}</span>
        </label>
        <br />
        <label>Endereço:
          <input type="text" {...register('endereco')}/>
          <span>{errors.endereco?.message}</span>
        </label>
        <br />
        <label>Cidade:
          <input type="text" {...register('cidade')}/>
          <span>{errors.cidade?.message}</span>
        </label>
        <br />
        <label>Estado:
          <input type="text" {...register('estado')}/>
          <span>{errors.estado?.message}</span>
        </label>
        <br />
        <input type="submit" />
        </fieldset>
      </form>
   </>
  );
}
