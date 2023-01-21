import React from "react";
import { Link } from "react-router-dom";

import { Header, Div, FlexDiv } from "../../styles/style";

const HeaderComponent = (props) => {
    const { isMobile } = props

    return (
        <Header display='flex' justifyContent={isMobile ? 'center' : 'space-between'} align='row-vertical-center' position='fixed' width='100%' height='70px' borderBottom='1px solid #F0F3F5'>
            <Link to="/">
                <Div width='240px' color='#0097F5' fontFamily='Pyunji R' fontSize='30px' fontWeight='bolder' textAlign='center'>EODILO</Div>
            </Link>
            {
            !isMobile && 
            <FlexDiv justifyContent='space-around' align='row-vertical-center' width='370px' margin='0 20px 0 0'>
                <Link to="/">
                    <Div fontFamily='NanumGothic' fontSize='14px'>PLAN</Div>
                </Link>
                <Link to="/">
                    <Div fontFamily='NanumGothic' fontSize='14px'>COMMUNITY</Div>
                </Link>
                <Link to="/">
                    <Div fontFamily='NanumGothic' fontSize='14px'>MY PAGE</Div>
                </Link>
            </FlexDiv>
            }
        </Header>
    )
}

export default HeaderComponent