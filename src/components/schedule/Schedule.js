import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import PlanNav from "./PlanNav";
import SearchNav from "./SearchNav";
import { Button, Div, Img } from "../../styles/style";
import { openPlanNavState, openSearchNavState } from "../../recoil/state";
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
    const openSearchEvent = () => setOpenSearch(true)

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
                    openSearch ?
                        <SearchNav /> :
                        <Btn width='36px' height='36px' position='fixed' backgroundColor='white' borderRadius='50%' border='1px solid #E1E4E6' right='66px' top='82px' cursor='pointer' onClick={openSearchEvent}>
                            <Img cursor='pointer' src={require('../../img/search2.svg').default} />
                        </Btn>
                }
            </Div>
            <GoogleMapComponent/>
        </React.Fragment>
    )

}

export default Schedule