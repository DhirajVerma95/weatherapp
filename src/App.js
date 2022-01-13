import { useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherComponent from './components/WeatherComponent';
import CityComponent from './components/CityComponent';

// const API_key = "38ca4b8e07c7267756afb7f1e5fc9ac0";
function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  
  const fatchWeather = async (e) =>{
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38ca4b8e07c7267756afb7f1e5fc9ac0`,
    );
    setWeather(response.data);
  }
  return (
    <div className='app-container'>
    
      { weather ?  <WeatherComponent  weather = {weather}/> : <CityComponent  setCity = {setCity} fatchWeather = {fatchWeather}/>}
    </div>
  );
  }

export default App;
