import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SpotySearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, [location.state]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        navigate(`/artist/${searchTerm}`, { state: { searchResults: data.data } });
      } else {
        console.error('Errore nella richiesta API');
      }
    } catch (error) {
      console.error('Errore durante la ricerca', error);
    }
  };

  return (
    <div className='d-flex pt-5' style={{ width: '80%', height: '100vh', marginLeft: '20vh' }}>
      <div className="list-container d-flex flex-column">
        {searchResults.map((result, index) => (
          <div key={result.id} style={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
            <ul style={{ listStyle: 'none', marginRight: '10px' }}>
              <li>
                <p>{index + 1}</p>
              </li>
            </ul>
            <a href="/">
              <img
                className="img-fluid"
                src={result.album.cover_medium}
                alt={result.title}
                style={{ maxWidth: '20%', height: 'auto' }}
              />
            </a>
            <div>
              <p>Titolo: {result.title}</p>
              <p>Album: {result.album.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* Aggiungi la barra di ricerca e il pulsante di invio */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SpotySearch;
