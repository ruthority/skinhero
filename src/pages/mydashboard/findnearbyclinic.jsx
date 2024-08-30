

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const FindNearbyClinics = () => {
    const [clinics, setClinics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: -34.397, // Set initial latitude  
        lng: 150.644 // Set initial longitude  
    };

    useEffect(() => {
        const fetchClinics = async () => {
            try {
                // Replace with your API endpoint returning clinics data  
                const response = await fetch('https://example.com/api/clinics');
                if (!response.ok) {
                    throw new Error('Failed to fetch clinics');
                }
                const data = await response.json();
                setClinics(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClinics();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Define the markers for clinics based on their locations  
    const markers = clinics.map((clinic) => ({
        id: clinic.id,
        name: clinic.name,
        address: clinic.address,
        lat: clinic.location.lat, // Assume your clinic data has a location object with lat and lng  
        lng: clinic.location.lng
    }));

    return (
        <div>
            <h1>Find Nearby Skin Clinics</h1>
            <LoadScript googleMapsApiKey="AIzaSyDdLT5LiQ5MEX-GvXXQ5PEy-hE1EWJE5LQ"> {/* Replace with your Google Maps API Key */}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center} // You can set the center based on user location or the first clinic's location  
                    zoom={10}
                >
                    {markers.map(marker => (
                        <Marker
                            key={marker.id}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            title={marker.name}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
            <ul>
                {clinics.map((clinic) => (
                    <li key={clinic.id}>
                        <h3>{clinic.name}</h3>
                        <p>{clinic.address}</p>
                        <p>{clinic.contact}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FindNearbyClinics;