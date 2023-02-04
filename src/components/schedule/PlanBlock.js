import React from "react";
import styled from "styled-components";

import { FlexDiv, Img, Div } from "../../styles/style";

const Icon = styled(Img)`
    filter: invert(51%) sepia(2%) saturate(11%) hue-rotate(342deg) brightness(90%) contrast(86%);
`

const Block = styled(FlexDiv)`
    min-height: 60px;
`

const PlanBlock = () => {
    const place = '시부야 스카이'
    const category = '관광명소'
    const label = '1'

    return (
        <FlexDiv alignItems='center' margin='4px 0'>
            <Div position='relative' margin='0 10px 0 10px  '>
                <Img width='28px' src={require('../../img/marker_attraction.svg').default} />
                <Div position='absolute' top='2px' left='10px'>
                    {label}
                </Div>
            </Div>
            <Block position='relative' width='220px' height='fit-content' backgroundColor='white' flexDirection='column' justifyContent='center' borderRadius='12px' padding='0 10px'>
                <Div padding='0 18px 0 0'>
                    {place}
                </Div>
                <Div fontSize='12px' color='iconGray' padding='2px 0'>
                    {category}
                </Div>
                <Icon cursor='pointer' position='absolute' src={require('../../img/close_line.svg').default} width='18px' top='4px' right='4px'/>
            </Block>
        </FlexDiv>
    )
}

export default PlanBlock