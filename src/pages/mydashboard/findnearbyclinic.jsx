// src/pages/FindNearbyClinics.jsx  

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const locations = [
    {
        name: "Abuja",
        address: "No. 35 Pope John Paul II Street, Off Gana Street, Maitama, Abuja, Nigeria.",
        position: { lat: 9.05785, lng: 7.49508 },  // Coordinates for Abuja  
    },
    {
        name: "Lagos",
        address: "No. 8 Aromire Road (formerly Rumsey road), MTN area, Old Ikoyi, Lagos state.",
        position: { lat: 6.5244, lng: 3.3722 },  // Coordinates for Lagos  
    },
    {
        name: "Port Harcourt",
        address: "No.12 Alalibo Avenue, Off Mbiama street, Old GRA, Port Harcourt, Rivers State.",
        position: { lat: 4.8153, lng: 7.0499 },  // Coordinates for Port Harcourt  
    },
];

const FindNearbyClinics = () => {
    const mapContainerStyle = {
        height: "400px",
        width: "100%",
    };

    const center = {
        lat: 6.5244, // Center the map somewhere in Nigeria  
        lng: 3.3722,
    };

    return (
        <div>
            <h1>Find Nearby Clinics</h1>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={5}
                    center={center}
                >
                    {locations.map((location, index) => (
                        <Marker
                            key={index}
                            position={location.position}
                            label={location.name}
                            onClick={() => window.alert(location.address)}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
            <div>
                <h2>Locations</h2>
                <ul>
                    {locations.map((location, index) => (
                        <li key={index}>
                            <strong>{location.name}</strong>: {location.address}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FindNearbyClinics;