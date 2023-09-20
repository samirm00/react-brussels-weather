import PropTypes from 'prop-types';
import { FaLongArrowAltDown, FaLongArrowAltUp, FaEquals } from 'react-icons/fa';
import {
    BsFillCloudRainHeavyFill,
    BsCloudRain,
    BsSun,
    BsEmojiSunglasses
} from 'react-icons/bs';

import './Hour.css';

const Hour = ({ hour }) => {
    return (
        <div className="hour">
            <div>{hour.hour}</div>
            <div className="up-container">
                <div>
                    {hour.temp < 10 ? (
                        <BsFillCloudRainHeavyFill color="black" />
                    ) : hour.temp < 15 ? (
                        <BsCloudRain color="white" />
                    ) : hour.temp < 20 ? (
                        <BsSun color="white" />
                    ) : (
                        <BsEmojiSunglasses color="yellow" />
                    )}
                </div>
                <div>
                    {hour.up === 'no' ? null : hour.up === 'up' ? (
                        <FaLongArrowAltUp color="green" />
                    ) : hour.up === 'down' ? (
                        <FaLongArrowAltDown color="red" />
                    ) : (
                        <FaEquals color="white" />
                    )}
                </div>

                <div>{hour.temp}</div>
            </div>
        </div>
    );
};

Hour.propTypes = {
    hour: PropTypes.shape({
        hour: PropTypes.string.isRequired,
        temp: PropTypes.string.isRequired,
        up: PropTypes.string.isRequired
    }).isRequired
};

export default Hour;
