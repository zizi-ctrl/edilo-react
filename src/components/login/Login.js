import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, Div, FlexDiv, Img, Input, Span } from "../../styles/style";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #616466;
    font-size: 16px;
    margin: 12px 20px 30px;
`

const Login = () => {
    return (
        <FlexDiv padding='70px 0 0 0' width='100%' height='calc(100vh - 70px)' align='column-center' justifyContent='center'>
            <StyledLink to="/">
                <Div cursor='pointer' color='mainColor' fontFamily='Pyunji R' fontSize='58px' fontWeight='bolder' textAlign='center'>EODILO</Div>
            </StyledLink>
            <FlexDiv align='column-center' border='1px solid #E1E4E6' padding='24px 28px' borderRadius='12px'>
                <FlexDiv alignItems='center' border='1px solid #E1E4E6' padding='16px' borderRadius='12px 12px 0 0'>
                    <Img width='14px' src={require('../../img/id_icon.svg').default} margin='0 12px 0 0'/>
                    <Input placeholder='이메일 혹은 아이디 입력' padding='0 4px 0 0' width='300px'/>
                    <Img width='14px' src={require('../../img/close.svg').default}/>
                </FlexDiv>
                <FlexDiv alignItems='center' border='1px solid #E1E4E6' padding='16px' borderRadius='0 0 12px 12px'>
                    <Img width='14px' src={require('../../img/pw_icon.svg').default} margin='0 12px 0 0'/>
                    <Input type='password' placeholder='비밀번호 입력' width='300px'/>
                    <Img width='14px' src={require('../../img/close.svg').default}/>
                </FlexDiv>
                <FlexDiv alignItems='center' width='100%' margin='10px 0 22px'>
                    <Img width='16px' src={require('../../img/check.svg').default} margin='0 8px 0 0'/>
                    <Span color='letterGray' fontSize='14px'>로그인 상태 유지</Span>
                </FlexDiv>
                <Button width='100%' backgroundColor='mainColor' color='white' borderRadius='8px' height='36px' fontSize='18px'>로그인</Button>
            </FlexDiv>
            <FlexDiv>
                <StyledLink>회원가입</StyledLink>
                <StyledLink>아이디 찾기</StyledLink>
                <StyledLink>비밀번호 찾기</StyledLink>
            </FlexDiv>
            <FlexDiv>
                <Button>
                    <FlexDiv border='1px solid #E1E4E6'padding='8px 16px' borderRadius='35px'>
                        <Img src={require('../../img/google.svg').default} />
                        <Div marginLeft='8px'>구글 계정으로 로그인</Div>
                    </FlexDiv>
                </Button>
                <Button>
                    <FlexDiv border='1px solid #E1E4E6'padding='8px 16px' borderRadius='35px'>
                        <Img src={require('../../img/kakao.svg').default} />
                        <Div marginLeft='8px'>카카오 계정으로 로그인</Div>
                    </FlexDiv>
                </Button>
            </FlexDiv>
        </FlexDiv>
    )
}

export default Login