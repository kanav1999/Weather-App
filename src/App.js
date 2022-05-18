import { useState } from 'react';
import './App.css';

//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//hooks
import useRequest from './hooks/useRequest';


import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';



function App() {
  const [searchResults, setSearchResults] = useState('Noida');
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResults}&days=10&aqi=yes&alerts=yes`;
  const { data} = useRequest(url);

  console.log(data);
  return (
    <div className="App">
      <ToastContainer />
      <h1 style={{margin:"30px, 10px"}}> K-Weather App</h1>
      {Object.keys(data).length !==0 && (<>
        <Search setSearchResults={setSearchResults}/>
        <CurrentWeather data ={data}/>
        <Forecast data ={data}/>
      </>
      )}
      

    </div>
  );
  
}
export default App;
