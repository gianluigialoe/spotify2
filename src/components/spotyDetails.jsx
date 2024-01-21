import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const SpotyDetails = ({ tracks }) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${encodeURIComponent(id)}`, {
          headers: {
            'X-RapidAPI-Key': 'eaeaee6824msh8f91d70e2444736p147278jsn4bcf449c05de',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Dati della fetch:', data);
          setDetails(data);
        } else {
          console.error('Errore nella richiesta API');
        }
      } catch (error) {
        console.error('Errore durante il recupero dei dettagli', error);
      }
    };

    fetchDetails();
  }, [id]);
  return (
    <div className="bg-primary" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {details && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {details.artist && details.artist.picture && <img src={details.artist.picture} alt="Artist" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '20px' }} />}
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '20px', color: 'white' }}>{details.title || 'Title not available'}</p>
            <div style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
              {details.tracks.data && details.tracks.data.map((track, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <i className="bi bi-heart p-2" />
                  <p style={{ marginLeft: '10px', fontSize: '14px' }}>{track.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

   


};

export default SpotyDetails;
