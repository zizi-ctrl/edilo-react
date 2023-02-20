import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import useFetch from "../../hooks/useFetch";
import { isLoginState } from "../../recoil/state";
import { FlexDiv, Div, Img, Button } from "../../styles/style";



const CityInfoText = styled(Div)`
    line-height: 140%;
`


const CityInfo = (props) => {
    const navigate = useNavigate()
    const { cityIndex, cityEnglishName, cityName, cityImg, setShowCityInfo } = props
    const isLogin = useRecoilValue(isLoginState)
    const data = useFetch('/city/info', 'GET', `?cityIndex=${cityIndex}`, true)

    
    const closeCityInfoEvent = () => {
        setShowCityInfo(false)
    }

    const makePlanClickEvent = () => {
        if (isLogin) {
            navigate('/schedule')
        }
        else {
            navigate('/login')
        }
    }

    const communityClickEvent = () => {
        navigate('/community')
    }



    return (
        <FlexDiv backgroundColor='#0000008a' minWidth='1024px' width='100%' height='100vh' top='0' left='0' position='fixed' justifyContent='center' alignItems='center' onClick={closeCityInfoEvent} zIndex='2'>
            <FlexDiv position='relative' color='black' backgroundColor='white' width='1010px' height='400px' borderRadius='18px' onClick={(e) => e.stopPropagation()}>
                <Div height='300px' overflow='hidden' marginRight='48px'>
                    <Img src={cityImg} height='400px' width='auto' borderRadius='12px 0 0 12px' />
                </Div>
                <FlexDiv flexDirection='column' width='350px'>
                    <FlexDiv margin='48px 0 0 0' alignItems='baseline'>
                        <Div fontSize='28px'>{cityEnglishName}</Div>
                        <Div fontSize='20px' marginLeft='8px'>{cityName}</Div>
                    </FlexDiv>
                    <Div fontWeight='600' marginBottom='24px'>
                        명동, 국립중앙박물관, 롯데월드, 경복궁, 창덕궁
                    </Div>
                    <CityInfoText>
                        대한민국의 수도인 서울은 현대적인 고층 빌딩, 첨단 기술의 지하철, 대중문화와 사찰, 고궁, 노점상이 공존하는 대도시입니다. 주목할 만한 명소로는 곡선으로 이루어진 외관과 옥상 공원을 특징으로 하는 초현대적 디자인의 컨벤션 홀인 동대문디자인플라자, 한때 7,000여 칸의 방이 자리하던 경복궁, 회화나무와 소나무 고목이 있는 조계사가 있습니다.
                    </CityInfoText>
                    <FlexDiv justifyContent='space-around' marginTop='48px'>
                        <Button color='white' backgroundColor='mainColor' width='140px' padding='12px' borderRadius='8px' cursor='pointer' fontSize='14px' onClick={makePlanClickEvent}>
                            여기로 여행가기
                        </Button>
                        <Button color='black' backgroundColor='backgroundGray' width='140px' padding='12px' borderRadius='8px' cursor='pointer' fontSize='14px' onClick={communityClickEvent}>
                            커뮤니티에서 보기
                        </Button>
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv flexDirection='column' justifyContent='space-around' margin='48px'>
                    <FlexDiv alignItems='center'>
                        <Img width='32px' src={require('../../img/time_black.svg').default} marginRight='12px' />
                        <Div>시차 없음</Div>
                        {/* <Div>{cityInfo.timeDiff}</Div> */}
                    </FlexDiv>
                    <FlexDiv alignItems='center'>
                        <Img width='32px' src={require('../../img/money_black.svg').default} marginRight='12px' />
                        <Div>환율 없음</Div>
                        {/* <Div>{cityInfo.timeDiff}</Div> */}
                    </FlexDiv>
                    <FlexDiv alignItems='center'>
                        <Img width='32px' src={require('../../img/flight.svg').default} marginRight='12px' />
                        <Div>시간 없음</Div>
                        {/* <Div>{cityInfo.timeDiff}</Div> */}
                    </FlexDiv>
                    <FlexDiv alignItems='center'>
                        <Img width='32px' src={require('../../img/visa.svg').default} marginRight='12px' />
                        <Div>비자 없음</Div>
                        {/* <Div>{cityInfo.timeDiff}</Div> */}
                    </FlexDiv>
                </FlexDiv>
                <Button onClick={closeCityInfoEvent}>
                    <Img position='absolute' right='8px' top='8px' src={require('../../img/close_line.svg').default} cursor='pointer' />
                </Button>
            </FlexDiv>
        </FlexDiv>
    )
}


export default CityInfo