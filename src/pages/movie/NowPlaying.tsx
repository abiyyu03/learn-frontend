import axios from "axios";
import { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINT from '../../utils/constants/endpoint';
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/movieSlice/movieSlice";

const NowPlaying = () => {
    const dispatch = useDispatch();

    const fetchNowPlayingMovie = async () => {
        const response = await axios(ENDPOINT.NOW_PLAYING);
        const movies = response.data.results;

        dispatch(updateMovies(movies));
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