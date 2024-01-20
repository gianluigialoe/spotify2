import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams, Link, Routes, Route } from 'react-router-dom';
import SpotyDetails from './spotyDetails';


function SpotySearch() {
  const { searchTerm } = useParams();
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
        setSearchResults(data.data);
        navigate(`/artist/${searchTerm}`, { state: { searchResults: data.data } });
      } else {
        console.error('Errore nella richiesta API');
      }
    } catch (error) {
      console.error('Errore durante la ricerca', error);
    }
  };

  return (
    <div className='d-flex pt-5 bg-primary' style={{ width: '80%', height: '100vh', marginLeft: '20vh' }}>
      <div className="list-container d-flex flex-wrap">
        {searchResults.slice(0, 8).map((result, index) => (
          <div key={result.id} style={{ margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', flexBasis: '22%', flexGrow: 1 }}>
            <ul style={{ listStyle: 'none', marginBottom: '10px' }}>
              <li>
                <p>{index + 1}</p>
              </li>
            </ul>
            {/* Utilizza Link invece di <a> per la navigazione interna */}
            <Link to={`/spotyDetails/${result.id}`}>
              <img
                className="img-fluid"
                src={result.album.cover_medium}
                alt={result.title}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Link>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{result.title}</p>
              <p>{result.album.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* Aggiungi contenuto o componenti aggiuntivi se necessario */}
      </div>

      {/* Aggiungi le rotte per SpotyDetails */}
      <Routes>
        <Route path="/:spotyDetails/:id" element={<SpotyDetails />} />
      </Routes>
    </div>
  );
}

export default SpotySearch;