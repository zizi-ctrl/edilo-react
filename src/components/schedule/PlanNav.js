import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";

import { Button, FlexDiv, Img, Div, Input } from "../../styles/style";
import { openPlanNavState, planModifyCheckState, tempPlanBlockListState } from "../../recoil/state";
import { eachPlanBlockState, eachPlanState, planListState } from "../../recoil/backendState"
import PlanBlock from "./PlanBlock";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";

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

const PlanNavDiv = styled(FlexDiv)`
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #E1E4E5;
        border-radius: 30px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #CCCCCC;
        border-radius: 30px;
    }

    ::-webkit-scrollbar-track {
        background: #F0F3F5;
    }
`


const PlanNav = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [planDate, setPlanDate] = useState(null)
    const [newPlan, setNewPlan] = useState(true)
    const [planModifyCheck, setPlanModifyCheck] = useRecoilState(planModifyCheckState)

    const [exchange, setExchange] = useState(null)
    const [timeDiff, setTimeDiff] = useState(null)
    const [temperature, setTemperature] = useState(null)

    // nav 닫기
    const setOpenPlanNav = useSetRecoilState(openPlanNavState)
    const openPlanEvent = () => setOpenPlanNav(false)

    // Plan List
    const planList = useRecoilValue(eachPlanState)
    const planBlockList = useRecoilValue(eachPlanBlockState)

    const [tempPlanBlockList, setTempPlanBlockList] = useRecoilState(tempPlanBlockListState)


    const dateChangeEvent = (e) => {
        const value = e.target.value

        setPlanDate(value)
    }

    const tempResetEvent = () => {
        setPlanModifyCheck(true)
        setTempPlanBlockList([])
    }

    const useDeleteEvent = () => {
        const result = useFetch('/schedule', 'DELETE', {
            "scheduleIndex": planList.scheduleindex
        }, null)
        if (result.success) {
            navigate('/')   
        }
    }

    const useSavePlanEvent = () => {
        setPlanModifyCheck(false)

        // 백엔드에 보내서 저장하는 코드.....😂
        console.log(newPlan)

        const indexBlockList = []
        tempPlanBlockList?.map((item, id) => {
            const temp = { ...tempPlanBlockList[0] }
            temp['blockIndex'] = id + 1

            indexBlockList.push(temp)
        })

        console.log(indexBlockList)
        console.log(planList.scheduleindex)
        console.log(planList.cityindex)
        console.log(planDate)

        useFetch('/schedule', 'PUT', {
            "cityIndex": planList.cityindex,
            "scheduleIndex": planList.scheduleindex,
            "schduleDate": planDate,
            "scheduleName": planList.scheduledate,
            "scheduleList": indexBlockList
        }, null)
    }

    useEffect(() => {
        if (planList) { // 일정 불러올 수 있으면
            if (!planModifyCheck) { // 일정이 수정되지 않았다면 -> 처음 일정 불러왔을떄
                setNewPlan(false)
                setPlanDate(planList.scheduledate.substr(0,10))
                setTempPlanBlockList(planBlockList)
            }
        }
        else {  // 아예 새로운 일정 생성할 때, 오늘 날짜로
            const curr = new Date();
            curr.setDate(curr.getDate());
            setPlanDate(curr.toISOString().substring(0, 10))
        }

        const fc = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + '/city' + `?cityIndex=${planList.cityindex}`, {
                    "method": "GET",
                    "mode": 'cors', // no-cors, *cors, same-origin
                    "credentials": "include"
                })
                const result = await response.json()
    
                console.log(result)
                if (result.success) {
                    setExchange(result.data.cityExchange)
                    setTemperature(result.data.cityTemperature)
                    setTimeDiff(result.data.cityTimeDiff)
                }
            }
            catch (err) {
                console.log(`ERR : ${err}`)
            }
        }

        fc()
    }, [])


    return (
        <FlexDiv position='fixed' backgroundColor='backgroundGray' zIndex='1' width='300px' height='calc(100vh - 70px)' align='column-center' padding='0 0 40px 0'>
            <FlexDiv alignItems='center' height='66px' justifyContent='space-between' width='96%' margin='4px 0'>
                <FlexDiv borderRadius='12px' backgroundColor='white' justifyContent='space-between' alignItems='center' width='240px' height='52px' margin='0 0 0 8px' padding='0 8px'>
                    <Div fontSize='24px' overflow='hidden' width='100%' textAlign='center'>
                        {planList && planList.schedulename}
                    </Div>
                    <Button>
                        <Img width='20px' src={require('../../img/delete.svg').default} cursor='pointer' onClick={useDeleteEvent}/>
                    </Button>
                </FlexDiv>
                <Button>
                    <Img width='18px' src={require('../../img/menuclose_left.svg').default} cursor='pointer' onClick={openPlanEvent} />
                </Button>
            </FlexDiv>
            <FlexDiv>
                <Btn>
                    <FlexDiv alignItems='center' fontSize='14px'>
                        <Icon src={require('../../img/time.svg').default} />
                        {timeDiff != null ? timeDiff : '정보 없음'}
                    </FlexDiv>
                </Btn>
                <Btn>
                    <FlexDiv alignItems='center' fontSize='14px'>
                        <Icon src={require('../../img/weather.svg').default} />
                        {temperature != null ? temperature : '정보 없음'}
                    </FlexDiv>
                </Btn>
                <Btn>
                    <FlexDiv alignItems='center' fontSize='14px'>
                        <Icon src={require('../../img/money.svg').default} />
                        {exchange != null ? exchange : '정보 없음'}
                    </FlexDiv>
                </Btn>
            </FlexDiv>
            <FlexDiv width='90%' backgroundColor='white' borderRadius='12px' align='row-center' height='36px' minHeight='36px' position='relative' margin='8px 0'>
                <Input type='date' margin='0 0 0 56px' width='64%' cursor='pointer' defaultValue={planDate} onChange={dateChangeEvent}/>
                <Button backgroundColor='backgroundGray' position='absolute' borderRadius='8px' fontSize='14px' width='48px' height='24px' top='6px' right='12px' pointerEvent='none'>편집</Button>
            </FlexDiv>
            <PlanNavDiv flexDirection='column' padding='0 0 18px 0'>
                {
                    tempPlanBlockList?.map((eachPlan, id) => <PlanBlock eachPlan={eachPlan} label={id + 1} />)
                }
            </PlanNavDiv>
            <FlexDiv position='absolute' bottom='0' width='100%' justifyContent='center' padding='8px 0' backgroundColor='backgroundGray'>
                <Button backgroundColor='white' borderRadius='12px' width='42%' height='40px' cursor='pointer' hoverBackgroundColor='#EEEEEE' margin='0 6px' onClick={tempResetEvent}>전체 삭제</Button>
                <Button backgroundColor='mainColor' color='white' borderRadius='12px' width='42%' height='40px' cursor='pointer' hoverBackgroundColor='#3eb3fb' margin='0 6px' onClick={useSavePlanEvent}>변경사항 저장</Button>
            </FlexDiv>
        </FlexDiv>
    )
}

export default PlanNav