import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Header, Div, FlexDiv } from "../../styles/style";

const StyledLink = styled(Link)`
    text-decoration: none;
`

const HeaderComponent = (props) => {
    const { isMobile } = props

    return (
        <Header display='flex' justifyContent={isMobile ? 'center' : 'space-between'} align='row-vertical-center' position='fixed' width='100%' height='70px' borderBottom='1px solid #F0F3F5' backgroundColor='white'>
            <StyledLink to="/">
                <Div cursor='pointer' width='240px' color='#0097F5' fontFamily='Pyunji R' fontSize='30px' fontWeight='bolder' textAlign='center'>EODILO</Div>
            </StyledLink>
            {
            !isMobile && 
            <FlexDiv justifyContent='space-around' align='row-vertical-center' width='370px' margin='0 20px 0 0'>
                <StyledLink to="/schedule">
                    <Div cursor='pointer' color='black' fontSize='14px'>PLAN</Div>
                </StyledLink>
                <StyledLink to="/community">
                    <Div cursor='pointer' color='black' fontSize='14px'>COMMUNITY</Div>
                </StyledLink>
                <StyledLink to="/myPage/setting">
                    <Div cursor='pointer' color='black' fontSize='14px'>MY PAGE</Div>
                </StyledLink>
            </FlexDiv>
            }
        </Header>
    )
}

export default HeaderComponent