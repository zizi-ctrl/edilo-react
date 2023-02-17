import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import WriteTagNav from "./WriteTagNav";
import WriteImgAttach from "./WriteImgAttach";
import { Div, FlexDiv, Input, Img, Button } from "../../styles/style";
import { attachImgState, isLoginState } from "../../recoil/state";
import { useNavigate } from "react-router-dom";

const ColoredImg = styled(Img)`
    filter: invert(19%) sepia(15%) saturate(0%) hue-rotate(143deg) brightness(94%) contrast(79%);
`

const Textarea = styled(Div)`
    outline: none;
    min-height: 450px;
`

const Btn = styled(Button)`
    width: 80px;
    height: 36px;
    margin: 0 12px;
    border-radius: 10px;
    cursor: pointer;
`

const Write = () => {
    // const isLogin = sessionStorage.getItem('isLogin')
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!isLogin) {
    //         navigate('/login')
    //     }
    // })


    const textareaRef = useRef(null)
    const [plan, setPlan] = useState('일정 첨부') // 일정 제목

    const [AttachImg, setAttachImg] = useRecoilState(attachImgState)
    const inputRef = useRef(null)

    console.log(AttachImg)
    // https://cdn.pixabay.com/photo/2021/08/24/01/44/cat-6569156__340.jpg

    const onUploadImageBtnClick = () => {
        inputRef.current.click()
    }

    let imgs = []

    // 한 개씩 추가하면서 업로드할 수 있게 수정하기
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

    // Text Editor
    const setStyle = (style) => {
        //navigator.clipboard.writeText
        document.execCommand(style) 
        //focusEditor() 
    }
    
    const boldBtnClickEvent = () => {
        //const selection = window.getSelection().toString()
        setStyle('bold') 
    }

    const italicBtnClickEvent = () => {
        //const selection = window.getSelection().toString()
        setStyle('italic') 
    }

    return (
        <FlexDiv padding='70px 0 0 0' align='column-center'>
            <FlexDiv align='row-center' width='900px' height='56px' borderBottom='1px solid #E1E4E6'>
                <FlexDiv align='row-vertical-center'>
                    <Button onClick={onUploadImageBtnClick}>
                        <Input display='none' type='file' multiple accept='image/*' ref={inputRef} onChange={onUploadImage} />
                        <Img width='24px' cursor='pointer' src={require('../../img/attach_image.svg').default} />
                    </Button>
                    <Button padding='0 14px 0 24px'>
                        <ColoredImg width='24px' cursor='pointer' src={require('../../img/map.svg').default} />
                    </Button>
                    <Div width='140px' height='30px' padding='4px' color={plan == '일정 첨부' && 'letterGray'} borderRight='1px solid #E1E4E6'>{plan}</Div>
                </FlexDiv>
                <FlexDiv align='row-vertical-center' padding='0 0 0 24px'>
                    <Button onClick={boldBtnClickEvent}>
                        <Img width='24px' cursor='pointer' src={require('../../img/bold.svg').default} />
                    </Button>
                    <Button height='30px' borderRight='1px solid #E1E4E6' padding='0 24px 0 8px' onClick={italicBtnClickEvent}>
                        <ColoredImg width='24px' cursor='pointer' src={require('../../img/italic.svg').default} />
                    </Button>
                </FlexDiv>
                {/* 게시글 태그 선택하는 element */}
                <WriteTagNav />
            </FlexDiv>
            <Div width='900px' borderBottom='1px solid #E1E4E6' padding='40px 12px 12px'>
                <Input placeholder="제목을 입력해주세요" placeholderColor='#BEBEBE' fontSize='24px' width='100%' />
            </Div>
            <Textarea width='900px' contentEditable='true' border='none' padding='36px 12px' ref={textareaRef}></Textarea>
            <FlexDiv width='900px' justifyContent='space-between' padding='36px 0 72px' borderTop='1px solid #E1E4E6'>
                <FlexDiv>
                    <WriteImgAttach />
                </FlexDiv>
                <FlexDiv>
                    <Btn color='white' backgroundColor='mainColor'>발행</Btn>
                    <Btn color='black' border='1px solid #919699'>취소</Btn>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}

export default Write