import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import '../App.css'; // Import custom CSS from the correct directory

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Card key={movie.id} className="movie-card">
          <Card.Img variant="top" src={movie.image} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.genre}</Card.Text>
            <Card.Text>{movie.showtimes}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
