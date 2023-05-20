import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.navbar__brand}>
                    <h4>Movie App</h4>
                </div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <Link to="/" className={styles.navbar__link}>Home</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/create-movie" className={styles.navbar__link}>Add Movie</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/popular" className={styles.navbar__link}>Popular</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/login" className={styles.navbar__link}>Login</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/register" className={styles.navbar__link}>Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar