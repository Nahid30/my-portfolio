import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';


function App() {

  return (
    <div>
      <Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
        </Routes>
        <Footer></Footer>
      </Navbar>


    </div>
  );
}

export default App;
