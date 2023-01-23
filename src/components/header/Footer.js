import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom"

import { Img } from "../../styles/style";
import { Footer } from "../../styles/style";

const Icon = styled(Img)`
    filter: 
    ${(props) => props.filter ? 
        'invert(57%) sepia(66%) saturate(725%) hue-rotate(179deg) brightness(106%) contrast(93%);' : 
        'invert(40%) sepia(0%) saturate(1774%) hue-rotate(260deg) brightness(94%) contrast(89%);'}}
`

const FooterComponent = () => {
    const path = useLocation().pathname

    console.log(path)

    return (
        <Footer display='flex' justifyContent='space-around' align='row-vertical-center' position='fixed' bottom='0px' width='100%' height='70px' borderTop='1px solid #F0F3F5'>
            <Link to="/">
                <Icon src={require('../../img/home.svg').default} filter={path == '/' ? 'true' : undefined}/>
            </Link>
            <Link to="/">
                <Icon src={require('../../img/map.svg').default} filter={path == '/' ? 'true' : undefined}/>
            </Link>
            <Link to="/community">
                <Icon src={require('../../img/community.svg').default} filter={path == '/community' ? 'true' : undefined}/>
            </Link>
            <Link to="/myPage/setting">
                <Icon src={require('../../img/profile.svg').default} filter={path == '/myPage' ? 'true' : undefined}/>
            </Link>
        </Footer>
    )
}

export default FooterComponent