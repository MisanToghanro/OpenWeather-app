import { useState } from "react";
import WeatherApi from "../apiComponent/WeatherApi";
import WeatherCard from "./WeatherCard";

const SearchBar = () => {
    
       const [searchInput, setSearchInput] = useState("");//tracking the users input
       const [weatherData, setWeatherData] = useState(null);//displaying the weather details from the api
       const [error, setError] = useState(null);//error handling
       const [loading , setLoading] = useState(false);

       const handleSearch = async (event) => {
        event.preventDefault();
        setWeatherData(null);//
        setError("");//error messages are cleared
        setLoading(true);//when button is clicked , loading... will appear

        if(!searchInput.trim()){
            setError("Please type in a location");//error message will display if a location is not provided fro search
            setLoading(false)
            return;
        }

        try{
          const response = await WeatherApi(searchInput)//the weather api obtains weather data, depending on the user input

           return setWeatherData(response);// if the search is successful, weather data of the city will show

        } catch(error){
          setError("city not found")
        }finally{
            setLoading(false)
        }
       }

 
    return(
        <div>
        
          <form onSubmit={handleSearch} className=" shadow-orange shadow-md p-5 gap-4 place-content-center flex flex-col m-5 sm:flex-row max-w-lg mx-auto ">
            
            <input type="text" 
            className="w-full max-w-md bg-charcoal text-white placeholder-orange px-4 py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-orange transition duration-200"
             placeholder="Type in your location"
             value={searchInput}
             onChange={(event)=> setSearchInput(event.target.value)}></input>


           <button 
           type="submit" 
           className=" text-white bg-orange  rounded-full hover:bg-yellow-600 px-6 py-2">search</button>
           
           </form> 

           {loading && (
            <div className=" flex justify-center items-center mt-6">
              <div className="w-8 h-8 border border-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
           )}

           {error && <p className="text-red-500 mt-4 text-center ">{error}</p> }

          
           {weatherData && (
            <div className="m-5">
                <WeatherCard  weatherData={weatherData} />    
            </div>
           )}
        </div>
    )
}
export default SearchBar