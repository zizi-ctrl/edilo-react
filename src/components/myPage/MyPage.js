import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Profile from "./Profile"
import MyPageNav from './MyPageNav'
import Setting from './Setting'
import Clipping from './Clipping'
import Notice from './Notice'
import { FlexDiv } from "../../styles/style";

const MyPage = () => {
    return(
        <FlexDiv backgroundColor='#F0F3F5' padding='70px 0 0 0' align='column-center'>
        <Profile></Profile>
        
        <FlexDiv>
            <MyPageNav/>
            <FlexDiv backgroundColor='white'>
            <Routes>
                <Route path="/setting" element={<Setting/>}/>
                <Route path="/clipping" element={<Clipping/>}/>
                <Route path="/notice" element={<Notice/>}/>
            </Routes>
            </FlexDiv>
        </FlexDiv>
        </FlexDiv>
    )
}

export default MyPage