import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useState } from "react";

const Home = () => {
    return (
        <main>
            <Hero />
            <Movies />
        </main>
    )
}

export default Home
