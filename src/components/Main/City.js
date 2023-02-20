import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import useFetch from '../../hooks/useFetch'
import { FlexDiv, Div, Img, Button } from "../../styles/style";
import CityInfo from "./CityInfo";


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
    const { cityIndex, cityEnglishName, cityImgUrl, cityName } = city
    const [showCityInfo, setShowCityInfo] = useState(false)
    const [cityInfo, setCityInfo] = useState([])
    // const cityIndex = 0
    // "cityEnglishName": string,
    // 		"timeDiff": number,
    // 		"exchangeRate": number,
    // 		"flightTime": string,
    // 		"visa":string
    const useCityClickEvent = async () => {
        const data = useFetch('/city/info', 'GET', `?cityIndex=${cityIndex}`, true)
        setCityInfo(data)
        setShowCityInfo(true)
    }


    return (
        <React.Fragment>
            <Div>
                <CityImg height='160px' margin='20px' flexBasis='25%' align='column-center' justifyContent='center' backgroundImg={cityImgUrl ? 'url(' + cityImgUrl + ')' : 'url(https://www.gotokyo.org/shared/images/pages/destinations/western-tokyo/shibuya/images/78_0153_2.jpg)'} borderRadius='20px' cursor='pointer' onClick={useCityClickEvent}>
                    <CityDiv fontSize='40px' cursor='pointer'>{cityEnglishName ? cityEnglishName : 'TOKYO'}</CityDiv>
                    <CityDiv fontSize='20px' cursor='pointer'>{cityName}</CityDiv>
                </CityImg>
            </Div>
            {
                showCityInfo && <CityInfo cityEnglishName={cityEnglishName ? cityEnglishName : 'TOKYO'} cityImg={cityImgUrl ? cityImgUrl : 'https://www.gotokyo.org/shared/images/pages/destinations/western-tokyo/shibuya/images/78_0153_2.jpg'} cityName={cityName} cityInfo={cityInfo} setShowCityInfo={setShowCityInfo} />
            }
        </React.Fragment>
    )

}


export default City