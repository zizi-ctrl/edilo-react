import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Header, Div, FlexDiv } from "../../styles/style";
import { isLoginState } from "../../recoil/state"
import { useRecoilState } from "recoil";
import useFetch from "../../hooks/useFetch";

const StyledLink = styled(Link)`
    text-decoration: none;
`

const HeaderComponent = (props) => {
    const navigate = useNavigate()

    const { isMobile } = props
    const [isLogin, setIsLogin] = useRecoilState(isLoginState)
    const [profileClick, setProfileClick] = useState(false)
    const [planClick, setPlanClick] = useState(false)

    const data = ['도쿄 여행', '임시 여행']
    //const data = []

    const useUserInfo = () => {
        useFetch('/account')
        // try {
        //     const response = await fetch('https://3.35.230.139:443/account', {
        //         "method": "GET",
        //         "mode": 'cors', // no-cors, *cors, same-origin
        //         "credentials": "include"
        //     })
        //     const result = await response.json()

        //     console.log(result)
        // }
        // catch (err) {
        //     console.log(`ERR : ${err}`)
        // }
    }
    //console.log(userInfo)

    const usePlanClickEvent = () => {
        if (!isLogin) {
            alert('로그인 후에 이용해주세요.')
            navigate('/login')
        }
        else if (data.length == 0) alert('일정이 존재하지 않습니다.')
        else {
            setPlanClick(true)
        }
        //const data = useFetch('/schedule/all', null, 'GET')
        console.log(data)
    }

    const planHieEvent = () => {
        setPlanClick(false)
    }

    const useProfileShowEvnet = () => {
        useUserInfo()
        setProfileClick(true)
    }

    const profileHideEvent = () => {
        setProfileClick(false)
    }

    const useLogoutEvent = async () => {
        setProfileClick(false)
        setIsLogin(false)
        await useFetch('/account/logout', null, 'GET')
    }


    return (
        <Header display='flex' justifyContent={isMobile ? 'center' : 'space-between'} align='row-vertical-center' position='fixed' width='100%' height='70px' borderBottom='1px solid #F0F3F5' backgroundColor='white' zIndex='100'>
            <StyledLink to="/">
                <Div cursor='pointer' width='240px' color='mainColor' fontFamily='Pyunji R' fontSize='30px' fontWeight='bolder' textAlign='center'>EODILO</Div>
            </StyledLink>
            {
                !isMobile &&
                <FlexDiv justifyContent='space-around' align='row-vertical-center' width='370px' margin='0 20px 0 0'>

                    {/* <StyledLink to="/schedule"> */}
                    <Div cursor='pointer' color='black' fontSize='14px' onClick={usePlanClickEvent}>PLAN</Div>
                    {
                        planClick &&
                        <FlexDiv flexDirection='column' position='absolute' backgroundColor='white' right='289px' top='69px' padding='4px 18px' borderRadius='0 0 12px 12px' onMouseLeave={planHieEvent}>
                            {
                                data.map((item) =>
                                    <StyledLink to="/schedule" onClick={planHieEvent}>
                                        <Div cursor='pointer' color='black' fontSize='16px' padding='12px 0'>{item}</Div>
                                    </StyledLink>
                                )
                            }
                        </FlexDiv>
                    }
                    {/* </StyledLink> */}
                    <StyledLink to="/community">
                        <Div cursor='pointer' color='black' fontSize='14px'>COMMUNITY</Div>
                    </StyledLink>
                    {
                        isLogin ?
                            <React.Fragment>
                                <Div cursor='pointer' color='black' fontSize='14px' onClick={useProfileShowEvnet}>PROFILE</Div>
                                {
                                    profileClick &&
                                    <FlexDiv flexDirection='column' position='absolute' backgroundColor='white' right='32px' top='69px' padding='4px 18px' borderRadius='0 0 12px 12px' onMouseLeave={profileHideEvent}>
                                        <StyledLink to="/myPage/setting" onClick={profileHideEvent}>
                                            <Div cursor='pointer' color='black' fontSize='14px' padding='8px 0'>MY PAGE</Div>
                                        </StyledLink>
                                        <Div cursor='pointer' color='black' fontSize='14px' padding='18px 0' onClick={useLogoutEvent}>LOG OUT</Div>
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