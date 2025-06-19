import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const AsteroidTable = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAsteroids = async () => {
      setLoading(true);
      setError(null);
      const formattedDate = date.toISOString().split('T')[0];

      try {
        const res = await fetch(`https://space-today.onrender.com/api/asteroids?date=${formattedDate}`);

        const data = await res.json();
        setAsteroids(data);
      } catch (err) {
        setError('Failed to fetch asteroid data.');
      }
      setLoading(false);
    };

    fetchAsteroids();
  }, [date]);

  return (
    <div className="asteroid-table-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Near-Earth Asteroids</h2>
        <DatePicker
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          className="form-control w-auto"
          maxDate={new Date()}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Diameter (m)</th>
                <th>Speed (km/h)</th>
                <th>Miss Distance (km)</th>
              </tr>
            </thead>
            <tbody>
              {asteroids.map((asteroid) => {
                const diameter = asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(1);
                const speed = parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(0);
                const distance = parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(0);
                return (
                  <tr key={asteroid.id}>
                    <td>{asteroid.name}</td>
                    <td>{Number(diameter).toLocaleString()}</td>
                    <td>{Number(speed).toLocaleString()}</td>
                    <td>{Number(distance).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AsteroidTable;