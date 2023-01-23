import React from "react";
import styled from "styled-components";

import { Div,Button, FlexDiv } from "../../styles/style"
import NickName from "./NickName";

const LabelDiv = styled(Div)`
    font-size: 14px;
    color: #919699;
    margin: 36px 0 8px;
`

const Btn = styled(Button)`
    border-radius: 12px;
    border: 1px solid #E1E4E6;
    font-size: 14px;
    height: 32px;
    margin: 54px 0 0;
    cursor: pointer;
`

const Setting = () => { 
    return (
        <FlexDiv>
            <FlexDiv width='38%' flexDirection='column' borderRight='4px dotted #E1E4E6'>
                <LabelDiv>이름</LabelDiv>
                <Div>홍길동</Div>
                <LabelDiv>아이디</LabelDiv>
                <Div>asdf</Div>
                <LabelDiv>이메일</LabelDiv>
                <Div>asdf@asdf.com</Div>
            </FlexDiv>
            <FlexDiv margin='0 30px' width='50%' flexDirection='column'>
                <LabelDiv>닉네임</LabelDiv>
                <NickName/>
                <Btn width='96px'>비밀번호 변경</Btn>
                <Btn width='96px' color='#FF0000'>회원탈퇴</Btn>
            </FlexDiv>
        </FlexDiv>
    )
}

export default Setting