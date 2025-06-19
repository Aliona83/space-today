import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const ApodViewer = () => {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const formattedDate = date.toISOString().split('T')[0];
   fetch(`https://space-today.onrender.com/api/apod?date=${formattedDate}`)

      .then(res => res.json())
      .then(data => setApod(data))
      .catch(err => console.error('Error fetching APOD:', err));
  }, [date]);

  return (
    <div className="container">
    <div className="row align-items-center justify-content-between mb-4">
  <div className="col-md-8">
    <h2 className="mb-0">Astronomy Picture of the Day</h2>
  </div>
   <div className="col-md-4 text-md-end text-start mt-3 mt-md-0">
        <DatePicker
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          className="form-control my-3"
          maxDate={new Date()}
        />
     </div>
     </div>
        {apod ? (
          <>
          <div className="row justify-content-center">
  <div className="col-md-10">
    <div className="media-wrapper">
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
    </div>
  </div>
</div>
            <h5>{apod.title}</h5>
            <p>{apod.explanation}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
   
  );
};

export default ApodViewer;
