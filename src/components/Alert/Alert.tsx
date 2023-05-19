import styles from "../AddMovieForm/AddMovieForm.module.css";

const Alert = (props: any) => {
    const { children } = props;

    return (
        <span className={styles.form__text_error}>{children}</span>
    )
}

export default Alert;