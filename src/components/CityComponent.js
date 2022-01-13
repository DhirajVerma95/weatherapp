import React from 'react'
import "./CityComponent.css"

const CityComponent = (props) => { 
    const {setCity, fatchWeather} = props;
    return (
        <>
        <div className='app-city-container'>
            <h1> Search Weather of Your City</h1>
            <img src='../images/perfect-day.svg'  /> 
           <form onSubmit={fatchWeather}>
                <label>Enter the City Name</label>
            <div className='search'>
            <input placeholder='City' onChange={(e) => setCity(e.target.value)} >     
            </input>
                <button type = "submit" >Search </button>
            </div>
               
        </form>
        </div>
        </>
    )
}

export default CityComponent
