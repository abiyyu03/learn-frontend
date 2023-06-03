import axios from "axios";
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';

const Popular = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY = "033e6e1f649a29424db2b7fc33aa5271";
    const URL = `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    const fetchPopularMovie = async () => {
        const response = await axios(URL);

        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchPopularMovie();
    }, []);

    return (
        <div>
            <Hero />
            <Movies movies={movies} title="Popular"></Movies>
        </div>
    )
};

export default Popular;