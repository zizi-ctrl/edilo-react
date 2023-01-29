import React from "react";
import styled from "styled-components";
import { FlexDiv, H1, Input } from "../../styles/style";

const Write = () => {
    return(
        <FlexDiv padding='70px 0 0 0'>
            <H1>
                <Input placeholder="제목을 입력해주세요"></Input>
            </H1>
        </FlexDiv>
    )
}

export default Write