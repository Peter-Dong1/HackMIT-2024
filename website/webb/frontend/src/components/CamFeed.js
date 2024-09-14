import { useEffect, useRef } from 'react';

import Webcam from 'react-webcam';

export default function CamFeed({ onFetched }) {
  const webcamRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const img = webcamRef.current.getScreenshot();
      if (!img) return;

      // Send a base64 image to the backend (port 5000)
      fetch('http://localhost:5000/img-rec', {
        method: 'POST',
        body: img.split(',')[1]
      })
        .then((res) => res.json())
        .then((data) => onFetched(data))
        .catch((error) => console.error('Error:', error));
    }, 1000); // cycle 1 second
    return () => clearInterval(timer);
  }, [webcamRef]);

  return (
    <Webcam
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      height={600}
      width={600}
      style={{
        transform: 'scaleX(-1)', // This will flip the video horizontally
      }}
    />
  );
}
