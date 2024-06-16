import { useEffect, useState } from 'react';
import WeatherApi from '../api/WeatherApi';

export default function Capitals() {
    // useState para armazenar a lista de capitais
    const [weatherCapitals, setWeatherCapitals] = useState([])

    // fazer a requisição da api para o useState
    useEffect(() => {
        const loadAPI = async () => {
            let capitals = await WeatherApi.getCapitals()
            setWeatherCapitals(capitals)
        }

        loadAPI()
    }, [])

    return (
        <div className="capitals-container">
            {
                weatherCapitals.map((item) => (
                    <div className='capitals-item'>
                        <p>{item.name}</p>
                        <p>{item.url.forecast.forecastday[0].day.mintemp_c}</p>
                        <p>{item.url.forecast.forecastday[0].day.maxtemp_c}</p>
                    </div>
                ))
            }
        </div>
    )
}
