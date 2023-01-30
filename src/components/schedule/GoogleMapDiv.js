import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 70px)'
};

const center = {
    lat: 37.5,
    lng: 127.523
};

const center2 = {
    lat: 37.5,
    lng: 127.323
};

const GoogleMapComponent = () => {
    const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY

    // 백엔드 스테이트에 정보 넣어두기
    // 일정 블록 만들어야 함
    // 검색 기능 구현해야함 -> 이건 최대한 블로그 따라서 만들자 .. 시간없
    // center 값, 순서대로 icon 들어가도록, 순서대로 lebel 붙도록
    // 순서대로 선 긋기 추가
    
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker
                    label="1"
                    icon={require('../../img/marker_pink.svg').default}
                    position={center}
                />
                <Marker
                    label="2"
                    icon={require('../../img/marker_pink.svg').default}
                    position={center2}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMapComponent