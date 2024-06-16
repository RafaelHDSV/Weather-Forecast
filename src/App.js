import { useState } from 'react';

import WeatherApi from './api/WeatherApi';

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
    console.log(weatherInput);
  }

  return (
    <main className="App">
      <h1>Weather Forecast</h1>

      <input type="text" onChange={loadInput} />

      <p>{queryInput}</p>

      <Capitals></Capitals>
    </main >
  );
}

export default App;
