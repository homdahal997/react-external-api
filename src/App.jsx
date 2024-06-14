import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        setIsLoading(true);
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchStarships();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <h1>STAR WARS STARSHIPS</h1>
      </div>
      <div className="starships">
        {starships.map((starship, index) => (
          <div key={index} className="card">
            <p>{starship.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;