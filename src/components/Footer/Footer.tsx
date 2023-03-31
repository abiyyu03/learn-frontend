import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer__title}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>@abiyyu03</p>
            </footer>
        </div>
    )
}

export default Footer