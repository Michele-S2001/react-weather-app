import { useEffect, useState } from 'react'
import styles from '../modules/searchbar.module.css'

export default function Searchbar({ getCityWeather}) {

  const [input, setInput] = useState('Rome');
  const [error, setError] = useState(false);

  useEffect(() => {
    getCityWeather(input)
    setInput('')
  }, [])

  const handleError = () => {
    setError(true)
    setTimeout(() => {
      setError(false)
    }, 2000)
  }

  const handleSearch = () => {
    const clearInput = input.trim();
    
    if(!(clearInput === '')) {
      getCityWeather(clearInput)
    } else {
      handleError()
    }
    setInput('')
  }

  const handleEnter = (e) => {
    if(e.code === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <div className={styles.search_input} >
        <input 
          onKeyUp={handleEnter}
          value={input}
          placeholder='Enter the name of a city' 
          type="text" 
          onChange={(e) => setInput(e.target.value)}
          className={ `${styles.field} ${error ? styles.display_error : ''}`}
        />
        <button onClick={handleSearch} >Search</button>
      </div>
      { error && <p className={styles.void_field_error}>Inserire il nome della città !</p>
      }
    </>
  )
}