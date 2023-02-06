import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { curMarkerPosState, mapCenterState, tempPlanListState } from "../../recoil/state";

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

    const setCurMarkerPos = useSetRecoilState(curMarkerPosState)
    const setMapCenter = useSetRecoilState(mapCenterState)
    const [tempPlanList, setTempPlanList] = useRecoilState(tempPlanListState)

    let type
    if (types.includes('convenience_store')) {
        type = '편의점'
    }
    else if (types.includes('cafe')) {
        type ='카페'
    }
    else if (types.includes('lodging')) {
        type ='숙소'
    }
    else if (types.includes('restaurant')) {
        type ='음식점'
    }
    else if (types.includes('shopping_mall')) {
        type ='쇼핑'
    }
    else if (types.includes('tourist_attraction')) {
        type ='관광명소'
    }
    else{
        type = '기타'
    }

    const curMarkersettingEvent = () => {
        setCurMarkerPos(position)
        setMapCenter(position[0])
    }

    const addPlanBlockEvent = () => {
        const newPlanBlock = {
            "blockName": name,
            "blockTime": "hh:mm:ss",
            "blockCategory": type,
            "blockXCoordinate": position[0].lng, // lng
            "blockYCoordinate": position[0].lat, // lat
            "blockCost": null
        }

        // let temp = [tempPlanList]
        // console.log(temp)
        //temp
    }

    return (
        <FlexDiv width='270px' backgroundColor='white' borderRadius='12px' margin='8px 0'>
            <Image width='80px' height='80px' borderRadius='12px 0 0 12px' src={img ? img : require('../../img/attach_image.svg').default} />
            <FlexDiv flexDirection='column' padding='0 8px' width='190px'>
                <FlexDiv alignItems='baseline'>
                    <PlaceNameDiv fontSize='16px' maxWidth='134px' padding='10px 4px 2px' cursor='pointer' onClick={curMarkersettingEvent}>
                        {name}
                    </PlaceNameDiv>
                    <Div fontSize='12px' color='letterGray'>
                        {type}
                    </Div>
                </FlexDiv>
                <FlexDiv justifyContent='right'>
                    <Button fontSize='14px' border='1px solid #E1E4E6' color='mainColor' padding='4px 12px' width='100px' borderRadius='12px' margin='8px 0 0 0' cursor='pointer' hoverColor='#E1E3E6' onClick={addPlanBlockEvent}>일정에 추가</Button>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}

export default SearchItem