import axios from "axios";
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';

const TopRated = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY = "033e6e1f649a29424db2b7fc33aa5271";
    const URL = `http://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

    const fetchTopRatedMovie = async () => {
        const response = await axios(URL);

        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchTopRatedMovie();
    }, []);

    return (
        <div>
            <Hero />
            <Movies movies={movies} title="Top Rated"></Movies>
        </div>
    )
};

export default TopRated;