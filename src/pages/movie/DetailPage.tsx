import { Link, useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { useEffect, useState } from "react";
import ENDPOINT from '../../utils/constants/endpoint';
import axios from "axios";

const DetailPage = () => {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();

    const fetchRecomMovie = async () => {
        const response = await axios(ENDPOINT.RECOMMENDATION(id));
        setMovies(response.data.results);
    }
    useEffect(() => {
        fetchRecomMovie();
    }, [id])

    return (
        <div>
            <DetailMovie />
            <Movies movies={movies} title="Recommendation" />
        </div>

    )
}

export default DetailPage;