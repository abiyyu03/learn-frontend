import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Button from '../ui/Button/Button';
import styled from 'styled-components';

const StyledHero = styled.section`
    margin: 1rem;

    main {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
    .hero_left {
        margin-bottom: 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }
    h3 {
        color: #F72585;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }
    .hero_genre {
        color: #b5179e;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }
    
    .hero_description {
        color: #64748b;
        margin-bottom: 1rem;
    }
    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;
    
        main {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }
    
        .hero_left {
            flex-basis: 40%;
        }
        
    }
`

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
        <StyledHero>
            <main>
                <div className="hero_left">
                    <h3>{movie.Title}</h3>
                    <p className="hero_genre">{movie.Genre}</p>
                    <p className="hero_description}">{movie.Plot}</p>
                    <Button variant="primary" buttonSize="md">Watch</Button>
                </div>
                <div className="hero_right">
                    <img src={movie.Poster} alt="" />
                </div>
            </main>
        </StyledHero>
    );
}

export default Hero;