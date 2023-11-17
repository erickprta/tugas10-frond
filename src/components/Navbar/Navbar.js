import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <div>
                <h1 className={styles.navbar__brand}>Movie App</h1>
            </div>
            <div>
              <ul className={styles.navbar__list}>
                <li className={styles.navbar.item}>Home</li>
                <li className={styles.navbar.item}>Add Movie</li>
                <li className={styles.navbar.item}>Populer</li>
                <li className={styles.navbar.item}>Now Playing</li>
                <li className={styles.navbar.item}>Toop Rated</li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar