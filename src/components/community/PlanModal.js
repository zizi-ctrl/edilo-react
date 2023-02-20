import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { planListState } from "../../recoil/backendState";
import { userSelectPlan } from "../../recoil/state";

import { FlexDiv, Div, Img, Button } from "../../styles/style";


const PlanModal = (props) => {
    const { setPlanModal, plan } = props
    const [selectPlan, setSelectPlan] = useRecoilState(userSelectPlan)
    const userPlanData = useRecoilValue(planListState)


    const closeEvent = () => setPlanModal(false)

    const selectPlanEvent = () => {
        setSelectPlan('planName')
    }
    

    return (
        <FlexDiv backgroundColor='#0000008a' minWidth='1024px' width='100%' height='100vh' top='0' left='0' position='fixed' justifyContent='center' alignItems='center' onClick={closeEvent} zIndex='2'>
            <FlexDiv width='740px' padding='64px' position='relative' borderRadius='12px' flexDirection='column' justifyContent='space-around' margin='48px' backgroundColor='white' onClick={(e) => e.stopPropagation()}>
                <Div color='letterGray' borderBottom='1px solid #E1E3E6' padding='16px 0' fontSize='18px'>나의 일정</Div>
                {
                    plan && plan.map((item) =>
                        <FlexDiv alignItems='center' justifyContent='space-between' borderBottom='1px solid #EEEEEE'>
                            <FlexDiv flexDirection='column' padding='22px 0 8px'>
                                <Div fontSize='18px' padding='8px 0 0'>{'여행'}</Div>
                                <Div fontSize='14px' padding='8px 0 0'>{'2023.12.14'}</Div>
                            </FlexDiv>
                            <Img src={selectPlan == 'planName' ? require('../../img/check_line.svg').default : require('../../img/plus.svg').default} onClick={selectPlanEvent} />
                        </FlexDiv>
                    )
                }
                <Button>
                    <Img position='absolute' top='4px' right='4px' onClick={closeEvent} src={require('../../img/close_line.svg').default} cursor='pointer' />
                </Button>
            </FlexDiv>
        </FlexDiv>
    )
}


export default PlanModal