import React from 'react';
import "./WeatherComponent.css";


export const WeatherInfoIcon = {
    sunset : "../images/night.svg",
    sunrise : "../images/day.svg",
    wind : "../images/wind.svg",
    pressure : "../images/pressure.svg",
    temp :  "../images/temp.svg",
    humidity : "../images/humidity.svg",
    haze : "../images/huze.svg",
    rain : "../images/rain.svg",
    snow : "../images/snow.svg",
    smoke : "../images/smoke.png"
}


const WeatherInfoComponent = (props) =>{
    const {name , value} = props;
    return(
        <>
        <div className='infocontainer'>
            <div className='infoicon'><img src={WeatherInfoIcon[name]} alt={name}></img> </div>
            <div className='infolable'>
                {value}
                <span>{name}</span>
            </div>
        </div>
        
        </>
    );
}
const WeatherComponent = (props) => {
    const {weather} = props;
    const condition = weather?.weather[0].description ;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
        <div className='app-weather'>
          <h1> {weather?.name} Weather Details</h1>
            <div className='app-weather-temp'>
                <span>{`${Math.floor(weather?.main?.temp- 273)} °C`}  |</span> 
                 <p> {`${weather?.weather[0].description}`}</p> 
                 <img src={WeatherInfoIcon[condition]}/> 
           </div>
               <div className='app-weather-location'>
                  <h1>{`${weather?.name} , ${weather?.sys?.country}`}</h1>
               </div>
                   <div className='app-weather-details'>
                        <WeatherInfoComponent name= {isDay ? "sunset" : "sunrise"}   
                        value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                        <WeatherInfoComponent name= "humidity"   value = {weather?.main?.humidity}/>
                        <WeatherInfoComponent name= "wind"   value = {weather?.wind?.speed}/>
                        <WeatherInfoComponent name= "pressure"   value = {weather?.main?.pressure}/>
                    </div>
           </div>
        </>
    )
}

export default WeatherComponent
