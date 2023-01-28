import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FlexDiv, Img } from "../../styles/style";

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    cursor: pointer;
`

const CommunityNavCategory = (props) => {
    const { cityObject } = props
    const { cityCategory, name } = cityObject
    const [ clickToggle, setClickToggle ] = useState(false)

    const toggleControl = () => {
        clickToggle ? setClickToggle(false) : setClickToggle(true)
    }

    if (typeof(cityObject) == 'string'){    // 더 이상 하위메뉴 존재하지 않음
        return(
            <FlexDiv width='190px' align='row-vertical-center' height='40px' fontSize='18px' borderBottom='1px solid #E1E4E6' margin='12px 0' justifyContent='space-between' cursor='pointer'>
                <StyledLink>{cityObject}</StyledLink>
            </FlexDiv>   
        )
    }
    else{
        return (
            <React.Fragment>
                <FlexDiv width='190px' align='row-vertical-center' height='40px' fontSize='18px' borderBottom={!clickToggle && '1px solid #E1E4E6' || ''} borderTop={clickToggle && '1.5px solid black' || ''} fontWeight={clickToggle && '600' || ''} margin='12px 0' justifyContent='space-between' cursor='pointer' onClick={toggleControl}>
                    {cityCategory}
                    { 
                        clickToggle ? 
                        <Img cursor='pointer' src={require('../../img/menuclose.svg').default}/> :
                        <Img cursor='pointer' src={require('../../img/menudown.svg').default}/>
                    }
                </FlexDiv> 
                {
                    clickToggle &&
                    <FlexDiv width='190px' align='row-vertical-center' height='40px' fontSize='18px' borderBottom='1px solid #E1E4E6' margin='12px 0' justifyContent='space-between' cursor='pointer'>
                        <StyledLink>{cityCategory} 전체</StyledLink>
                    </FlexDiv> 
                }
                {
                    // 클릭하면 하위목록 동일한 형태로 출력
                    clickToggle &&
                    name.map((item) => <CommunityNavCategory cityObject={item}/>)
                }
            </React.Fragment>
        )
    }
}

export default CommunityNavCategory