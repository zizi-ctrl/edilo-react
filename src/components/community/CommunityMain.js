import React from "react";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button, FlexDiv, Img, Input, Span } from "../../styles/style";
import PostList from "../myPage/PostList";

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    cursor: pointer;
`

const Btn = styled(Button)`
    width: 80px;
    height: ${(props) => props.height ? props.height : '40px'};
    color: ${(props) => props.color ? 'white' : 'black'};
    background-color: ${(props) => props.color ? '#0097F5' : 'white'};
    margin: 0 12px;
    border-radius: 10px;
    cursor: pointer;
`

const CommunityMain = () => {
    // useSetRecoilState로 post list 변경

    return (
        <FlexDiv width='100%' align='column-center' padding='0 0 0 260px'>
            <FlexDiv backgroundColor='white' width='55%' borderRadius='30px' height='50px' alignItems='center' margin='30px 0' border='1px solid #E1E4E6'>
                <Input fontSize='18px' placeholder='검색' border='none' width='100%' padding='0 40px 0 32px'/>
                <Img cursor='pointer' position='relative' right='24px' src={require('../../img/search2.svg').default}/>
            </FlexDiv>
            <FlexDiv>
                <Btn color='true'>전체</Btn>
                <Btn>정보</Btn>
                <Btn>질문</Btn>
                <Btn>여행기</Btn>
            </FlexDiv>
            <FlexDiv width='90%' justifyContent='space-between' padding='0 24px'>
                <Btn height='32px'>
                    <StyledLink to='/writepost' cursor='pointer' fontSize='14px' padding='0 2px'>글쓰기</StyledLink>
                </Btn>
                <Btn height='32px'>
                    <FlexDiv>
                        <Span cursor='pointer' fontSize='14px' padding='0 4px'>최신순</Span>
                        <Img width='20px' display='inline' cursor='pointer' src={require('../../img/menudown.svg').default}/>
                    </FlexDiv>
                </Btn>
            </FlexDiv>
            <FlexDiv backgroundColor='white' width='90%' padding='24px 96px' margin='20px 0 0 0' borderRadius='30px' flexDirection='column'>
                <PostList/>
            </FlexDiv>
        </FlexDiv>
    )
}

export default CommunityMain