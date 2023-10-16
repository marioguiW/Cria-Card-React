import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57c278',
    },
    {
      nome: 'Front-End',
      cor: '#82cffa',
    },
    {
      nome: 'Data Science',
      cor: '#a6d157',
    },
    {
      nome: 'Devops',
      cor: '#e06b69',
    },
    {
      nome: 'UX e Design',
      cor: '#d86ebf',
    },
    {
      nome: 'Mobile',
      cor: '#ffba05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = (nome) =>{
    setColaboradores(colaboradores.map(colaborador => colaborador.nome !== nome));
  }

  const mudaCorDoTime = (cor, nomeTime) =>{
    setTimes(times.map(time =>{
      if(time.nome == nomeTime){
        time.cor = cor
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        mudarCor={mudaCorDoTime}
        />)}
        
    </div>
  );
}

export default App;
