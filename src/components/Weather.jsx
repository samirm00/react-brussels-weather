import PropTypes from 'prop-types';
import './Weather.css';

import organizeWeather from '../utils/organizeWeather';
import Day from './Day';

const Weather = ({ weather }) => {
    const days = organizeWeather(weather);

    return (
        <div>
            <div className="day-hours">Day | Hours</div>
            {days &&
                Object.entries(days).map(([key, value], index) => (
                    <Day key={index} day={key} dayInfo={value} />
                ))}
        </div>
    );
};

Weather.propTypes = {
    weather: PropTypes.object.isRequired
};

export default Weather;
