import React, { useRef, useState } from "react";
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
    const [sidebarList, setSidebarList] = useState(cityList)
    const inputRef = useRef()


    const searchEvent = () => {
        // 대륙 나라 도시 다 포함해서 검색했을때 존재하는지 확인해야함 그리고 최종적으로 출력해주는 카테고리는 가장 큰 분류인 대륙!
        const arsenalFilter = sidebarList.filter(word => word == inputRef.current.value);

    }


    return (
        <StyledNav position='fixed' backgroundColor='white' height='calc(100vh - 70px)' align='column-center' zIndex='5000'>
            <FlexDiv backgroundColor='backgroundGray' borderRadius='20px' margin='20px 0' alignItems='center' minHeight='30px'>
                <Input placeholder='대륙 · 나라 · 도시 검색' border='none' width='200px' outline='none' fontSize='12px' height='20px' padding='0 22px 0 12px' ref={inputRef} onChange={searchEvent} />
                <Img position='relative' right='14px' width='12px' cursor='pointer' src={require('../../img/search.svg').default} />
            </FlexDiv>
            {
                cityList.map((cityObject) => <CommunityNavCategory cityObject={cityObject} />)
            }
        </StyledNav>
    )
}

export default CommunityNav