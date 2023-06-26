import axios from "axios";
import { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINT from '../../utils/constants/endpoint';
import { updateMovies } from "../../feature/movieSlice/movieSlice";
import { useDispatch } from "react-redux";

const TopRated = () => {
    const dispatch = useDispatch();

    const fetchTopRatedMovie = async () => {
        const response = await axios(ENDPOINT.TOP_RATED);
        const movies = response.data.results;

        dispatch(updateMovies(movies));
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