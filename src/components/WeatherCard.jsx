import React from 'react';

const WeatherCard = (props) => {
    const { weatherData } = props
    console.log(weatherData);
 
    
        

    // const weatherData = {
    //     code: 1030,
    //     country: "Pakistan",
    //     icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
    //     lat: 24.87,
    //     localtime: "2024-09-04 22:50",
    //     localtime_epoch: 1725472242,
    //     lon: 67.05,
    //     name: "Karachi",
    //     region: "Sindh",
    //     text: "Mist",
    //     tz_id: "Asia/Karachi",
    //     temp_c: 29.3,
    //     temp_f: 84.7
    // };

    return (
        <div className="card w-full max-w-sm bg-base-100 shadow-xl mx-auto">
            <figure className="flex justify-center">
                <img src={weatherData.icon} alt="Weather Icon" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="text-5xl font-bold">{weatherData.temp_c}°C</h1>
                <p className="text-sm text-gray-500 mb-2">({weatherData.temp_f}°F)</p>
                <h2 className="card-title text-lg">{weatherData.name}, {weatherData.region}</h2>
                <p className="text-sm">Country: {weatherData.country}</p>
                <p className="text-sm">Lat/Lon: {weatherData.lat}, {weatherData.lon}</p>
                <p className="text-sm">Timezone: {weatherData.tz_id}</p>
                <p className="text-sm">Local Time: {weatherData.localtime}</p>

            </div>
        </div>
    );
};

export default WeatherCard;
