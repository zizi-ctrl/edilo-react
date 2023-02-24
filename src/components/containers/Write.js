import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import PlanModal from "../elements/PlanModal";
import WriteTagNav from "../elements/WriteTagNav";
import WriteImgAttach from "../elements/WriteImgAttach";
import { attachImgState, isLoginState, userSelectPlan } from "../../recoil/state";
import { userPlanDataState } from "../../recoil/backendState";
import { Div, FlexDiv, Input, Img, Button } from "../../styles/style";


const ColoredImg = styled(Img)`
    filter: invert(19%) sepia(15%) saturate(0%) hue-rotate(143deg) brightness(94%) contrast(79%);

    &:active {
        opacity: 50%;
    }
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
    const navigate = useNavigate()
    const isLogin = useRecoilValue(isLoginState)

    useEffect(() => {
        if (!isLogin) {
            navigate('/login')
        }
    })

    const [plan, setPlan] = useRecoilState(userPlanDataState) // 목록
    const [AttachImg, setAttachImg] = useRecoilState(attachImgState)    // 첨부한 이미지
    const [selectPlan, setSelectPlan] = useRecoilState(userSelectPlan) // 유저가 선택한 일정
    const [planModal, setPlanModal] = useState(false)   // 모달 보여줄지 말지
    const inputRef = useRef(null)
    const textareaRef = useRef(null)


    const onUploadImageBtnClick = () => {
        inputRef.current.click()
    }

    let imgs = []
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
            }
        });
    }

    const usePlanClickEvent = () => {
        const result = useFetch('/schedule/all', 'GET')

        if (result.success) {
            const data = result.data
            data.length != 0 && setPlan(data[0])
            setPlanModal(true)

            console.log(data[0])
        }

    }

    // Text Editor
    const setStyle = (style) => {
        //navigator.clipboard.writeText
        document.execCommand(style)
        textareaRef.current.focus()
    }

    const boldBtnClickEvent = () => {
        //const selection = window.getSelection().toString()
        setStyle('bold')
    }

    const italicBtnClickEvent = () => {
        //const selection = window.getSelection().toString()
        setStyle('italic')
    }

    const usePostSendEvent = async () => {
        await useFetch('/post', 'POST',
            {
                "userIndex": 'number',
                "postTitle": 'string',
                "postContent": 'string',
                "scheduleIndex": 'number',
                "postCategory": 'number',
                "cityName": 'string',
                "cityCategory": 'string'
            }, null)
        navigate('/community')
    }


    return (
        <FlexDiv padding='70px 0 0 0' align='column-center' backgroundColor='white'>
            <FlexDiv align='row-center' width='900px' height='56px' borderBottom='1px solid #E1E4E6'>
                <FlexDiv align='row-vertical-center'>
                    <Button onClick={onUploadImageBtnClick}>
                        <Input display='none' type='file' multiple accept='image/*' ref={inputRef} onChange={onUploadImage} />
                        <Img width='24px' cursor='pointer' src={require('../../img/attach_image.svg').default} />
                    </Button>
                    <Button padding='0 14px 0 24px'>
                        <ColoredImg width='24px' cursor='pointer' src={require('../../img/map.svg').default} onClick={usePlanClickEvent}/>
                    </Button>
                    <Div width='140px' height='30px' padding='4px' color={plan.length == 0 && 'letterGray'} borderRight='1px solid #E1E4E6' onClick={usePlanClickEvent}>{selectPlan}</Div>
                    {
                        planModal &&
                        <PlanModal setPlanModal={setPlanModal} plna={plan}/>
                    }
                </FlexDiv>
                <FlexDiv align='row-vertical-center' padding='0 0 0 24px'>
                    <Button onClick={boldBtnClickEvent}>
                        <ColoredImg width='24px' cursor='pointer' src={require('../../img/bold.svg').default} />
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
                    <Btn color='white' backgroundColor='mainColor' onClick={usePostSendEvent}>발행</Btn>
                    <Btn color='black' border='1px solid #919699'>취소</Btn>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}


export default Write