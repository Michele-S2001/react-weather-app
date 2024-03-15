import styles from '../modules/cityweather.module.css'

export default function CityWeather ({ currentWeather, location}) {

  const weatherCondition = () => {
    return currentWeather.condition.text
  }

  const weatherConditionImage = () => {
    return currentWeather.condition.icon
  }

  return (
    <>
      { !(currentWeather === null) ? (
        <div className={styles.meteo} >
          <h4 className={styles.city} > {location.name} </h4>

          <div className={styles.weather_conditions}>
            <p className={styles.weather}> {weatherCondition()} </p>
            <img src={`${weatherConditionImage()}`}/>
          </div>

          <div className={styles.temp}>
            { currentWeather.temp_c } °C
          </div>

          <div className={styles.other_stats}>
            <div className={styles.stat}>
              <p>Humidity</p>
              <p> {currentWeather.humidity}%</p>
            </div>
            <div className={styles.stat}>
              <p>Wind speed</p>
              <p> {currentWeather.wind_dir + ' ' + currentWeather.wind_kph} km/h </p>
            </div>
          </div>

        </div>
      ) : (
        <p className={styles.not_found}>Città non trovata</p>
      )}
    </>
  )
}