import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { Div, FlexDiv, Img } from "../../styles/style";

const StyledLink = styled(Link)`
    color: ${(props) => props.color ? props.color : '#919699'};
    display: flex;
    text-decoration: none;
    padding: 20px 24px;
`

const MyPageNav = () => {
    const path = useLocation().pathname

    console.log(path)

    return (
        <FlexDiv width='190px' height='250px' padding='12px 0' borderRadius='30px' align='column-vertical-center' backgroundColor='white'>
            <StyledLink to="setting">   
                <Img src={require(path == '/myPage/setting' ? '../../img/setting_full.svg' : '../../img/setting.svg').default} margin='0 10px 0 0'/>
                <Div color={path == '/myPage/setting' ? '#51B7F6' : ''}>프로필 관리</Div>
            </StyledLink>
            <StyledLink to="clipping">
                <Img src={require(path == '/myPage/clipping' ? '../../img/star_full.svg' : '../../img/star.svg').default} margin='0 10px 0 0'/>
                <Div color={path == '/myPage/clipping' ? '#51B7F6' : ''}>스크랩</Div>
            </StyledLink>
            <StyledLink to="notice">
                <Img src={require(path == '/myPage/notice' ? '../../img/bell_full.svg' : '../../img/bell.svg').default} margin='0 10px 0 0'/>
                <Div color={path == '/myPage/notice' ? '#51B7F6' : ''}>알림</Div>
            </StyledLink>
        </FlexDiv>
    )
}

export default MyPageNav