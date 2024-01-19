import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/myNavBar';
import logo from '../src/assets/logo/Spotify_Logo.png';
import Footer from './components/footer';
import image1 from '../src/assets/playerbuttons/Play.png';
import image2 from '../src/assets/playerbuttons/Next.png';
import image3 from '../src/assets/playerbuttons/Previous.png';
import image4 from '../src/assets/playerbuttons/Repeat.png';
import image5 from '../src/assets/playerbuttons/Shuffle.png';
import Home from './components/home';
import Header from './components/header';
import SpotySearch from './components/Artist';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column" style={{ height: '100vh' }}>
        <MyNavbar img={logo} />
        <Header />

        <Routes>
          <Route path="/" element={<div className=""><Home /></div>} />
          <Route path="/artist/:searchTerm" element={<SpotySearch />} /> {/* Aggiornato il percorso */}
        </Routes>

        <Footer
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          image5={image5}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
