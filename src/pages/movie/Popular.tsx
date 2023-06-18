import axios from "axios";
import { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINT from '../../utils/constants/endpoint';

const Popular = () => {
    const [movies, setMovies] = useState([]);

    const fetchPopularMovie = async () => {
        const response = await axios(ENDPOINT.POPULAR);

        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchPopularMovie();
    }, []);

    return (
        <div>
            <Hero />
            <Movies title="Popular"></Movies>
        </div>
    )
};

export default Popular;