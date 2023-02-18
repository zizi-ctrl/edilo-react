import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { mainCityState } from "../../recoil/backendState";
import { FlexDiv } from "../../styles/style";
import City from "./City";


const CitysBox = () => {
    const [cityList, setCityList] = useRecoilState(mainCityState)

    console.log(cityList)

    
    return (
        <FlexDiv width='60%' minWidth='800px' maxWidth='999px' flexWrap='wrap' margin='50px 0' justifyContent='space-between'>
            {
                cityList.map((city) => <City city={city}/>)
            }
        </FlexDiv>
    )
}


export default CitysBox