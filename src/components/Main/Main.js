import React, { Suspense, useState } from "react";

import City from "./CitysBox";
import { Div, FlexDiv, Img, Input } from "../../styles/style";
import { Btn } from "../community/CommunityMain";
import CitysBox from "./CitysBox";


const Main = () => {
    const isLogin = sessionStorage.getItem('isLogin')
    const [clickedBtn, setClickedBtn] = useState('all')


    const btnClickEvent = (category) => {
        setClickedBtn(category)
    }


    return (
        <FlexDiv width='100%' align='column-center' padding='130px 0 70px 0' backgroundColor='backgroundGray'>
            <FlexDiv backgroundColor='white' width='50%' borderRadius='30px' height='50px' alignItems='center' margin='30px 0' border='1px solid #E1E4E6'>
                <Img cursor='pointer' position='relative' left='24px' src={require('../../img/search_main.svg').default} />
                <Input fontSize='20px' placeholder='어디로 여행을 떠나시나요?' border='none' width='100%' padding='0 40px 0 32px' textAlign='center' />
            </FlexDiv>
            <FlexDiv>
                <Btn color={clickedBtn == 'all' && 'true'} onClick={() => btnClickEvent('all')}>전체</Btn>
                <Btn color={clickedBtn == 'kr' && 'true'} onClick={() => btnClickEvent('kr')}>국내</Btn>
                <Btn color={clickedBtn == 'asia' && 'true'} onClick={() => btnClickEvent('asia')}>아시아</Btn>
                <Btn color={clickedBtn == 'eu' && 'true'} onClick={() => btnClickEvent('eu')}>유럽</Btn>
                <Btn color={clickedBtn == 'usa' && 'true'} onClick={() => btnClickEvent('usa')}>아메리카</Btn>
                <Btn color={clickedBtn == 'afr' && 'true'} onClick={() => btnClickEvent('afr')}>아프리카</Btn>
                <Btn color={clickedBtn == 'oce' && 'true'} onClick={() => btnClickEvent('oce')}>오세아니아</Btn>
            </FlexDiv>
            <Suspense fallback={<Div margin='120px 0'>✈️ 도시를 불러오는 중입니다... ✈️</Div>}>
                <CitysBox/>
            </Suspense>
        </FlexDiv>
    )
}

export default Main