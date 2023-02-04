import React from "react";
import { Route, Routes } from "react-router-dom";

import { FlexDiv } from "../../styles/style";
import CommunityMain from "./CommunityMain";
import CommunityNav from './CommunityNav'
import CommunityPost from "./CommunityPost";


const Community = () => {
    return (
        <FlexDiv backgroundColor='backgroundGray' padding='70px 0 0 0'>
            <CommunityNav />
            <Routes>
                <Route path="" element={<CommunityMain />} />
                <Route path="/post" element={<CommunityPost />} />
            </Routes>
        </FlexDiv>
    )
}

export default Community