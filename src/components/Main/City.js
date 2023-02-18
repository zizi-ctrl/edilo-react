import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import useFetch from '../../hooks/useFetch'
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
    const [showCityInfo, setShowCityInfo] = useState(false)
    const cityIndex = 0

    const useCityClickEvent = async () => {
        const data = await useFetch('/city/info', `?cityIndex=${cityIndex}`, 'GET', true)
        console.log(data)

        
        setShowCityInfo(true)
    }

    const closeCityInfoEvent = () => {
        setShowCityInfo(false)
    }


    return (
        <React.Fragment>
            <StyledLink>
                <CityImg height='160px' margin='20px' flexBasis='25%' align='column-center' justifyContent='center' backgroundImg={'url(' + cityImg + ')'} borderRadius='20px' cursor='pointer' onClick={useCityClickEvent}>
                    <CityDiv fontSize='40px' cursor='pointer'>{cityEnglishName}</CityDiv>
                    <CityDiv fontSize='20px' cursor='pointer'>{cityName}</CityDiv>
                </CityImg>
            </StyledLink>
            {
                showCityInfo &&
                <React.Fragment>
                    <FlexDiv backgroundColor='#0000008a' width='100%' height='100vh' top='0' left='0' position='fixed' zIndex='1000' justifyContent='center' alignItems='center' onClick={closeCityInfoEvent}>
                        <Div color='black' backgroundColor='white'>안녕하세요</Div>
                    </FlexDiv>
                </React.Fragment>
            }
        </React.Fragment>
    )

}


export default City