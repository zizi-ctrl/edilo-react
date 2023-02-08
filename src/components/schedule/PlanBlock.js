import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { dragLabelState, planModifyCheckState, tempPlanBlockListState } from "../../recoil/state";

import { FlexDiv, Img, Div } from "../../styles/style";

const Icon = styled(Img)`
    filter: invert(51%) sepia(2%) saturate(11%) hue-rotate(342deg) brightness(90%) contrast(86%);
`

const Block = styled(FlexDiv)`
    min-height: 60px;
`

const PlanBlock = (props) => {
    const { eachPlan, label } = props
    console.log(eachPlan) // undefined 출력 머지??????

    const [tempPlanBlockList, setTempPlanBlockList] = useRecoilState(tempPlanBlockListState)
    const setPlanModifyCheck = useSetRecoilState(planModifyCheckState)

    const [dragLabel, setDragLabel] = useRecoilState(dragLabelState)

    const deletePlanBlock = (e) => {
        setPlanModifyCheck(true)

        let tempList = [...tempPlanBlockList]
        tempList = tempList.filter((_, index) => index != (label - 1))

        setTempPlanBlockList(tempList)
    }

    const dragDropEvent = (index) => {
        if (dragLabel != index) {
            let tempList = [...tempPlanBlockList]
            let temp = tempList[index - 1]

            setPlanModifyCheck(true)

            tempList[index - 1] = tempList[dragLabel - 1]
            tempList[dragLabel - 1] = temp

            console.log(tempList)
            setTempPlanBlockList(tempList)
        }
    }

    const dragStartEvent = (index) => {
        setDragLabel(index)
    }

    const dragOverEvent = (e, index) => {
        e.preventDefault();
    }


    if (eachPlan) { // undefined 아니면 블록 만들어주기
        const { blockName, blockCategory, blockXCoordinate, blockYCoordinate } = eachPlan

        return (
            <FlexDiv alignItems='center' margin='4px 8px' draggable={true} onDragOver={(e) => dragOverEvent(e, label)} onDrop={(e) => dragDropEvent(label)} onDragStart={(e) => dragStartEvent(label)}>
                <Div position='relative' margin='0 10px 0 8px  '>
                    <Img width='28px'
                        src={
                            blockCategory == '숙소' && require('../../img/marker_hotel.svg').default
                            || blockCategory == '편의점' && require('../../img/marker_convenience_store.svg').default
                            || blockCategory == '음식점' && require('../../img/marker_restaurant.svg').default
                            || blockCategory == '쇼핑' && require('../../img/marker_shop.svg').default
                            || blockCategory == '관광명소' && require('../../img/marker_attraction.svg').default
                            || require('../../img/marker_etc.svg').default} />
                    <Div position='absolute' top='2px' left={label > 9 ? '6px' : '10px'}>
                        {label}
                    </Div>
                </Div>
                <Block position='relative' width='220px' height='fit-content' backgroundColor='white' flexDirection='column' justifyContent='center' borderRadius='12px' padding='0 10px'>
                    <Div padding='0 18px 0 0'>
                        {blockName}
                    </Div>
                    <Div fontSize='12px' color='iconGray' padding='2px 0'>
                        {blockCategory}
                    </Div>
                    <Icon cursor='pointer' position='absolute' src={require('../../img/close_line.svg').default} width='18px' top='4px' right='4px' onClick={deletePlanBlock} />
                </Block>
            </FlexDiv>
        )
    }
}

export default PlanBlock