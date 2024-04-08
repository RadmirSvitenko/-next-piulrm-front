import React, { useCallback, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ModalMapInfo from '../modalMapInfo/Component';
import L from 'leaflet';
import { API } from '../../requester';

const Map = () => {
  const [pointsData, setPointsData]: any = useState([]);

  let position: any = [42.52, 74.34];

  const [visibility, setVisibility]: any = useState(false);
  const [id, setId]: any = useState();

  const handleGetPoints = useCallback(async () => {
    const response = await API.get('/points/');
    const data = response.data;
    setPointsData(data);
  }, []);

  const customIconActive = L.icon({
    iconUrl: '/map-marker-active.svg',
    iconSize: [40, 50],
    iconAnchor: [20, 25],
  });

  const customIconPassive = L.icon({
    iconUrl: '/map-marker-passive.svg',
    iconSize: [32, 40],
    iconAnchor: [16, 20],
  });

  const handleMarkerClick = (id: number) => {
    setVisibility(true);
    setId(id);
  };

  useEffect(() => {
    handleGetPoints();
  }, [handleGetPoints]);

  return (
    <div className={'w-full h-full relative z-10 p-2.5'}>
      <MapContainer
        className={'z-10'}
        center={position}
        zoom={window.innerWidth < 600 ? 10 : 8}
        scrollWheelZoom={false}
        style={{ minHeight: '800px', padding: '20px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pointsData?.map((place: any, index: number) => (
          <Marker
            key={index}
            position={[place?.latitude, place?.longitude]}
            eventHandlers={{
              click: () => handleMarkerClick(place?.id),
            }}
            icon={id === place?.id ? customIconActive : customIconPassive}
          ></Marker>
        ))}
      </MapContainer>

      {visibility && <ModalMapInfo id={id} setVisibility={setVisibility} />}
    </div>
  );
};

export default Map;
