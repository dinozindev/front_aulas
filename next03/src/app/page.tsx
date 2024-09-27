'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório.'),
  email: yup.string().email('E-mail inválido.').required('E-mail é obrigatório.'),
  cpf: yup.string().length(11, 'CPF deve ter 11 dígitos.').required('CPF é obrigatório.'),
  cep: yup.string().length(8, 'CEP deve ter 8 dígitos.').required('CEP é obrigatório.'),
  rua: yup.string(),
  numero: yup.string(),
  complemento: yup.string(),
  bairro: yup.string(),
  cidade: yup.string(),
  estado: yup.string()
})

export default function Home() {
  const {register, handleSubmit, formState : {errors}, setValue, setFocus} = useForm({resolver : yupResolver(schema)});

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
        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);
        setFocus('numero');
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit(inserirCliente)}>
        <fieldset>
          <legend>Dados Pessoais</legend>
        <label>Nome:
          <input type="text" {...register('nome')}/>
          <span>{errors.nome?.message}</span>
        </label>
        <br />
        <label>E-mail:
          <input type="text" {...register('email')}/>
          <span>{errors.email?.message}</span>
        </label>
        <br />
        <label>CPF:
          <input type="text" {...register('cpf')}/>
          <span>{errors.cpf?.message}</span>
        </label>
        <br />
        <label>CEP:
          <input type="text" {...register('cep')} onBlur={buscaCep}/>
          <span>{errors.cep?.message}</span>
        </label>
        <br />
        <label>Endereço:
          <input type="text" {...register('rua')}/>
        </label>
        <br />
        <label>Número:
          <input type="text" {...register('numero')}/>
        </label>
        <br />
        <label>Complemento:
          <input type="text" {...register('complemento')}/>
        </label>
        <br />
        <label>Bairro:
          <input type="text" {...register('bairro')}/>
        </label>
        <br />
        <label>Cidade:
          <input type="text" {...register('cidade')}/>
        </label>
        <br />
        <label>Estado:
          <input type="text" {...register('estado')}/>
        </label>
        <br />
        <input type="submit" />
        </fieldset>
      </form>
    </>
  );
}
