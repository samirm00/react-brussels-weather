const organizeWeather = (weatherData) => {
    const { hourly } = weatherData;
    const { temperature_2m, time } = hourly;

    // to save all days
    const days = {};

    // to save the temp and compare it with the new temp for the next hour
    let oldTemp;
    time.forEach((hour, index) => {
        const now = new Date(hour);
        const day = now.getDate(); // day in month

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        const formattedHour = `${hours}:${minutes}:${seconds}`;
        const temp = temperature_2m[index];
        const formattedTemp = temperature_2m[index].toFixed(1); // to add 1 decimal after "."
        // to check if the temp is greater or less or equal to the oldTemp
        let up;
        if (oldTemp) {
            if (oldTemp > temp) {
                up = 'down';
            } else if (oldTemp < temp) {
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

        // check if day already exists in days object if not create it.
        if (!days[day]) {
            days[day] = [];
        }
        days[day].push(hourAndTemp);

        // make the oldTemp the current temp
        oldTemp = temp;
    });

    return days;
};

export default organizeWeather;
