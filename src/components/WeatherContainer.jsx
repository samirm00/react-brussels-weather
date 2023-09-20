import { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherContainer.css';

import Loading from './Loading';
import Weather from './Weather';

const WeatherContainer = () => {
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getWeatherInfo = async () => {
            try {
                const res = await axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=50.8503&longitude=4.3517&hourly=temperature_2m`
                );

                if (res.status === 200) {
                    setWeatherInfo(res.data);
                    setError('');
                } else {
                    throw new Error(
                        `Failed to fetch user with status : ${res.status}`
                    );
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getWeatherInfo();
    }, []);

    return (
        <div className="container">
            {loading && <Loading />}
            {error && <p>{error}</p>}
            {weatherInfo && <Weather weather={weatherInfo} />}
        </div>
    );
};

export default WeatherContainer;
