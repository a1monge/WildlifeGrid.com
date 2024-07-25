// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet for custom icons
import prairieDogIcon from '../img/prairie_dog.png'; // Adjust the path to your image

// Define the custom icon
const customIcon = new L.Icon({
    iconUrl: prairieDogIcon,
    iconSize: [20, 32], // Size of the icon
    iconAnchor: [10, 32], // Anchor point of the icon
    popupAnchor: [0, -32], // Popup anchor point
});

const Map = () => {
    const markers = [
        { position: [33.576698, -101.855072], title: "Praire_Dog_Lubbock" },
        { position: [31.845682, -102.367645], title: "Praire_Dog_Odessa" },
        { position: [28.63528, -106.08889], title: "Praire_Dog_Chihuahua" },
        { position: [33.5842, -102.3700], title: "Praire_Dog_Levelland" },
        { position: [32.2393, -101.4718], title: "Praire_Dog_Big_Spring" },
        { position: [30.358494, -103.661694], title: "Praire_Dog_Alpine" },
    ];

    return (
        <MapContainer center={[40.586258, -98.389870]} zoom={5} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.position} icon={customIcon}>
                    <Popup>{marker.title}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
