import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  return (

    <div className="min-h-screen bg-black text-white">

      <div className="text-orange pt-10 text-center items-center flex justify-center gap-2">
       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Weatherapp</h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-pulse text-orange-400 drop-shadow-[0_0_6px_rgba(255,165,0,0.8)]">
       <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
       </svg>
      </div>
      
     <SearchBar/>

<Footer/>
    </div>
  )
}

export default App
