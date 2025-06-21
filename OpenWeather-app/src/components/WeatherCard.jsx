
//object destructuring to access weatherdata from the the serch bar component
const WeatherCard = ({weatherData}) =>{
    return(
        <div>
            <div className=" text-orange text-center m-5 bg-charcoal p-5  rounded-lg border border-orange max-w-md sm:max-w-xl mx-auto">

                <div className="flex justify-center gap-2 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
               <h3 className="font-semibold text-2xl">{weatherData.name}</h3>
                </div>
                
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt={weatherData.weather[0].description} className="animate-pulse mx-auto"/>
                 <p className="capitalize">{weatherData.weather[0].description}</p>
                 <p>Temperature:{weatherData.main.temp}°C</p>
                 <p>Humidity:{weatherData.main.humidity}%</p>
                <p>Wind:{weatherData.wind.speed}m/s</p>
            </div>

        </div>
    )
}

export default WeatherCard