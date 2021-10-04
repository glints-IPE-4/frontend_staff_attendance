import React, { useRef, useMemo, useState, useCallback } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';

const center = {
  lat: -6.271301641287552,
  lng: 106.79733939731577,
};

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

const SetOfficeLocation = props => {
  const { centering } = props;
  return (
    <MapContainer center={centering} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <DraggableMarker />
    </MapContainer>
  );
};

SetOfficeLocation.propTypes = {
  centering: PropTypes.string.isRequired,
};

export default SetOfficeLocation;
