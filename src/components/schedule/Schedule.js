import React from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { Div } from "../../styles/style";

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 70px)'
};

const center = {
  lat: 37,
  lng: 127.523
};

const Schedule = () => {
  const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY

  return (
    <React.Fragment>
      <Div width='100%' padding='70px 0 0 0'>
       <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
       </Div>
    </React.Fragment>
  )

}

export default Schedule