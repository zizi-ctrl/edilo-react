import React from "react";
import styled from "styled-components";
import { Div, FlexDiv, Input } from "../../styles/style";

const Write = () => {
    return(
        <FlexDiv padding='70px 0 0 0' align='column-center'>
            <Div width='60%' borderBottom='1px solid #E1E4E6' padding='40px 12px 12px'>
                <Input placeholder="제목을 입력해주세요" placeholderColor='#BEBEBE' fontSize='24px' width='100%'/>
            </Div>
            <Div width='60%'>
                {/* contenteditabile=true 알아보기~ */}
            </Div>
        </FlexDiv>
    )
}

export default Write