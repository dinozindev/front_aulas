'use client'
import { useState } from 'react';
import { useFetchApi, Predicoes, PredicoesResultado } from '../../components/useFetchApi';

const Home = () => {
  const formatoInicialFormulario: Predicoes = {
    temperatura_alta: 0,
    sons_estranhos: 0,
    luz_painel: 0,
    alto_consumo_combustivel: 0,
    dificuldade_partida: 0,
    carro_vibrando: 0,
    problemas_freio: 0,
    problemas_direcao: 0,
    fumaca_escapamento: 0,
    cheiros_incomuns: 0,
    bateria_fraca: 0,
    ar_nao_gelando: 0,
    vazamento: 0,
    fumaca_capo: 0,
    perda_potencia: 0,
    problemas_eletricos: 0,
    motor_falhando: 0,
    volante_desalinhado: 0,
    nivel_oleo: 0,
  };

  const [formDados, setFormDados] = useState<Predicoes>(formatoInicialFormulario);
  const [result, setResult] = useState<PredicoesResultado | null>(null);
  const [formularioEnviado, setFormularioEnviado] = useState<boolean>(false);

  const sintomas = [
    { id: 'temperatura_alta', label: 'Carro está com a temperatura alta?' },
    { id: 'sons_estranhos', label: 'Carro está fazendo sons estranhos?' },
    { id: 'luz_painel', label: 'Carro está com alguma luz no painel?' },
    { id: 'alto_consumo_combustivel', label: 'Carro está consumindo muita gasolina?' },
    { id: 'dificuldade_partida', label: 'Carro está com dificuldade de dar partida?' },
    { id: 'carro_vibrando', label: 'Carro está vibrando muito?' },
    { id: 'problemas_freio', label: 'Carro está com algum problema na hora de frear?' },
    { id: 'problemas_direcao', label: 'Carro está com algum problema na direção?' },
    { id: 'fumaca_escapamento', label: 'Carro está soltando muita fumaça pelo escapamento?' },
    { id: 'cheiros_incomuns', label: 'Carro está com algum cheiro incomum/ruim?' },
    { id: 'bateria_fraca', label: 'Carro está com a bateria fraca?' },
    { id: 'ar_nao_gelando', label: 'O ar-condicionado está com problema ao esfriar o carro?' },
    { id: 'vazamento', label: 'Carro está com vazamento de algum líquido?' },
    { id: 'fumaca_capo', label: 'Carro está soltando vapor/fumaça pelo capô?' },
    { id: 'perda_potencia', label: 'Carro está perdendo potência?' },
    { id: 'problemas_eletricos', label: 'Carro está com algum problema elétrico?' },
    { id: 'motor_falhando', label: 'Carro está com o motor falhando?' },
    { id: 'volante_desalinhado', label: 'Carro está com o volante desalinhado?' },
    { id: 'nivel_oleo', label: 'Carro está com o nível de óleo baixo no painel?' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDados({
      ...formDados,
      [name]: Number(value), // atualiza o campo específico do formulário
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const prediction = await useFetchApi(formDados);
      setResult(prediction);
      setFormularioEnviado(true);
      setFormDados(formatoInicialFormulario);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div>
      <h1>Autodiagnóstico do Carro</h1>
      <form onSubmit={handleSubmit}>
        {sintomas.map((sintoma) => (
          <div key={sintoma.id}>
            <label htmlFor={sintoma.id}>{sintoma.label}</label>
            <div>
              <input
                type="checkbox"
                id={sintoma.id}
                name={sintoma.id}
                value="1"
                checked={formDados[sintoma.id as keyof Predicoes] === 1}
                onChange={handleChange}
              />
              <label htmlFor={sintoma.id}>Sim</label>
              <input
                type="checkbox"
                id={sintoma.id}
                name={sintoma.id}
                value="0"
                checked={formDados[sintoma.id as keyof Predicoes] === 0}
                onChange={handleChange}
              />
              <label htmlFor={sintoma.id}>Não</label>
            </div>
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
      {formularioEnviado && result && result.diagnostico !== "Nenhum problema encontrado" ? (
        <div>
          <h2>Diagnóstico: {result.diagnostico}</h2>
          <p>Sintomas: {result.sintomas.join(', ')}</p>
          <p>Solução: {result.solucao}</p>
        </div>
      ) : formularioEnviado && (
        <div>
          <h2>Nenhum problema foi identificado. Tente novamente especificando melhor os sintomas encontrados no carro.</h2>
        </div>
      )}
    </div>
  );
};

export default Home;