import React from "react";
import styled from "styled-components";

import Profile from "./Profile"
import { FlexDiv } from "../../styles/style";

const MyPage = () => {
    return(
        <FlexDiv backgroundColor='#F0F3F5' padding='70px 0 0 0' align='column-center'>
        <Profile></Profile>
        </FlexDiv>
    )
}

export default MyPage