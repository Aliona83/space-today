import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ApodViewer = () => {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const formattedDate = date.toISOString().split('T')[0];
    fetch(`http://localhost:5000/api/apod?date=${formattedDate}`)
      .then(res => res.json())
      .then(data => setApod(data))
      .catch(err => console.error('Error fetching APOD:', err));
  }, [date]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title"> Astronomy Picture of the Day</h2>
        <DatePicker
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          className="form-control my-3"
          maxDate={new Date()}
        />
        {apod ? (
          <>
            {apod.media_type === 'image' ? (
              <img src={apod.url} alt={apod.title} className="img-fluid mb-3" />
            ) : (
              <iframe
                title="apod-video"
                src={apod.url}
                width="100%"
                height="400"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
            <h5>{apod.title}</h5>
            <p>{apod.explanation}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ApodViewer;
