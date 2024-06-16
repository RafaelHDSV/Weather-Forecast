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
            <h2>Capitais</h2>

            <div className="capitals-tags">
                <span>min</span>
                <span>max</span>
            </div>

            <div className="capitals-tags">
                <span>min</span>
                <span>max</span>
            </div>

            {
                weatherCapitals.map((item) => (
                    <div className='capitals-item'>
                        <span>{`${item.url.forecast.forecastday[0].day.mintemp_c.toFixed(0)} °`}</span>
                        <span>{`${item.url.forecast.forecastday[0].day.maxtemp_c.toFixed(0)} °`}</span>
                        <span>{item.name}</span>
                    </div>
                ))
            }
        </div>
    )
}
