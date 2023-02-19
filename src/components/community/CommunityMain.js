import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import styled from "styled-components";

import PostList from './PostList'
import { Button, FlexDiv, Img, Input } from "../../styles/style";
import { postListState } from "../../recoil/backendState";
import OrderSelect from "./OrderSelect";
import { postCategoryState } from "../../recoil/state";


const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    cursor: pointer;
`

export const Btn = styled(Button)`
    width: ${(props) => props.width ? props.width : '80px'};
    height: ${(props) => props.height ? props.height : '36px'};
    color: ${(props) => props.color ? 'white' : 'black'};
    background-color: ${(props) => props.color ? '#0097F5' : 'white'};
    margin: 0 12px;
    border-radius: 10px;
    cursor: pointer;
`


const CommunityMain = () => {
    // useSetRecoilState로 post list 변경해주기   
    const outSideRef = useRef()
    const [clickedBtn, setClickedBtn] = useState(1)
    const url = `/post/all`
    const [postCategory, setPostCategory] = useRecoilState(postCategoryState)


    const btnClickEvent = (category) => {
        setPostCategory(category)
    }


    return (
        <FlexDiv width='100%' align='column-center' padding='0 0 0 260px' ref={outSideRef}>
            <FlexDiv backgroundColor='white' width='55%' borderRadius='30px' height='50px' alignItems='center' margin='30px 0' border='1px solid #E1E4E6'>
                <Input fontSize='18px' placeholder='검색' border='none' width='100%' padding='0 40px 0 32px'/>
                <Img cursor='pointer' position='relative' right='24px' src={require('../../img/search2.svg').default}/>
            </FlexDiv>
            <FlexDiv>
                <Btn color={postCategory == 1 && 'true'} onClick={() => btnClickEvent(1)}>전체</Btn>
                <Btn color={postCategory == 2 && 'true'} onClick={() => btnClickEvent(2)}>정보</Btn>
                <Btn color={postCategory == 3 && 'true'} onClick={() => btnClickEvent(3)}>질문</Btn>
                <Btn color={postCategory == 4 && 'true'} onClick={() => btnClickEvent(4)}>여행기</Btn>
            </FlexDiv>
            <FlexDiv width='90%' justifyContent='space-between' padding='0 24px'>
                <Btn height='32px'>
                    <StyledLink to='/writepost' cursor='pointer' fontSize='14px' padding='0 2px'>글쓰기</StyledLink>
                </Btn>
                <OrderSelect outside={outSideRef}/>
            </FlexDiv>
            <FlexDiv backgroundColor='white' width='90%' padding='24px 96px' margin='30px 0 70px 0' borderRadius='30px' flexDirection='column'>
                <PostList url={url}/>
            </FlexDiv>
        </FlexDiv>
    )
}

export default CommunityMain