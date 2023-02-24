import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { Button, Div, FlexDiv, Img, Input } from "../../styles/style";


const ColoredImg = styled(Img)`
    filter: invert(19%) sepia(15%) saturate(0%) hue-rotate(143deg) brightness(94%) contrast(79%);
`

const WriteTagNav = () => {
    const [postType, setPostType] = useState(false)
    const [postTypeText, setPostTypeText] = useState('글 유형')


    const typeClickEvent = () => postType ? setPostType(false) : setPostType(true)
    const typeSelectEvent = (type) => setPostTypeText(type) && setPostType(false)


    return (
        <>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px' onClick={typeClickEvent} position='relative'>
                <Div color={postTypeText == '글 유형' ? 'letterGray' : 'black'} cursor='pointer'>{postTypeText}</Div>
                <ColoredImg width='24px' cursor='pointer' src={postType ? require('../../img/menuclose.svg').default : require('../../img/menudown.svg').default} />
                {
                    postType && 
                    <FlexDiv alignItems='center' position='absolute' flexDirection='column' backgroundColor='white' width='90px' hegith='100%' top='60px' right='-6px' border='1px solid #E1E3E5' borderRadius='12px'>
                        <Div padding='12px 0' onClick={() => typeSelectEvent('정보')}>정보</Div>
                        <Div padding='12px 0' onClick={() => typeSelectEvent('질문')}>질문</Div>
                        <Div padding='12px 0' onClick={() => typeSelectEvent('여행기')}>여행기 </Div>
                    </FlexDiv>
                }
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 24px'>
                <Div color='letterGray' borderRight='1px solid #E1E4E6' padding='0 36px'>태그</Div>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>대륙</Div>
                <Button>
                    <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default} />
                </Button>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>나라</Div>
                <Button>
                    <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default} />
                </Button>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>도시</Div>
                <Button>
                    <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default} />
                </Button>
            </FlexDiv>
        </>
    )
}

export default WriteTagNav