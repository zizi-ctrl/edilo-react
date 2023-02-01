import React from "react";
import styled from "styled-components";

import WriteNav from "./WriteNav";
import { Div, FlexDiv, Input, Button } from "../../styles/style";
import WriteImgAttach from "./WriteImgAttach";

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

    return (
        <FlexDiv padding='70px 0 0 0' align='column-center'>
            <WriteNav />
            <Div width='900px' borderBottom='1px solid #E1E4E6' padding='40px 12px 12px'>
                <Input placeholder="제목을 입력해주세요" placeholderColor='#BEBEBE' fontSize='24px' width='100%' />
            </Div>
            <Textarea width='900px' contentEditable='true' border='none' padding='36px 12px'></Textarea>
            <FlexDiv width='900px' justifyContent='space-between' padding='36px 0 72px' borderTop='1px solid #E1E4E6'>
                <FlexDiv>
                    <WriteImgAttach/>
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