import React from "react";
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 70px)'
};

const onLoad = polyline => {
    console.log('polyline: ', polyline)
};

const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 2
};

const options = {
    strokeOpacity: 0,
    fillOpacity: 0,
    zIndex: 1,
    icons: [
        {
            icon: lineSymbol,
            offset: "0",
            repeat: "12px"
        }
    ]
};

const center = {
    lat: 35.65849864918091,
    lng: 139.7022513688183
};

const center2 = {
    lat: 37.5,
    lng: 127.323
};

const center3 = {
    lat: 37.6,
    lng: 127.323
};

const someCoords = [
    center, center2
]

const someCoords2 = [
    center2, center3
]

const GoogleMapComponent = () => {
    const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY

    // 백엔드 스테이트에 정보 넣어두기
    // 일정 블록 만들어야 함
    // 검색 기능 구현해야함 -> 이건 최대한 블로그 따라서 만들자 .. 시간없
    // center 값, 순서대로 icon 들어가도록, 순서대로 lebel 붙도록
    // 순서대로 선 긋기 추가
    // 

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker
                    label="1"
                    icon={{
                        url: require('../../img/marker_attraction.svg').default,
                        scaledSize: { width: 30, height: 30 },
                        anchor: { x: 15, y: 15 }
                    }}
                    position={center}
                />
                <Marker
                    label="2"
                    icon={{
                        url: require('../../img/marker_attraction.svg').default,
                        scaledSize: { width: 30, height: 30 },
                        anchor: { x: 15, y: 15 }
                    }}
                    position={center2}
                />
                <Marker
                    label="3"
                    icon={{
                        url: require('../../img/marker_attraction.svg').default,
                        scaledSize: { width: 30, height: 30 },
                        anchor: { x: 15, y: 15 }
                    }}
                    position={center3}
                />
                <Polyline
                    onLoad={onLoad}
                    path={someCoords}
                    options={options}
                />
                <Polyline
                    onLoad={onLoad}
                    path={someCoords2}
                    options={options}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMapComponent