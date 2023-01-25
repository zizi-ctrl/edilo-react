import React from "react";
import styled from "styled-components";

import { Div,Button, FlexDiv } from "../../styles/style"
import Nickname from "./Nickname";
import PostList from "./PostList";

const LabelDiv = styled(Div)`
    font-size: 14px;
    color: #919699;
    margin: ${(props) => props.margin ? props.margin : '36px 0 8px'}
`

const Btn = styled(Button)`
    border-radius: 12px;
    border: 1px solid #E1E4E6;
    font-size: 14px;
    height: 32px;
    margin: 54px 0 0;
    cursor: pointer;
`

const EmailDiv = styled(Div)`
    text-overflow: ellipsis;
    overflow: hidden;
`

const Setting = () => { 
    return (
        <React.Fragment>
            <FlexDiv>
                <FlexDiv width='38%' flexDirection='column' borderRight='4px dotted #E1E4E6' padding='0 14px 0 0'>
                    <LabelDiv margin='0 0 8px'>이름</LabelDiv>
                    <Div>홍길동</Div>
                    <LabelDiv>아이디</LabelDiv>
                    <Div>asdf</Div>
                    <LabelDiv>이메일</LabelDiv>
                    <EmailDiv>asdf@asdf.com</EmailDiv>
                </FlexDiv>
                <FlexDiv margin='0 30px' width='50%' flexDirection='column'>
                    <LabelDiv margin='0 0 8px'>닉네임</LabelDiv>
                    <Nickname/>
                    <Btn width='96px'>비밀번호 변경</Btn>
                    <Btn width='96px' color='#FF0000'>회원탈퇴</Btn>
                </FlexDiv>
            </FlexDiv>
            <Div fontSize='14px' color='#919699' margin='72px 0 0'>작성한 글 개수</Div>
            <PostList/>       
        </React.Fragment>
    )
}

export default Setting