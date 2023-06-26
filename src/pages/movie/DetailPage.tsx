import { Link, useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { useEffect, useState } from "react";
import ENDPOINT from '../../utils/constants/endpoint';
import axios from "axios";
import { updateMovies } from "../../feature/movieSlice/movieSlice";
import { useDispatch } from "react-redux";

const DetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchRecomMovie = async () => {
        const response = await axios(ENDPOINT.RECOMMENDATION(id));
        const movies = response.data.results;
        dispatch(updateMovies(movies));
    }
    useEffect(() => {
        fetchRecomMovie();
    }, [id])

    return (
        <div>
            <DetailMovie />
            <Movies title="Recommendation" />
        </div>

    )
}

export default DetailPage;