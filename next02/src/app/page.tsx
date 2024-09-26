'use client'
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  nome: string;
  sobrenome: string;
}

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data) // envia os dados para o destino, uma API por exemplo, neste caso escreve os dados recebidos no console
  }
  return (
    <>
      <h1>Trabalhando com REACT-HOOK-FORM</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome:
          <input {...register("nome", { required: true })} />
          {errors.nome && <span>Este campo é obrigatório.</span>}
        </label>
        <br />
        <label>Sobrenome:
          <input {...register("sobrenome", { required: true })} />
          {errors.sobrenome && <span>Este campo é obrigatório.</span>}
        </label>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default Home;
