import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '/src/index.css';  // Example CSS file  

const FindNearbyClinics = () => {
    const [clinics, setClinics] = useState([]);
    const [error, setError] = useState(null);
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: -34.397, lng: 150.644 }); // Default center  

    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const fetchNearbyClinics = (mapInstance) => {
        const service = new window.google.maps.places.PlacesService(mapInstance);
        service.nearbySearch(
            {
                location: mapCenter,
                radius: 5000, // Search radius in meters  
                type: ['spa', 'beauty_salon'], // Change types according to your need  
            },
            (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                    setClinics(results);
                } else {
                    setError('Failed to fetch clinics');
                }
            }
        );
    };

    const onMapLoad = (mapInstance) => {
        fetchNearbyClinics(mapInstance);
    };

    const onMapDragEnd = (mapInstance) => {
        const center = mapInstance.getCenter();
        setMapCenter({ lat: center.lat(), lng: center.lng() });
        fetchNearbyClinics(mapInstance);
    };

    return (

        <div className="find-nearby-clinics">
            <div className="findnearbyheader"> <h1> Find Nearby Clinic</h1></div>
            <LoadScript googleMapsApiKey="AIzaSyDdLT5LiQ5MEXGvXXQ5PEyhE1EWJE5LQ" libraries={['places']}>
                <GoogleMap
                    id="map"
                    mapContainerStyle={containerStyle}
                    center={mapCenter}
                    zoom={10}
                    onLoad={onMapLoad}
                    onDragEnd={onMapDragEnd}
                >
                    {clinics.map((clinic) => (
                        <Marker
                            key={clinic.place_id}
                            position={clinic.geometry.location}
                            onClick={() => setSelectedClinic(clinic)}
                        />
                    ))}
                    {selectedClinic && (
                        <InfoWindow
                            position={selectedClinic.geometry.location}
                            onCloseClick={() => setSelectedClinic(null)}
                        >
                            <div>
                                <h3>{selectedClinic.name}</h3>
                                <p>{selectedClinic.vicinity}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
            {error && <div className="error">Error: {error}</div>}
            <ul className="clinic-list">
                {clinics.map((clinic) => (
                    <li key={clinic.place_id} className="clinic-item">
                        <h3 className="clinic-name">{clinic.name}</h3>
                        {clinic.vicinity && <p className="clinic-address">{clinic.vicinity}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FindNearbyClinics;