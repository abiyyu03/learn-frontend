import Home from './pages/Home'
import CreateMovie from './pages/movie/CreateMovie'
import NowPlaying from './pages/movie/NowPlaying'
import Popular from './pages/movie/Popular'
import TopRated from './pages/movie/TopRated'
import Counter from './components/Counter/Counter'
import Layout from './Layout/Layout'
import './index.css'

import theme from "./utils/constants/theme";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/movie/create-movie" element={<CreateMovie />}></Route>
                        <Route path="/movie/now-playing" element={<NowPlaying />}></Route>
                        <Route path="/movie/popular" element={<Popular />}></Route>
                        <Route path="/movie/top-rated" element={<TopRated />}></Route>
                    </Routes>
                </Layout>
            </ThemeProvider>
        </>
    )
}

export default App;
