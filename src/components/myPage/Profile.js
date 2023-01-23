import React from "react";
import styled from "styled-components";

import { FlexDiv, Div, Img, Button } from "../../styles/style";

const ProfileImg = styled(Img)`
    object-fit: cover;
`

const Icon = styled(Img)`
    filter: invert(57%) sepia(66%) saturate(725%) hue-rotate(179deg) brightness(106%) contrast(93%);
`

const Profile = () => {
    return (
        <FlexDiv borderRadius='30px' width='80%' height='180px' margin='30px 0' backgroundColor='white' justifyContent='space-around' align='row-vertical-center'>
            <FlexDiv padding='0 0 0 6%' width='50%' align='row-vertical-center' borderRight='4px dotted #E1E4E6'>
                <Div width='130px' height='130px'>
                    <ProfileImg borderRadius='50%' width='100%' height='100%' src='https://cdn.pixabay.com/photo/2021/08/24/01/44/cat-6569156__340.jpg'/>
                    <Button position='relative' bottom='30px' left='90px'>
                        <Img src={require('../../img/camera.svg').default} cursor='pointer'/>
                    </Button>
                </Div>
                <Div margin='0 44px' fontSize='24px'>여행가132</Div>
            </FlexDiv>
            <FlexDiv width='50%' align='row-vertical-center' justifyContent='space-around' padding='0 10%'>
                <FlexDiv align='column-center'>
                    <Img src={require('../../img/star_full.svg').default}/>
                    <Div fontSize='24px' margin='10px 0'>20</Div>
                    <Div fontSize='16px'>스크랩</Div>
                </FlexDiv>
                <FlexDiv align='column-center'>
                    <Icon src={require('../../img/map.svg').default}/>
                    <Div fontSize='24px' margin='10px 0'>15</Div>
                    <Div fontSize='16px'>내 일정</Div>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}

export default Profile