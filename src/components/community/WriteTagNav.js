import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { Button, Div, FlexDiv, Img, Input } from "../../styles/style";
import { attachImgState } from "../../recoil/state";

const ColoredImg = styled(Img)`
    filter: invert(19%) sepia(15%) saturate(0%) hue-rotate(143deg) brightness(94%) contrast(79%);
`

const WriteTagNav = () => {
    const [plan, setPlan] = useState('일정 첨부') // 일정 제목
    //const 

    const [AttachImg, setAttachImg] = useRecoilState(attachImgState)
    const inputRef = useRef(null)

    console.log(AttachImg)
    // https://cdn.pixabay.com/photo/2021/08/24/01/44/cat-6569156__340.jpg

    const onUploadImageBtnClick = () => {
        inputRef.current.click()
    }

    let imgs = []

    // 한 개씩 업로드할 수 있게 수정하기
    const onUploadImage = () => {
        const file = inputRef.current.files;
        console.log(file)
        const fileArray = [...file].slice(0, 5) // 5개만 가능

        fileArray.forEach((element) => {
            const reader = new FileReader();

            reader.readAsDataURL(element)
            reader.onloadend = () => {  // 읽기 완료되면
                //console.log(reader.result)
                imgs = [...imgs, reader.result]
                setAttachImg(imgs)
                // 비동기 함수라 set 이상하게 되는 듯? 수정해야 함
            }
        });
    }

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