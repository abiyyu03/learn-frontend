import "./App.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
/**
 * Import Component Hello
 */
import Hello from "./components/Hello";
import Main from "./components/Main";
import Link from "./components/Link";

const App = () => {
  return (
    <div>
      <Topbar />
      <h2>This is Create React App</h2>
      <Main namaLengkap="Abiyyu Cakra" />
      {/*
        Memanggil Component Hello.
        Mengirim props name. 
       */}
      <Hello name="Abiyyu" role="Backend Engineer"/>
      <Link />
      <Footer/>
    </div>
  );
}

export default App;
