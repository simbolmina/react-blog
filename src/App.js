import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/sign-up" exact element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
