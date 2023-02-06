import React from "react";
import styled from "styled-components";

import { FlexDiv, Img, Div } from "../../styles/style";

const Icon = styled(Img)`
    filter: invert(51%) sepia(2%) saturate(11%) hue-rotate(342deg) brightness(90%) contrast(86%);
`

const Block = styled(FlexDiv)`
    min-height: 60px;
`

const PlanBlock = (props) => {
    const { eachPlan, label } = props
    console.log(eachPlan)
    if (eachPlan) {
        const { blockName, blockCategory, blockXCoordinate, blockYCoordinate } = eachPlan

        return (
            <FlexDiv alignItems='center' margin='4px 0'>
                <Div position='relative' margin='0 10px 0 10px  '>
                    <Img width='28px' 
                    src={
                        blockCategory == '숙소' && require('../../img/marker_hotel.svg').default
                        || blockCategory == '편의점' && require('../../img/marker_convenience_store.svg').default
                        || blockCategory == '음식점' && require('../../img/marker_restaurant.svg').default
                        || blockCategory == '쇼핑' && require('../../img/marker_shop.svg').default
                        || blockCategory == '관광명소' && require('../../img/marker_attraction.svg').default
                        || require('../../img/marker_etc.svg').default} />
                    <Div position='absolute' top='2px' left='10px'>
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
                    <Icon cursor='pointer' position='absolute' src={require('../../img/close_line.svg').default} width='18px' top='4px' right='4px' />
                </Block>
            </FlexDiv>
        )
    }
}

export default PlanBlock