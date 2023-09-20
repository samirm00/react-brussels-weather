const organizeWeather = (weatherData) => {
    const {
        elevation,
        latitude,
        longitude,
        timezone,
        hourly: { temperature_2m, time }
    } = weatherData;

    const days = {};

    let oldTemp;
    time.forEach((hour, index) => {
        const now = new Date(hour);
        const day = now.getDate(); 

        const formattedHour = `${
            now.getHours() < 10 ? '0' : ''
        }${now.getHours()} :  ${
            now.getMinutes() < 10 ? '0' : ''
        }${now.getMinutes()} : ${
            now.getSeconds() < 10 ? '0' : ''
        }${now.getSeconds()}`;

        const formattedTemp = temperature_2m[index].toFixed(1);   
        let up;
        if (oldTemp) {
            if (oldTemp > temperature_2m[index]) {
                up = 'down';
            } else if (oldTemp < temperature_2m[index]) {
                up = 'up';
            } else {
                up = 'same';
            }
        } else {
            up = 'no';
        }

        const hourAndTemp = {
            hour: formattedHour,
            temp: formattedTemp,
            up: up
        };

        if (!days[day]) {
            days[day] = [];
        }
        days[day].push(hourAndTemp);
        oldTemp = temperature_2m[index];
    });

    return {
        elevation,
        latitude,
        longitude,
        timezone,
        days
    };
};

export default organizeWeather;
