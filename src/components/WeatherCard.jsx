import axios from 'axios';
import styles from '../modules/weathercard.module.css'
import Searchbar from './Searchbar'
import CityWeather from './CityWeather';
import { useState } from 'react';

export default function WeatherCard() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState(null);

  const getCityWeather = (city) => {

    axios
    .get(`http://api.weatherapi.com/v1/current.json?q=${city}&key=9ac416724ffa401b95e144142241503`)
    .then((res) => {
      setCurrentWeather(res.data.current);
      setLocation(res.data.location)
    })
    .catch(error => {
      setCurrentWeather(null)
      setLocation(null)
    })
  }

  return (
    <div className={styles.weather_card}>
      <Searchbar getCityWeather={getCityWeather} />
      <CityWeather currentWeather={currentWeather} location={location} />
    </div>
  )
}
