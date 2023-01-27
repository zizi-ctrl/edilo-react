import React from "react";

import { FlexDiv } from "../../styles/style";
import CommunityMain from "./CommunityMain";
import CommunityNav from './CommunityNav'


const Community = () => {
    return(
        <FlexDiv backgroundColor='backgroundGray' padding='70px 0 0 0'>
            <CommunityNav/>
            <CommunityMain/>
        </FlexDiv>
    )
}

export default Community