import { useEffect, useState } from 'react'
import styles from '../modules/searchbar.module.css'

export default function Searchbar({ getCityWeather}) {

  const [input, setInput] = useState('Rome');

  useEffect(() => {
    getCityWeather(input)
  }, [])

  const handleSearch = () => {
    getCityWeather(input)
    setInput('')
  }

  const handleEnter = (e) => {
    if(e.code === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.search_input} >
      <input 
        onKeyUp={handleEnter}
        value={input}
        placeholder='Inserisci il nome di una città' 
        type="text" 
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch} >Cerca</button>
    </div>
  )
}