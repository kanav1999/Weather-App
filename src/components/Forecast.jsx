import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

function Forecast({ data }){
    const currentWeather = data.forecast.forecastday[0].hour;    
    return(<StyledForecast>
        <h2>Current Weather Data</h2>
        <div className='box-shadow current-forecast'>
        {currentWeather.map((weather) =>(
            <div key={currentWeather.time_epoch} className='card box-shadow'>
            <span>{moment(weather.time).format('MMMM Do YYYY, h:mm:ss a')}</span>
            <img src={weather.condition.icon} alt=""/>
            <p>{weather.temp_c} °C</p>
            </div>
        ))}
        </div>

        <h2> Other Days Data </h2>
        {data.forecast.forecastday.map((futureWeather) =>
        <div key={futureWeather.date_epoch} className='future-forecast'>
        <div className='box-shadow current-forecast'>
        {futureWeather.hour.map((weather) =>(
            <div key={weather.time_epoch} className='card box-shadow'>
            <span>{moment(weather.time).format('MMMM Do YYYY, h:mm:ss a')}</span>
            <img src={weather.condition.icon} alt=""/>
            <p>{weather.temp_c} °C</p>
            </div>
        ))}
        </div>

        </div>
        
        )}
      
    </StyledForecast>
  );
}



const StyledForecast= styled.div`
margin-top:40px;

.current-forecast{
    display: flex;
    overflow-y: hidden;
    padding:20px;


    .card{
            width:230px;
            height:210px;
            padding:36px;
            margin-right:20px;
            display:flex;
            flex-direction:column;
            align-items:center;
            background-color: #303134;
            color:white;

    span{
        font-size:.9rem;
        text-align:center;
        }
        }
        /* width */
::-webkit-scrollbar {
  height:8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
}

.future-forecast{
  margin:20px 0;
}
h2{
    margin: 28px o;
    font-size:1.5rem;
    margin-bottom:10px;
    margin-top: 10px;

}

`;
export default Forecast;