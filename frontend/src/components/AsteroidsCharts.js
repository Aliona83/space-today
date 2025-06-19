import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';



const AsteroidsCharts = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAsteroids = async () => {
      setLoading(true);
      const formattedDate = date.toISOString().split('T')[0];
      try {
       const res = await fetch(`https://space-today.onrender.com/api/asteroids?date=${formattedDate}`);



        const data = await res.json();
        setAsteroids(data);
      } catch (err) {
        console.error('Failed to load asteroid data:', err);
        setAsteroids([]);
      }
      setLoading(false);
    };

    fetchAsteroids();
  }, [date]);

  const chartData = asteroids.map((asteroid) => ({
    name: asteroid.name,
    diameter: asteroid.estimated_diameter.meters.estimated_diameter_max,
  }));

  return (
    <div className="container">
      <h3 className="mb-3">Asteroid Sizes</h3>
      <DatePicker
        selected={date}
        onChange={(d) => setDate(d)}
        className="form-control mb-4"
        maxDate={new Date()}
      />
      {loading ? (
        <p>Loading...</p>
      ) : chartData.length === 0 ? (
        <p>No data available for charts.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" hide />
            <YAxis />
            <Tooltip />
            <Bar dataKey="diameter" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AsteroidsCharts;
