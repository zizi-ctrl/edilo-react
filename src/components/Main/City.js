import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FlexDiv, Div } from "../../styles/style";


const StyledLink = styled(Link)`
    text-decoration: none;
`

const CityDiv = styled(Div)`
    color: white;
    text-shadow: 0px 3px 10px #555555;
`

const CityImg = styled(FlexDiv)`
    max-width: 160px;
    min-width: 160px;
`


const City = (props) => {
    const { city } = props
    const { cityEnglishName, cityImg, cityName } = city


    return (
        <StyledLink>
            <CityImg height='160px' margin='20px' flexBasis='25%' align='column-center' justifyContent='center' backgroundImg={'url(' + cityImg + ')'} borderRadius='20px' cursor='pointer'>
                <CityDiv fontSize='40px' cursor='pointer'>{cityEnglishName}</CityDiv>
                <CityDiv fontSize='20px' cursor='pointer'>{cityName}</CityDiv>
            </CityImg>
        </StyledLink>
    )
}


export default City