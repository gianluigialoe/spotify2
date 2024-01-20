import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const SpotyDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    console.log('ID:', id); // Aggiunto console log per l'id

    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Dati della fetch:', data); // Aggiunto console log per la risposta della fetch
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
        <div>
          <Image
            src={details.album.cover_medium}
            alt={details.title}
            fluid
            style={{ maxWidth: '500%', height: 'auto' }}
          />
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>{details.title}</p>
            <p style={{ color: 'white' }}>{details.album.title}</p>
            {/* Aggiungi altri dettagli se necessario */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotyDetails;