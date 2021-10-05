import React, { useRef, useMemo, useState, useCallback } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';

const DraggableMarker = props => {
  const { position, setPosition } = props;
  const [draggable, setDraggable] = useState(false);
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
};

DraggableMarker.propTypes = {
  position: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
  setPosition: PropTypes.func.isRequired,
};

const SetOfficeLocation = props => {
  const { position, setPosition, center } = props;
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <DraggableMarker position={position} setPosition={setPosition} />
    </MapContainer>
  );
};
SetOfficeLocation.propTypes = {
  center: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  position: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
  setPosition: PropTypes.func.isRequired,
};

export default SetOfficeLocation;
