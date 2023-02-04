import React from "react";
import { useSetRecoilState } from "recoil";
import { openSearchNavState } from "../../recoil/state";

import { FlexDiv, Input, Button, Img } from "../../styles/style";

const SearchNav = () => {
    const setOpenSearchNav = useSetRecoilState(openSearchNavState)
    const openSearchEvent = () => setOpenSearchNav(false)

    return (
        <FlexDiv position='fixed' backgroundColor='backgroundGray' zIndex='300' width='300px' height='calc(100vh - 70px)' align='column-center' right='0px'>
            <FlexDiv height='24px'>
                <FlexDiv backgroundColor='backgroundGray'>
                    <Input placeholder='대륙 · 나라 · 도시 검색' border='none' width='200px' outline='none' fontSize='12px' height='20px' padding='0 22px 0 12px'/>
                </FlexDiv>
                <Button>
                    <Img width='18px' src={require('../../img/menuclose_right.svg').default} onClick={openSearchEvent}/>
                </Button>
            </FlexDiv>
        </FlexDiv>
    )
}

export default SearchNav