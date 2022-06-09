import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </Navbar>

      


    </div>
  );
}

export default App;
