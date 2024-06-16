import { useState, useEffect } from 'react';

import WeatherApi from './api/WeatherApi';

import './App.css';

function App() {
  // useState para armazenar a lista de capitais
  const [weatherCapitals, setWeatherCapitals] = useState([])

  // useState para armazenar o valor do input
  const [queryInput, setQueryInput] = useState("")

  // useState para armazenar a API do input
  const [weatherInput, setWeatherInput] = useState("")

  useEffect(() => {
    const loadAPI = async () => {
      let capitals = await WeatherApi.getCapitals()
      setWeatherCapitals(capitals)
    }

    loadAPI()
  }, [])


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

      {weatherCapitals.map((item) => (
        <div className='capitals-item'>
          <p>{item.name}</p>
          <p>{item.url.forecast.forecastday[0].day.mintemp_c}</p>
          <p>{item.url.forecast.forecastday[0].day.maxtemp_c}</p>
        </div>
      ))
      }
    </main >
  );
}

export default App;
