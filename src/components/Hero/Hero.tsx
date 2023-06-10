import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Button from '../ui/Button/Button';
import styled from 'styled-components';
import axios from "axios";
import ENDPOINT from '../../utils/constants/endpoint';

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
            flex-basis: 45%;
        }
        
    }
`

const Hero = () => {
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre: any) => genre.name).join(", ");
    const idTrailer = (movie && movie.videos.results[0].key) || ``;

    const fetchTrendingMovie = async () => {
        const response = await axios(ENDPOINT.TRENDING);

        return response.data.results[0]
    }

    const getDetailMovie = async () => {
        const trendingMovie = await fetchTrendingMovie();
        const id = trendingMovie.id;

        const response = await axios(ENDPOINT.DETAIL(id));

        setMovie(response.data);
    }
    useEffect(() => {
        getDetailMovie();
    }, []);

    return (
        <StyledHero>
            <main>
                <div className="hero_left">
                    <h3>{movie.title}</h3>
                    <p className="hero_genre">{genres}</p>
                    <p className="hero_description">{movie.overview}</p>
                    <Button as="a" href={`https://youtube.com/watch?v=${idTrailer}`} target="_blank" variant="primary" buttonSize="md">Watch Trailer</Button>
                </div>
                <div className="hero_right">
                    <img src={movie.poster || `http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
                </div>
            </main>
        </StyledHero>
    );
}

export default Hero;