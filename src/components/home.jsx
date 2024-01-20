import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const apikey = 'eaeaee6824msh8f91d70e2444736p147278jsn4bcf449c05de';
const apiHost = 'deezerdevs-deezer.p.rapidapi.com'

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen',
        headers: {
          'X-RapidAPI-Key': apikey,
          'X-RapidAPI-Host': apiHost
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data.data.slice(0, 8) || []);
      } catch (error) {
        console.error('Errore nella richiesta API', error);
        setError('Si è verificato un errore durante il recupero dei dati.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (<Container className='align-content-end bg-primary' style={{ width: '80%', height: '100vh', marginLeft: '55vh' }}>


      <Row className="justify-content-start">
        <Col xs="12" className="text-left">
          <h1 className="mt-4 mb-4">Queen</h1>
        </Col>
      </Row>
      <Row className="justify-content-center flex-grow-1">
        {data.map((item) => (
          <Col key={item.artist.id} md={3} className="mb-4">
            <Card style={{ width: '14rem', cursor: 'pointer' }} onClick={() => window.open(item.link, '_blank')}>
              <Card.Img
                variant="top"
                src={item.album.cover_medium}
                alt={item.title}
                style={{ maxHeight: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
