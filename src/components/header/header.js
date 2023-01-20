import React from "react";
import { Header, Div, FlexDiv } from "../../styles/style";

const HeaderComponent = (props) => {
    const { isMobile } = props

    return (
        <Header display='flex' justifyContent={isMobile ? 'center' : 'space-between'} align='row-vertical-center' position='fixed' width='100%' height='70px' borderBottom='1px solid #F0F3F5'>
            <Div width='240px' color='#0097F5' fontFamily='Pyunji R' fontSize='32px' fontWeight='bolder' textAlign='center'>EODILO</Div>
            {
            !isMobile && 
            <FlexDiv justifyContent='space-around' align='row-vertical-center' width='370px' margin='0 20px 0 0'>
                <Div fontFamily='NanumGothic' fontSize='14px'>PLAN</Div>
                <Div fontFamily='NanumGothic' fontSize='14px'>COMMUNITY</Div>
                <Div fontFamily='NanumGothic' fontSize='14px'>MY PAGE</Div>
            </FlexDiv>
            }
        </Header>
    )
}

export default HeaderComponent