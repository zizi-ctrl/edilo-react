import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import useFetch from '../../hooks/useFetch'
import { FlexDiv, Div, Img, Button } from "../../styles/style";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../../recoil/state";
import CityInfo from "./CityInfo";


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
    // "cityEnglishName": string,
    // 		"timeDiff": number,
    // 		"exchangeRate": number,
    // 		"flightTime": string,
    // 		"visa":string
    const useCityClickEvent = async () => {
        setShowCityInfo(true)

        // 게시글 불러오기 test
        const url = '/post/all'
        const params = `?postCategory=${1}`
        try {
            const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + url + params + `&postPage=${1}`, {
                "method": "GET",
                "mode": 'cors', // no-cors, *cors, same-origin
                "credentials": "include"
            })
            const result = await response.json()
        }
        catch (err) {
            console.log(`ERR : ${err}`)
        }
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
                showCityInfo && <CityInfo cityIndex={cityIndex} cityEnglishName={cityEnglishName} cityImg={cityImg} cityName={cityName} setShowCityInfo={setShowCityInfo} />
            }
        </React.Fragment>
    )

}


export default City