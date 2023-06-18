import { createSlice } from '@reduxjs/toolkit';
import data from "../../utils/constants/data"
import ENDPOINT from '../../utils/constants/endpoint';

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
    },
});

//generate action and reducer
const { addMovie } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addMovie };
export default moviesReducer