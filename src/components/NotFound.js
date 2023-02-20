import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, Div, FlexDiv } from "../styles/style";


const StyledLink = styled(Link)`
    text-decoration: none;
    color: #888888;
`


const NotFound = () => {
    return (
        <FlexDiv padding='140px 0 0 0' width='100%' alignItems='center' flexDirection='column' backgroundColor='white'>
            <Div fontSize='20px'>존재하지 않는 페이지입니다.</Div>
            <Button border='1px solid #E1E3E6' padding='8px 12px' borderRadius='12px' margin='32px'>
                <StyledLink to='/'>메인으로 돌아가기</StyledLink>
            </Button>
        </FlexDiv>
    )
}

export default NotFound