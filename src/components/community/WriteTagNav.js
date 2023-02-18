import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { Button, Div, FlexDiv, Img, Input } from "../../styles/style";


const ColoredImg = styled(Img)`
    filter: invert(19%) sepia(15%) saturate(0%) hue-rotate(143deg) brightness(94%) contrast(79%);
`

const WriteTagNav = () => {

    const openToggle = (category) => {

    }

    const continentCLickEvent = () => openToggle('continent')
    const countryCLickEvent = () => openToggle('country')
    const cityCLickEvent = () => openToggle('city')

    return (
        <>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>글 유형</Div>
                <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default} />
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 24px'>
                <Div color='letterGray' borderRight='1px solid #E1E4E6' padding='0 36px'>태그</Div>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>대륙</Div>
                <Button>
                    <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default} onClick={continentCLickEvent}/>
                </Button>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>나라</Div>
                <Button>
                    <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default} onClick={countryCLickEvent}/>
                </Button>
            </FlexDiv>
            <FlexDiv align='row-vertical-center' padding='0 0 0 36px'>
                <Div color='letterGray' cursor='pointer'>도시</Div>
                <Button>
                    <ColoredImg width='24px' cursor='pointer' src={require('../../img/menudown.svg').default} onClick={cityCLickEvent}/>
                </Button>
            </FlexDiv>
        </>
    )
}

export default WriteTagNav