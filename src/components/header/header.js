import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Header, Div, FlexDiv } from "../../styles/style";
import { isLoginState } from "../../recoil/state"
import { useRecoilState } from "recoil";

const StyledLink = styled(Link)`
    text-decoration: none;
`

const HeaderComponent = (props) => {
    const { isMobile } = props
    const [login, setLogin] = useState('')

    const [isLogin, setIsLogin] = useRecoilState(isLoginState)

    const [profileClick, setProfileClick] = useState(false)
    const outside = useRef()

    const profileShowEvnet = () => {
        setProfileClick(true)
    }

    const profileHideEvent = () => {
        setProfileClick(false)
    }

    const logoutEvent = () => {
        setProfileClick(false)
        sessionStorage.clear()
        setIsLogin(sessionStorage.getItem('isLogin'))
    }


    return (
        <Header display='flex' justifyContent={isMobile ? 'center' : 'space-between'} align='row-vertical-center' position='fixed' width='100%' height='70px' borderBottom='1px solid #F0F3F5' backgroundColor='white' zIndex='10000'>
            <StyledLink to="/">
                <Div cursor='pointer' width='240px' color='mainColor' fontFamily='Pyunji R' fontSize='30px' fontWeight='bolder' textAlign='center'>EODILO</Div>
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
                    {
                        isLogin ?
                            <React.Fragment>
                                <Div cursor='pointer' color='black' fontSize='14px' onClick={profileShowEvnet}>PROFILE</Div>
                                {
                                    profileClick &&
                                    <FlexDiv flexDirection='column' position='absolute' backgroundColor='white' right='32px' top='68px' padding='4px 18px' borderRadius='0 0 12px 12px' onMouseLeave={profileHideEvent}>
                                        <StyledLink to="/myPage/setting" onClick={profileHideEvent}>
                                            <Div cursor='pointer' color='black' fontSize='14px' padding='8px 0'>MY PAGE</Div>
                                        </StyledLink>
                                        <Div cursor='pointer' color='black' fontSize='14px' padding='18px 0' onClick={logoutEvent}>LOG OUT</Div>
                                    </FlexDiv>
                                }
                            </React.Fragment>
                            :
                            <StyledLink to="/login">
                                <Div cursor='pointer' color='black' fontSize='14px'>LOG IN</Div>
                            </StyledLink>
                    }
                </FlexDiv>
            }
        </Header>
    )
}

export default HeaderComponent