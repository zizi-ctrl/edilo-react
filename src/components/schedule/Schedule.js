import React, { useState } from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import PlanNav from "./PlanNav";
import SearchNav from "./SearchNav";
import { Button, Div, Img } from "../../styles/style";

const Btn = styled(Button)`
  z-index: 200;

  &:hover{
    background-color: #EEEEEE;
  }
`

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
  
  const [ openPlan, setOpenPlan ] = useState(true)
  const [ openSearch, setSearch ] = useState(true)

  return (
    <React.Fragment>
      <Div width='100%' padding='70px 0 0 0'>
        {
          openPlan ?
          <PlanNav/> :
          <Btn width='36px' height='36px' position='fixed' backgroundColor='white' borderRadius='50%' border='1px solid #E1E4E6' left='160px' top='82px' cursor='pointer'>
            <Img cursor='pointer' src={require('../../img/schedule_menu.svg').default}/>
          </Btn>
        }
        {
          openSearch ?
          <SearchNav/> : 
          <Btn width='36px' height='36px' position='fixed' backgroundColor='white' borderRadius='50%' border='1px solid #E1E4E6' right='66px' top='82px' cursor='pointer'>
            <Img cursor='pointer' src={require('../../img/search2.svg').default}/>
          </Btn>
        }
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