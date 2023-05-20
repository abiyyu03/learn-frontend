import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    const [movie, setMovie] = useState("");

    useEffect(() => {
        const fetchMovieToHero = async () => {
            const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
            const response = await fetch(url);
            const data = await response.json();

            setMovie(data);
        }
        fetchMovieToHero();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.hero__left}>
                    <h3 className={styles.hero__title}>{movie.Title}</h3>
                    <p className={styles.hero__genre}>{movie.Genre}</p>
                    <p className={styles.hero__description}>{movie.Plot}</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img src={movie.Poster} alt="" className={styles.hero__image} />
                </div>
            </div>
        </div>
    );
}

export default Hero;