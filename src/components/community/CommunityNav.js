import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { FlexDiv, Img, Input } from "../../styles/style";
import { cityListState } from "../../recoil/backendState";
import CommunityNavCategory from "./CommunityNavCategory";

// page, container, component
const StyledNav = styled(FlexDiv)`
    min-width: 260px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`

const CommunityNav = () => {
    const cityList = useRecoilValue(cityListState)

    return (
        <StyledNav position='fixed' backgroundColor='white' height='calc(100vh - 70px)' align='column-center' zIndex='5000'>
            <FlexDiv backgroundColor='backgroundGray' borderRadius='20px' margin='20px 0' alignItems='center' height='30px'>
                <Input placeholder='대륙 · 나라 · 도시 검색' border='none' width='200px' outline='none' fontSize='12px' height='20px' padding='0 22px 0 12px' />
                <Img position='relative' right='14px' width='12px' cursor='pointer' src={require('../../img/search.svg').default} />
            </FlexDiv>
            {
                cityList.map((cityObject) => <CommunityNavCategory cityObject={cityObject} />)
            }
        </StyledNav>
    )
}

export default CommunityNav