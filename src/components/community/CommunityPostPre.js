import React from "react";
import { Link } from "react-router-dom";
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

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    cursor: pointer;
`

const CommunityPostPre = (props) => {
    const { areaTag, postTitle, postDate, postWriter, postImg } = props.eachPost
    const [year, month, day] = postDate.split('-')

    // 클릭해서 게시글 상세페이지로 넘어갈 때, 현재 게시글 state 초기화

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
            <StyledLink to='post'>
                <FlexDiv justifyContent='space-between' margin='10px 0 0 0'>
                    <FlexDiv fontSize='20px' margin='0 10px 10px 0' cursor='pointer' flexDirection='column'>
                        {postTitle}
                        <LabelDiv margin='32px 0 36px'>
                            by {postWriter}
                        </LabelDiv>
                    </FlexDiv>
                    <Div width='100px' height='100px'>
                        {
                            postImg != '' && <PostImgTag cursor='pointer' src={postImg} alt='' width='100px' height='100px' borderRadius='14px' />
                        }
                    </Div>
                </FlexDiv>
            </StyledLink>
        </FlexDiv>
    )
}

export default CommunityPostPre