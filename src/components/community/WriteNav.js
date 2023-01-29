import React, { useState } from "react";
import styled from "styled-components";

import { Button, Div, FlexDiv, Img } from "../../styles/style";

const ColoredImg = styled(Img)`
    filter: invert(19%) sepia(15%) saturate(0%) hue-rotate(143deg) brightness(94%) contrast(79%);
`

const WriteNav = () => {
    const [ plan, setPlan ] = useState('일정 첨부') // 일정 제목

    return (
        <FlexDiv align='row-center' width='900px' height='56px' borderBottom='1px solid #E1E4E6'>
            <FlexDiv align='row-vertical-center'>
                <Button>
                    <Img width='24px' cursor='pointer' src={require('../../img/attach_image.svg').default}/>
                </Button>
                <Button padding='0 14px 0 24px'>
                    <ColoredImg width='24px' cursor='pointer' src={require('../../img/map.svg').default}/>
                </Button>
                <Div width='140px' height='30px' padding='4px' color={ plan == '일정 첨부' && 'letterGray' } borderRight='1px solid #E1E4E6'>{plan}</Div>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 24px'>
                <Button>
                    <Img width='24px' cursor='pointer' src={require('../../img/bold.svg').default}/>
                </Button>
                <Button height='30px' borderRight='1px solid #E1E4E6' padding='0 24px 0 8px'>
                    <ColoredImg width='24px' cursor='pointer' src={require('../../img/italic.svg').default}/>
                </Button>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>글 유형</Div>
                <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default}/>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 24px'>
                <Div color='letterGray' borderRight='1px solid #E1E4E6' padding='0 36px'>태그</Div>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>대륙</Div>
                <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default}/>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>나라</Div>
                <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default}/>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>도시</Div>
                <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default}/>
            </FlexDiv>
        </FlexDiv>
    )
}

export default WriteNav