import styles from '../modules/headertitle.module.css'

export default function HeaderTitle () {
  return (
    <header className={styles.page_header}>
      <h1 className={styles.page_title}>Check the weather !</h1> 
      <img src="lightning-weathers-double-exclamation.gif"/>
    </header>
  )
}