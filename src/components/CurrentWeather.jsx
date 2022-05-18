import React from 'react';
import styled from 'styled-components'

function CurrentWeather({data}) {
    return(
        <StyledCurrentWeather>
      <div className="current-weather box-shadow">
        <img src ={data.current.condition.icon} alt="icon"/>
        <h2> Temp: {data.current.temp_c} °C</h2>
        
        <div className="content  ">
        <h5> Precipitation: {data.current.precip_in} mm</h5>
        <h5> Wind Speed: {data.current.wind_kph} kph</h5>
        <h5> Humidity: {data.current.humidity} %</h5>
        
        </div>     
        </div>
        
        <div className="location box-shadow">
            <h2> City:   {data.location.name}</h2>
            <h3> Region:   {data.location.region}</h3>
            <h3> Country:    {data.location.country}</h3>
            
        </div>
        </StyledCurrentWeather>

    );
}

const StyledCurrentWeather =styled.div`
display: flex;
justify-content: space-between;




.current-weather{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    padding:10px;


    img{
        width:90px;
        height:90px;
        
    }

    h2{
        font-size:2rem;
        padding:0px;
        margin:6px;
    }

}
.location{
    width: 340px;
    padding:30px;

}
`;

export default CurrentWeather;