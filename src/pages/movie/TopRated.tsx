import axios from "axios";
import { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINT from '../../utils/constants/endpoint';

const TopRated = () => {
    const [movies, setMovies] = useState([]);

    const fetchTopRatedMovie = async () => {
        const response = await axios(ENDPOINT.TOP_RATED);

        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchTopRatedMovie();
    }, []);

    return (
        <div>
            <Hero />
            <Movies title="Top Rated"></Movies>
        </div>
    )
};

export default TopRated;