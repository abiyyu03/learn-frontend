import styles from './Navbar.module.css';

const Navbar = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.navbar__brand}>
                    <h4>Movie App</h4>
                </div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>Home</li>
                    <li className={styles.navbar__item}>Add Movie</li>
                    <li className={styles.navbar__item}>Popular</li>
                    <li className={styles.navbar__item}>Login</li>
                    <li className={styles.navbar__item}>Register</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar