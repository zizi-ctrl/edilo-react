import React from "react";
import styled from "styled-components";

import { Div, FlexDiv, Img } from "../../styles/style";

const LabelDiv = styled(Div)`
    font-size: 14px;
    color: #919699;
    margin: ${(props) => props.margin ? props.margin : '36px 0 8px'}
`

const PostImgTag = styled(Img)`
    object-fit: cover;
`

const CommunityPostPre = (props) => {
    const { areaTag, postTitle, postDate, postWriter, postImg } = props.eachPost
    const [ year, month, day ] = postDate.split('-')

    return (
        <FlexDiv flexDirection='column' borderBottom='1px solid #E1E4E6'>
            <FlexDiv justifyContent='space-between'>
                <LabelDiv>
                    {areaTag.cityCategory + 
                    (areaTag.cityCountry ? ' · ' + areaTag.cityCountry : '') + 
                    (areaTag.cityName ? ' · ' + areaTag.cityName : '')}
                </LabelDiv>
                <LabelDiv>
                    {year}.{month}.{day}
                </LabelDiv>
            </FlexDiv>
            <FlexDiv justifyContent='space-between' margin='10px 0 0 0'>
                <Div fontSize='20px' margin='0 10px 10px 0' cursor='pointer'>
                    {postTitle}
                </Div>
                {
                    postImg != '' && <PostImgTag src={postImg} alt='' width='100px' height='100px' borderRadius='14px'/>
                }
            </FlexDiv>
            <LabelDiv margin='8px 0 36px'>
                by {postWriter}
            </LabelDiv>
        </FlexDiv>
    )
}

export default CommunityPostPre