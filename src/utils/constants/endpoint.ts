const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const BASE_URL = `https://api.themoviedb.org/3`;

const ENDPOINT = {
    POPULAR:`${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    TRENDING:`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    NOW_PLAYING:`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    TOP_RATED:`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    DETAIL(id:any){
        return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    },
    RECOMMENDATION(id:any){
        return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`
    }
}

export default ENDPOINT;