import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Button, Div, FlexDiv, Img, Input, Span } from "../../styles/style";
import useFetch from "../../hooks/useFetch";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #616466;
    font-size: 16px;
    margin: 12px 20px 30px;
`

const SignUp = () => {
    const navigate = useNavigate()

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [pwRe, setPwRe] = useState('')
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')

    const [idCheck, setIdCheck] = useState(2)
    const [pwCheck, setPwCheck] = useState(2)
    const [pwRecheck, setPwRecheck] = useState(2)
    //const [nameCheck, setNameCheck] = useState(2)
    const [nicknameCheck, setNicknameCheck] = useState(2)
    const [emailCheck, setEmailCheck] = useState(2)

    const [authSend, setAuthSend] = useState(false)
    const [authCode, setAuthCode] = useState('')
    const [authCodeCheck, setAuthCodeCheck] = useState(2)


    const inputLengthCheck = (str, length) => { // hook로 빼기
        console.log(str)
        if (str.length > length) {
            return str.substr(0, length);
        }
        else {
            return str
        }
    }


    // onChange
    const idInputChange = (e) => {
        const target = e.target

        setIdCheck(false)

        target.value = inputLengthCheck(target.value, 20)

        setId(target.value)
    }

    const pwInputChange = (e) => {
        const target = e.target

        const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+=])[A-Za-z\d~!@#$%^&*()+=]{8,20}$/

        target.value = target.value.replace(/[^\\!-z]/gi, ""); // 영어로만 입력받기

        target.value = inputLengthCheck(target.value, 20)

        if (reg.test(target.value)) {
            setPwCheck(true)
            setPw(target.value)
        }
        else {
            setPwCheck(false)
        }

        if (pwRe == target.value) {
            setPwRecheck(true)
        }
        else {
            setPwRecheck(false)
        }
    }

    const pwReInputChange = (e) => {
        const target = e.target

        target.value = target.value.replace(/[^\\!-z]/gi, ""); // 영어로만 입력받기

        target.value = inputLengthCheck(target.value, 20)

        if (pw == target.value) {
            setPwRecheck(true)
            setPwRe(target.value)
        }
        else if (target.value == '') {
            setPwRecheck(false)
        }
        else {
            setPwRecheck(false)
        }
    }

    const nameInputChange = (e) => {
        const target = e.target

        target.value = inputLengthCheck(target.value, 50)

        setName(target.value)
    }

    const nicknameInputChange = (e) => {
        const target = e.target

        setNicknameCheck(false)

        target.value = inputLengthCheck(target.value, 20)

        setNickname(target.value)
    }

    const emailInputChange = (e) => {
        const target = e.target
        const reg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

        target.value = target.value.replace(/[^\\!-z]/gi, ""); // 영어로만 입력받기

        target.value = inputLengthCheck(target.value, 320)

        if (reg.test(target.value)) {
            setEmailCheck(true)
            setEmail(target.value)
        }
        else {
            setEmailCheck(false)
        }
    }

    const authCodeChangeEvent = (e) => {
        const target = e.target

        target.value = inputLengthCheck(target.value, 6)

        setAuthCode(target.value)
    }


    // 백엔드 통신 필요한 내용 - 중복확인, 이메일 발송, 회원가입
    const useIdCheckEvent = async () => {
        const result = await useFetch("/account/id/confirm", "POST",
            {
                "idValue": id,
            }, null)
        console.log(result)
        if (result.success) {
            alert('사용할 수 있는 아이디입니다.')
            setIdCheck(true)
        }
        else {
            alert('사용할 수 없는 아이디입니다.')
        }
    }

    const useNicknameCheckEvent = async () => {
        const result = await useFetch("/account/nickname/confirm", "POST",
            {
                "nicknameValue": nickname,
            }, null)
        console.log(result)
        if (result.success) {
            alert('사용할 수 있는 닉네임입니다.')
            setNicknameCheck(true)
        }
        else {
            alert('사용할 수 없는 닉네임입니다.')
        }
    }

    const useEmailSendEvent = async () => {
        // const result = await useFetch("/auth/email/signUp", "POST",
        //     {
        //         "emailValue": email
        //     }, null)
        // console.log(result)
        // if (result.success) {
        //     setAuthSend(true)
        // }
        // else {
        //     alert(`${result.message}`)
        // }

        try {
            const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + "/auth/email/signUp", {
                "method": "POST",
                "mode": 'cors', // no-cors, *cors, same-origin
                "credentials": "include",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                    "emailValue": email
                })
            })
            const result = await response.json()
            console.log(result)
            
            if (result.success) {
                setAuthSend(true)
            }
            else {
                alert(`${result.message}`)
            }
        }
        catch (err) {
            console.log(`ERR : ${err}`)
        }
    }

    const useConfirmAuthCodeEvent = async () => {
        console.log(authCode)
        // const result = await useFetch("/auth/email/signUp/confirm", "POST",
        //     {
        //         "authCode": authCode,
        //     }, null)
        // console.log(result) 
        // if (result.success) {
        //     setAuthCodeCheck(true)
        // }
        // else {
        //     alert(`${result.message}`)
        // }
        // console.log(authCode)
        try {
            const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + "/auth/email/signUp/confirm", {
                "method": "POST",
                "mode": 'cors', // no-cors, *cors, same-origin
                "credentials": "include",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                            "authCode": `${authCode}`,
                        })
            })
            const result = await response.json()
            console.log(result)
            
            if (result.success) {
                setAuthCodeCheck(true)
            }
            else {
                alert(`${result.message}`)
            }
        }
        catch (err) {
            console.log(`ERR : ${err}`)
        }
    }

    const submitEvent = async () => {
        const idValue = id.trim()
        const pwValue = pw.trim()

        console.log(idValue)
        console.log(pwValue)
        console.log(email)
        console.log(name)
        console.log(nickname)

        if (id == '') {
            alert('아이디를 입력해주세요.')
        }
        else if (idCheck == 2 || idCheck == false) {
            alert('아이디 중복확인을 확인해주세요.')
        }
        else if (pw == '') {
            alert('비밀번호를 입력해주세요.')
        }
        else if (pwCheck == 2 || pwCheck == false) {
            alert('비밀번호를 확인해주세요.')
        }
        else if (nickname == '') {
            alert('닉네임을 입력해주세요.')
        }
        else if (nicknameCheck == 2 || nicknameCheck == false) {
            alert('닉네임 중복확인을 해주세요.')
        }
        else if (emailCheck == 2 || emailCheck == false) {
            alert('이메일을 입력해주세요.')
        }
        else if (authCodeCheck == false) {
            alert('이메일 인증을 해주세요.')
        }
        else {
            try {
                const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + "/account", {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        "emailValue": email,
                        "idValue": idValue,
                        "pwValue": pwValue,
                        "nameValue": name,
                        "nicknameValue": nickname
                    })
                })
                const result = await response.json()

                if (result.success) {
                    alert("회원가입 성공")
                    console.log(result)
                    navigate('/login')
                }
                else {
                    alert(`${result.message}`)
                }
            }
            catch (err) {
                alert(`ERR : ${err}`)
            }
        }
    }


    return (
        <FlexDiv padding='140px 0 140px 0' width='100%' height='fit-content' align='column-center' justifyContent='center'>
            <StyledLink to="/">
                <Div cursor='pointer' color='mainColor' fontFamily='Pyunji R' fontSize='40px' fontWeight='bolder' textAlign='center'>EODILO</Div>
            </StyledLink>
            <FlexDiv flexDirection='column' margin='0 0 16px'>
                <label htmlFor='id'>아이디</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='4px' margin='8px 0 0px' borderRadius='12px' backgroundColor='white'>
                    <Input type='text' id='id' margin='0 12px 0 12px' width='100%' disabled={idCheck == true ? true : false} cursor='pointer' onChange={idInputChange} />
                    <Button borderRadius='12px' width='120px' height='40px' backgroundColor={id ? 'mainColor' : 'white'} color={id ? 'white' : '#666666'} border={id ? 'none' : '1px solid #E1E4E6'} disabled={id ? false : true} cursor={id ? 'pointer' : ''} fontSize='14px' onClick={useIdCheckEvent}>중복확인</Button>
                </FlexDiv>
                {
                    idCheck ?
                        <Div></Div> :
                        <Div padding='2px 16px' fontSize='12px' color='red'>아이디 중복확인을 해주세요.</Div>
                }
            </FlexDiv>
            <FlexDiv flexDirection='column' margin='0 0 16px'>
                <label htmlFor='pw'>비밀번호</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='4px' margin='8px 0 0' borderRadius='12px' backgroundColor='white'>
                    <Input onChange={pwInputChange} type='password' id='pw' margin='0 12px 0 12px' width='100%' cursor='pointer' />
                    <Img width='18px' src={pwCheck == true ? require('../../img/check_full.svg').default : require('../../img/check.svg').default} margin='0 8px' />
                </FlexDiv>
                {
                    pwCheck ?
                        <Div></Div> :
                        <Div padding='2px 16px' fontSize='12px' color='red'>비밀번호는 8~16자 영문 대 소문자, 숫자, 가능한 특수문자를 사용하세요.</Div>
                }
            </FlexDiv>
            <FlexDiv flexDirection='column' margin='0 0 16px'>
                <label htmlFor='pwCheck'>비밀번호 확인</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='4px' margin='8px 0 0' borderRadius='12px' backgroundColor='white'>
                    <Input type='password' id='pwCheck' margin='0 12px 0 12px' width='100%' cursor='pointer' onChange={pwReInputChange} />
                    <Img width='18px' src={pwRecheck == true ? require('../../img/check_full.svg').default : require('../../img/check.svg').default} margin='0 8px' />
                </FlexDiv>
                {
                    pwRecheck ?
                        <Div></Div> :
                        <Div padding='2px 16px' fontSize='12px' color='red'>비밀번호가 일치하지 않습니다.</Div>
                }
            </FlexDiv>
            <FlexDiv flexDirection='column'>
                <label htmlFor='name'>이름</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='4px' margin='8px 0 16px' borderRadius='12px' backgroundColor='white'>
                    <Input type='text' id='name' margin='0 12px 0 12px' width='100%' cursor='pointer' onChange={nameInputChange} />
                </FlexDiv>
            </FlexDiv>
            <FlexDiv flexDirection='column' margin='0 0 16px'>
                <label htmlFor='nickname'>닉네임</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='4px' margin='8px 0 0' borderRadius='12px' backgroundColor='white'>
                    <Input type='text' id='nickname' margin='0 12px 0 12px' width='100%' cursor='pointer' onChange={nicknameInputChange} />
                    <Button borderRadius='12px' width='120px' height='40px' backgroundColor={nickname ? 'mainColor' : 'white'} color={nickname ? 'white' : '#666666'} border={nickname ? 'none' : '1px solid #E1E4E6'} disabled={nickname ? false : true} cursor={nickname ? 'pointer' : ''} fontSize='14px' onClick={useNicknameCheckEvent}>중복확인</Button>
                </FlexDiv>
                {
                    nicknameCheck ?
                        <Div></Div> :
                        <Div padding='2px 16px' fontSize='12px' color='red'>닉네임 중복확인을 해주세요.</Div>
                }
            </FlexDiv>
            <FlexDiv flexDirection='column'>
                <label htmlFor='email'>이메일</label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='4px' margin='8px 0 16px' borderRadius='12px' backgroundColor='white'>
                    <Input type='text' id='email' margin='0 12px 0 12px' width='100%' cursor='pointer' onChange={emailInputChange} />
                    <Button borderRadius='12px' width='120px' height='40px' backgroundColor={emailCheck == true ? 'mainColor' : 'white'} color={emailCheck == true ? 'white' : '#666666'} border={emailCheck == true ? 'none' : '1px solid #E1E4E6'} disabled={emailCheck == true ? false : true} cursor={emailCheck == true ? 'pointer' : ''} fontSize='14px' onClick={useEmailSendEvent}>인증번호 받기</Button>
                </FlexDiv>
                {
                    emailCheck ?
                        <Div></Div> :
                        <Div padding='2px 16px' fontSize='12px' color='red'>이메일 형식을 확인해주세요.</Div>
                }
            </FlexDiv>
            <FlexDiv flexDirection='column'>
                <label htmlFor='authentication'></label>
                <FlexDiv width='400px' height='50px' alignItems='center' border='1px solid #E1E4E6' padding='4px' borderRadius='12px' backgroundColor={authSend ? 'white' : 'transparent'}>
                    <Input type='text' placeholder='인증번호를 입력하세요' id='authentication' margin='0 12px 0 12px' width='100%' cursor={authSend ? 'pointer' : ''} disabled={authSend ? false : true} onChange={authCodeChangeEvent} />
                    <Button borderRadius='12px' width='120px' height='40px' backgroundColor={authSend ? 'mainColor' : 'transparent'} color={authSend ? 'white' : '#666666'} border={authSend ? 'none' : '1px solid #E1E4E6'} disabled={authSend ? false : true} cursor={authSend ? 'pointer' : ''} fontSize='14px' onClick={useConfirmAuthCodeEvent}>인증번호 확인</Button>
                </FlexDiv>
                {
                    authCodeCheck ?
                        <Div></Div> :
                        <Div padding='2px 16px' fontSize='12px' color='red'>인증번호를 입력해주세요.</Div>
                }
            </FlexDiv>
            <Button width='400px' height='46px' backgroundColor={authCodeCheck == true ? 'mainColor' : 'transparent'} color={authCodeCheck == true ? 'white' : '#666666'} border={authCodeCheck == true ? 'none' : '1px solid #E1E4E6'} borderRadius='10px' margin='24px 0 0 0' fontSize='18px' cursor={authCodeCheck == true ? 'pointer' : ''} disabled={authCodeCheck == true ? false : true} onClick={submitEvent}>
                가입하기
            </Button>
        </FlexDiv>
    )
}


export default SignUp