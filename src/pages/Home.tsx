import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";

const Main = () => {
  return (
    <main>
      <Hero />
      <Movies />
      <AddMovieForm />
    </main>  
  )
}

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />  
      <Footer />
    </div>
  )
}

export default Home
