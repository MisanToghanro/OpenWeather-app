
import axios from "axios"



const WeatherApi = async (city) => {

    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API}&units=metric`);
         return response.data;
        
    }catch(error){
     if (!error.response) {
     return "network"; // or any custom keyword
} else {
  return notfound; // or "notfound"
}
        
    } 
    
}

export default WeatherApi;