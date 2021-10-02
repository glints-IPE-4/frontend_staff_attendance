import React, { useRef, useMemo, useState, useCallback } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const center = {
  lat: -6.271301641287552,
  lng: 106.79733939731577,
};
// -6.271301641287552, 106.79733939731577

function DraggableMarker() {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    [],
  );
  const toggleDraggable = useCallback(() => {
    setDraggable(d => !d);
  }, []);
  return (
    <div className='card'>
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable} aria-hidden='true'>
            {draggable ? 'move marker to office location' : 'Click here to setting office location'}
          </span>
        </Popup>
      </Marker>
    </div>
  );
}

const SetOfficeLocation = () => (
  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
    <DraggableMarker />
  </MapContainer>
);

export default SetOfficeLocation;
