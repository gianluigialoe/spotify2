import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'eaeaee6824msh8f91d70e2444736p147278jsn4bcf449c05de',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Risposta della rete non valida');
      }

      const data = await response.json();
      console.log('Risposta della fetch:', data);
      navigate(`/artista/${searchTerm}`, { state: { searchResults: data.data } });
    } catch (error) {
      console.error('Errore nel recupero dei dati:', error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type="submit">go</button>
      </form>
    </div>
  );
};

export default Search;
