import React, { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { GoogleMap, LoadScript, Marker, Polyline, Autocomplete } from '@react-google-maps/api';
import styled from "styled-components";

import PlanNav from "./PlanNav";
import { Button, Div, Img, Input, FlexDiv } from "../../styles/style";
import { mapApiObjState, mapState, openPlanNavState, openSearchNavState } from "../../recoil/state";
import GoogleMapComponent from "./GoogleMapDiv";


const Btn = styled(Button)`
  z-index: 200;

  &:hover{
    background-color: #EEEEEE;
  }
`

const Schedule = () => {
    const [openPlan, setOpenPlan] = useRecoilState(openPlanNavState)
    const [openSearch, setOpenSearch] = useRecoilState(openSearchNavState)

    const openPlanEvent = () => setOpenPlan(true)
    const openSearchEvent = () => openSearch ? setOpenSearch(false) : setOpenSearch(true)


    return (
        <React.Fragment>
            <Div width='100%' padding='70px 0 0 0'>
                {
                    openPlan ?
                        <PlanNav /> :
                        <Btn width='36px' height='36px' position='fixed' backgroundColor='white' borderRadius='50%' border='1px solid #E1E4E6' left='160px' top='82px' cursor='pointer' onClick={openPlanEvent}>
                            <Img cursor='pointer' src={require('../../img/schedule_menu.svg').default} />
                        </Btn>
                }
                {
                    !openSearch &&
                    <Btn width='36px' height='36px' position='fixed' backgroundColor='white' borderRadius='50%' border='1px solid #E1E4E6' right='66px' top='82px' cursor='pointer' onClick={openSearchEvent}>
                        <Img cursor='pointer' src={require('../../img/search2.svg').default} />
                    </Btn>
                }
            </Div>
            {/* 구글맵 기능 (지도, 마커, 검색) 쓰는 컴포넌트 분리 & PlanNav 리렌더링 방지 */}
            <GoogleMapComponent/>
        </React.Fragment>
    )

}

export default Schedule