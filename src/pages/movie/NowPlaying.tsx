import axios from "axios";
import { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINT from '../../utils/constants/endpoint';

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);

    const fetchNowPlayingMovie = async () => {
        const response = await axios(ENDPOINT.NOW_PLAYING);
        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchNowPlayingMovie();
    }, []);

    return (
        <div>
            <Hero />
            <Movies title="Now Playing" />
        </div>
    )
};

export default NowPlaying;