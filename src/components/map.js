import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState, useCallback, useEffect } from 'react';

const containerStyle = {
    width: '100%',
    height: '200px'
};


function Mapa() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAdkiyV4v-oD3DwAsddnRBe-oig6rbjlIA"
    })

    useEffect(() => {
        getGeo()
    }, [])
    

    const [map, setMap] = useState(null)
    const [coordinats, setCoordinats] = useState({
        lat: 0,
        lng: 0,
        
    })

    const getGeo = () => {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    const showPosition = (position) => {
        setCoordinats({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
    }

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(coordinats);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={coordinats}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <></>
            </GoogleMap>
            
        </div>
    ) : <></>
}

export default React.memo(Mapa)