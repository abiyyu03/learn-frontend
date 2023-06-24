import { createSlice } from '@reduxjs/toolkit';
import ENDPOINT from '../../utils/constants/endpoint';
import data from '../../utils/constants/data';

//buat slice
const movieSlice = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state: any, action: any) {
            state.movies.push(action.payload);
        },
        updateMovies(state: any, action: any) {
            state.movies = action.payload;
        },
    },
});

//generate action and reducer
const { addMovie, updateMovies } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addMovie, updateMovies };
export default moviesReducer