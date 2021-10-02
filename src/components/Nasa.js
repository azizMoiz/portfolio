import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { NASA_API_KEY, NASA_APOD_URL } from '../config';
import '../styles/Nasa.css';

const url = NASA_APOD_URL;
const api_key = NASA_API_KEY;

const Nasa = () => {
  ReactGA.pageview(window.location.pathname);
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchNASAData();
    async function fetchNASAData() {
      try {
        const response = await fetch(`${url}${api_key}`);
        const data = await response.json();
        console.log('NASA APOD data', data);
        setPhotoData(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <div className="nasa-photo">
        {photoData.media_type === 'image' ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{String(new Date(photoData.date))}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
    </>
  );
};

export default Nasa;
