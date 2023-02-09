import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Header, Div, FlexDiv } from "../../styles/style";
import { isLoginState } from "../../recoil/state"
import { useRecoilValue } from "recoil";

const StyledLink = styled(Link)`
    text-decoration: none;
`

const HeaderComponent = (props) => {
    const { isMobile } = props
    const [login, setLogin] = useState('')

    const isLogin = sessionStorage.getItem('isLogin')

    const [profileClick, setProfilceClick] = useState(false)


    const profileShowEvnet = () => {
        profileClick ? setProfilceClick(false) : setProfilceClick(true)
    }

    useEffect(() => {
        setLogin(isLogin)
    }, [login])


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
                                <Div cursor='pointer' color='black' fontSize='14px' onMouseOver={profileShowEvnet}>PROFILE</Div>
                                {
                                    profileClick &&
                                    <FlexDiv flexDirection='column' position='absolute' backgroundColor='white' right='38px' top='68px' padding='12px' borderRadius='12px' onMouseLeave={profileShowEvnet}>
                                        <StyledLink to="/myPage/setting">
                                            <Div cursor='pointer' color='black' fontSize='14px' margin='8px 0'>MY PAGE</Div>
                                        </StyledLink>
                                        <Div cursor='pointer' color='black' fontSize='14px' margin='8px 0' onClick={sessionStorage.clear()}>LOG OUT</Div>
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