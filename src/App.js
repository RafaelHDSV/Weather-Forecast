import { useState } from 'react';

import WeatherApi from './api/WeatherApi';

import Input from './components/Input';
import Capitals from './components/Capitals';

import './App.css';

function App() {
  // useState para armazenar o valor do input
  const [queryInput, setQueryInput] = useState("")

  // useState para armazenar a API do input
  const [weatherInput, setWeatherInput] = useState("")

  const loadInput = async (event) => {
    setQueryInput(event.target.value)

    let inputWeather = await WeatherApi.getInput(queryInput)
    setWeatherInput(inputWeather);
  }

  return (
    <main className="App">
      <Input
        inputValue={weatherInput}
      ></Input>

      <h1>Previsão do Tempo</h1>

      <input type="text" placeholder='Insira aqui o nome da cidade' onChange={loadInput} />
      <button>Pesquisar</button>

      <Capitals></Capitals>
    </main >
  );
}

export default App;
