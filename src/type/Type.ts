interface ButtonPropsType {
    variant?: string,
    colors?: Array<string>,
    buttonSize?: string,
    full?: any,
    as?: string,
    href?: string,
    target?: string,
}

interface GenreType {
    id: number,
    name: string
}
interface ResultType {
    id: string,
    key: string,
}
interface VideosType {
    results: ResultType[],
}
interface MovieType {
    genres: GenreType[],
    videos: VideosType,
    poster_path: string,
    // results: ResultType,
    poster: string,
    overview: string,
    backdrop_path: string,
    title: string,
}
const initialStateValue = {
    genres: [],
    videos: {results:[]},
    poster_path: "",
    // results: '',
    poster: "",
    overview: "",
    title: "",
    backdrop_path: "",
}

export { initialStateValue }
export type {
    GenreType,
    MovieType,
    ButtonPropsType
}