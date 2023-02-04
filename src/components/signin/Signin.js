import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, Div, FlexDiv, Img, Input, Span } from "../../styles/style";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #616466;
    font-size: 16px;
    margin: 12px 20px 30px;
`

const Signin = () => {
    const [auth, setAuth] = useState(false)
    const [pwForm, setPwForm] = useState(true)

    const authenticationNum = () => auth ? setAuth(false) : setAuth(true)
    const pwFormCheck = () => pwForm ? setPwForm(false) : setPwForm(true)

    return (
        <FlexDiv padding='140px 0 140px 0' width='100%' height='fit-content' backgroundColor='backgroundGray' align='column-center' justifyContent='center'>
            <StyledLink to="/">
                <Div cursor='pointer' color='mainColor' fontFamily='Pyunji R' fontSize='48px' fontWeight='bolder' textAlign='center'>EODILO</Div>
            </StyledLink>
            <FlexDiv flexDirection='column' margin='0 0 16px'>
                <label for='id'>아이디</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='8px' margin='8px 0 0px' borderRadius='12px' backgroundColor='white'>
                    <Input type='text' id='id' margin='0 12px 0 12px' width='100%' />
                    <Button borderRadius='12px' width='120px' height='40px' backgroundColor='mainColor' color='white' fontSize='14px'>중복확인</Button>
                </FlexDiv>
                {
                        pwForm ?
                            <Div></Div> :
                            <Div fontSize='12px' color='red'>아이디 중복확인을 해주세요.</Div>
                    }
            </FlexDiv>
            <FlexDiv flexDirection='column' margin='0 0 16px'>
                <label for='pw'>비밀번호</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='8px' margin='8px 0 0' borderRadius='12px' backgroundColor='white'>
                    <Input onChange={pwFormCheck} type='password' id='pw' margin='0 12px 0 12px' width='100%' />
                    <Img width='18px' src={require('../../img/check.svg').default} margin='0 8px' />
                </FlexDiv>
                {
                    pwForm ?
                        <Div></Div> :
                        <Div fontSize='12px' color='red'>비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</Div>
                }
            </FlexDiv>
            <FlexDiv flexDirection='column' margin='0 0 16px'>
                <label for='pwCheck'>비밀번호 확인</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='8px' margin='8px 0 0' borderRadius='12px' backgroundColor='white'>
                    <Input type='password' id='pwCheck' margin='0 12px 0 12px' width='100%' />
                    <Img width='18px' src={require('../../img/check.svg').default} margin='0 8px' />
                </FlexDiv>
                {
                    pwForm ?
                        <Div></Div> :
                        <Div fontSize='12px' color='red'>비밀번호가 일치하지 않습니다.</Div>
                }
            </FlexDiv>
            <FlexDiv flexDirection='column'>
                <label for='name'>이름</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='8px' margin='8px 0 16px' borderRadius='12px' backgroundColor='white'>
                    <Input type='text' id='name' margin='0 12px 0 12px' width='100%' />
                </FlexDiv>
            </FlexDiv>
            <FlexDiv flexDirection='column' margin='0 0 16px'>
                <label for='nickname'>닉네임</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='8px' margin='8px 0 0' borderRadius='12px' backgroundColor='white'>
                    <Input type='text' id='nickname' margin='0 12px 0 12px' width='100%' />
                    <Button borderRadius='12px' width='120px' height='40px' backgroundColor='mainColor' color='white' fontSize='14px'>중복확인</Button>
                </FlexDiv>
                {
                    pwForm ?
                        <Div></Div> :
                        <Div fontSize='12px' color='red'>닉네임 중복확인을 해주세요.</Div>
                }
            </FlexDiv>
            <FlexDiv flexDirection='column'>
                <label for='email'>이메일</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='8px' margin='8px 0 16px' borderRadius='12px' backgroundColor='white'>
                    <Input type='text' id='email' margin='0 12px 0 12px' width='100%' />
                    <Button borderRadius='12px' width='120px' height='40px' backgroundColor='mainColor' color='white' fontSize='14px' onClick={authenticationNum}>인증번호 받기</Button>
                </FlexDiv>
            </FlexDiv>
            <FlexDiv flexDirection='column'>
                <label for='authentication'></label>
                <FlexDiv pointerEvent={auth ? 'auto' : 'none'} width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='8px' margin='8px 0 16px' borderRadius='12px' backgroundColor={auth ? 'white' : 'transparent'}>
                    <Input type='text' placeholder='인증번호를 입력하세요' id='authentication' margin='0 12px 0 12px' width='100%' />
                    <Button borderRadius='12px' width='120px' height='40px' backgroundColor={auth ? 'mainColor' : 'transparent'} color={auth ? 'white' : '#666666'} border={auth ? 'none' : '1px solid #E1E4E6'} fontSize='14px'>인증번호 확인</Button>
                </FlexDiv>
            </FlexDiv>
            <Button width='400px' height='46px' backgroundColor='mainColor' color='white' borderRadius='10px' margin='24px 0 0 0' fontSize='18px'>가입하기</Button>
        </FlexDiv>
    )
}

export default Signin