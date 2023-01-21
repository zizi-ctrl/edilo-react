import React from "react";
import styled from "styled-components";

import { Img } from "../../styles/style";
import { Footer } from "../../styles/style";

const Icon = styled(Img)`
    filter: invert(40%) sepia(0%) saturate(1774%) hue-rotate(260deg) brightness(94%) contrast(89%);

    ${(props) => props.filter ? 'filter: invert(57%) sepia(66%) saturate(725%) hue-rotate(179deg) brightness(106%) contrast(93%);' : ''}}
`



const FooterComponent = () => {
    return (
        <Footer display='flex' justifyContent='space-around' align='row-vertical-center' position='fixed' bottom='0px' width='100%' height='70px' borderTop='1px solid #F0F3F5'>
            <Icon src={require('../../img/home.svg').default} filter={true}/>
            <Icon src={require('../../img/map.svg').default}/>
            <Icon src={require('../../img/community.svg').default}/>
            <Icon src={require('../../img/profile.svg').default}/>
        </Footer>
    )
}

export default FooterComponent