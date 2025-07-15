import React, { useEffect } from 'react';

const VisitorMap = () => {
  useEffect(() => {
    // Create and append the visitor map script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'mapmyvisitors';
    script.src = 'https://mapmyvisitors.com/map.js?cl=aaaaaa&w=a&t=tt&d=TGXWDgSi-FdI2zc3Qlu8KZJXMqL3IPd0yoePjMqs9sY&co=ffffff&ct=aaaaaa';
    
    // Find the container and append the script
    const mapContainer = document.getElementById('visitor-map-container');
    if (mapContainer) {
      mapContainer.appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{marginTop: '40px'}}>
      <br />
      <hr />
      <br />
      <div id="visitor-map-container" />
    </div>
  );
};

export default VisitorMap;