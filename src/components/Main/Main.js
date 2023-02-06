import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { mainCityState } from "../../recoil/backendState";
import { Link } from "react-router-dom";

import { FlexDiv, Img, Input, Div } from "../../styles/style";
import { Btn } from "../community/CommunityMain";

const StyledLink = styled(Link)`
    text-decoration: none;
`

const CityDiv = styled(Div)`
    color: white;
    text-shadow: 0px 3px 10px #555555;
`

const CityImg = styled(FlexDiv)`
    max-width: 180px;
    min-width: 180px;
`

const Main = () => {
    
    return (
        <FlexDiv width='100%' align='column-center' padding='130px 0 70px 0' backgroundColor='backgroundGray'>
            <FlexDiv backgroundColor='white' width='50%' borderRadius='30px' height='50px' alignItems='center' margin='30px 0' border='1px solid #E1E4E6'>
                <Img cursor='pointer' position='relative' left='24px' src={require('../../img/search_main.svg').default} />
                <Input fontSize='20px' placeholder='어디로 여행을 떠나시나요?' border='none' width='100%' padding='0 40px 0 32px' textAlign='center' />
            </FlexDiv>
            <FlexDiv>
                <Btn color='true'>전체</Btn>
                <Btn>국내</Btn>
                <Btn>아시아</Btn>
                <Btn>유럽</Btn>
                <Btn>아메리카</Btn>
                <Btn>아프리카</Btn>
                <Btn>오세아니아</Btn>
            </FlexDiv>
            <FlexDiv width='60%' flexWrap='wrap' margin='50px 0' justifyContent='space-between'>
                {/* 임시 */}
                <StyledLink to='/login'>
                    <CityImg height='180px' margin='20px' flexBasis='25%' align='column-center' justifyContent='center' backgroundImg={'url(' + require('../../img/seoul.svg').default + ')'} borderRadius='20px'>
                        {/* <Img width='180px' height='180px' src={require('../../img/seoul.svg').default} borderRadius='20px'/> */}
                        <CityDiv fontSize='40px'>SEOUL</CityDiv>
                        <CityDiv fontSize='20px'>대한민국 서울</CityDiv>
                    </CityImg>
                </StyledLink>
            </FlexDiv>
        </FlexDiv>
    )
}

export default Main