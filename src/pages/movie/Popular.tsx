import axios from "axios";
import { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINT from '../../utils/constants/endpoint';
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/movieSlice/movieSlice";

const Popular = () => {
    const dispatch = useDispatch();

    const fetchPopularMovie = async () => {
        const response = await axios(ENDPOINT.POPULAR);
        const movies = response.data.results;
        dispatch(updateMovies(movies));
        // setMovies(response.data.results);
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