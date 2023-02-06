import React from "react";
import styled from "styled-components";

import { Img, FlexDiv, Div, Button } from "../../styles/style";

const Image = styled(Img)`  
    object-fit: cover;
`

const PlaceNameDiv = styled(Div)`   
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const SearchItem = (props) => {
    const { eachResult } = props
    const { name, types, img, position } = eachResult

    return (
        <FlexDiv width='270px' backgroundColor='white' borderRadius='12px' margin='8px 0'>
            <Image width='80px' height='80px' borderRadius='12px 0 0 12px' src={img ? img : require('../../img/attach_image.svg').default} />
            <FlexDiv flexDirection='column' padding='0 8px' width='190px'>
                <FlexDiv alignItems='baseline'>
                    <PlaceNameDiv fontSize='16px' maxWidth='134px' padding='10px 4px 2px' cursor='pointer'>
                        {name}
                    </PlaceNameDiv>
                    <Div fontSize='12px' color='letterGray'>
                        {types.includes('convenience_store') && '편의점' 
                        || types.includes('cafe') && '카페'
                        || types.includes('lodging') && '숙소'
                        || types.includes('restaurant') && '음식점'
                        || types.includes('shopping_mall') && '쇼핑'
                        || types.includes('tourist_attraction') && '관광명소'
                        || '기타'}
                    </Div>
                </FlexDiv>
                <FlexDiv justifyContent='right'>
                    <Button fontSize='14px' border='1px solid #E1E4E6' color='mainColor' padding='4px 12px' width='100px' borderRadius='12px' margin='8px 0 0 0' cursor='pointer' hoverColor='#E1E3E6'>일정에 추가</Button>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}

export default SearchItem