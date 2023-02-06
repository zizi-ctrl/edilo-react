import React from "react";
import styled from "styled-components";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { Button, FlexDiv, Img, Div, Input } from "../../styles/style";
import { openPlanNavState } from "../../recoil/state";
import { planListState } from "../../recoil/backendState"
import PlanBlock from "./PlanBlock";

const Btn = styled(Button)`
    background-color: white;
    border-radius: 12px;
    margin: 0 4px
`

const Icon = styled(Img)`
    filter: invert(44%) sepia(72%) saturate(2799%) hue-rotate(178deg) brightness(97%) contrast(103%);
    margin: 0 6px 0 2px;
    width: 18px;
`

const PlanNav = () => {
    // nav 닫기
    const setOpenPlanNav = useSetRecoilState(openPlanNavState)
    const openPlanEvent = () => setOpenPlanNav(false)

    // Plan List
    const planList = useRecoilValue(planListState)

    // 기본 날짜 설정
    let date
    if (planList) {
        date = planList[0].date
    }
    else {
        const curr = new Date();
        curr.setDate(curr.getDate());
        date = curr.toISOString().substring(0,10);
    }


    return (
        <FlexDiv position='fixed' backgroundColor='backgroundGray' zIndex='300' width='300px' height='calc(100vh - 70px)' align='column-center'>
            <FlexDiv alignItems='center' height='66px' justifyContent='space-between' width='96%' margin='4px 0'>
                <FlexDiv borderRadius='12px' backgroundColor='white' justifyContent='space-between' alignItems='center' width='240px' height='52px' margin='0 0 0 8px' padding='0 8px'>
                    <Div fontSize='24px' overflow='hidden' width='100%' textAlign='center'>
                        {planList[0].cityIndex} 여행
                    </Div>
                    <Button>
                        <Img width='20px' src={require('../../img/delete.svg').default} cursor='pointer'/>
                    </Button>
                </FlexDiv>
                <Button>
                    <Img width='18px' src={require('../../img/menuclose_left.svg').default} cursor='pointer' onClick={openPlanEvent}/>
                </Button>
            </FlexDiv>
            <FlexDiv>
                <Btn>
                    <FlexDiv alignItems='center' fontSize='14px'>
                        <Icon src={require('../../img/time.svg').default}/>
                        {'없음'}
                    </FlexDiv>
                </Btn>
                <Btn>
                    <FlexDiv alignItems='center' fontSize='14px'>
                        <Icon src={require('../../img/weather.svg').default}/>
                        0℃ / 0℃
                    </FlexDiv>
                </Btn>
                <Btn>
                    <FlexDiv alignItems='center' fontSize='14px'>
                        <Icon src={require('../../img/money.svg').default}/>
                        946.06원
                    </FlexDiv>
                </Btn>
            </FlexDiv>
            <FlexDiv width='90%' backgroundColor='white' borderRadius='12px' align='row-center' height='36px' position='relative' margin='8px 0'>
                <Input type='date' margin='0 0 0 56px' width='64%' cursor='pointer' defaultValue={date}/>
                <Button backgroundColor='backgroundGray' position='absolute' borderRadius='8px' fontSize='14px' width='48px' height='24px' top='6px' right='12px' pointerEvent='none'>편집</Button>
            </FlexDiv>
            {
                planList[0].scheduleList.map((eachPlan, id) => <PlanBlock eachPlan={eachPlan} label={id + 1}/>)
            }
            <PlanBlock/>
        </FlexDiv>
    )
}

export default PlanNav