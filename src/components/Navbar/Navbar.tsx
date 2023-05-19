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
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/create-movie">Add Movie</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/popular">Popular</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar