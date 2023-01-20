import React from "react";
import styled from "styled-components";
import { Header, Div, FlexDiv } from "../../styles/style";

const HeaderComponent = () => {
    return (
        <Header display='flex' justifyContent='space-between' align='row-vertical-center' position='fixed' width='100%' height='70px' >
            <Div width='240px' color='#0097F5' fontFamily='Pyunji R' fontSize='34px' fontWeight='bolder' textAlign='center'>EODILO</Div>
            <FlexDiv justifyContent='space-around' align='row-vertical-center' width='370px'>
                <Div fontFamily='NanumGothic' fontSize='14px'>PLAN</Div>
                <Div fontFamily='NanumGothic' fontSize='14px'>COMMUNITY</Div>
                <Div fontFamily='NanumGothic' fontSize='14px'>MY PAGE</Div>
            </FlexDiv>
        </Header>
    )
}

export default HeaderComponent