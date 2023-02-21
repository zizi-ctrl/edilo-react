import React, { useState } from "react";
import styled from "styled-components";

import { Div, FlexDiv, Img } from "../../styles/style";
import { Btn } from "../containers/CommunityMain";


const OrderSelect = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [order, setOrder] = useState('최신순')
    const [orderArr, setOrderArr] = useState(['최신순', '좋아요순'])


    const BtnClickEvent = () => {
        isClicked ? setIsClicked(false) : setIsClicked(true)
    }

    const orderClickEvent = () => {
        setOrder(orderArr[1])
        const tempArr = [orderArr[1], orderArr[0]]
        setOrderArr(tempArr)
    }


    return (
        <Btn height='32px' onClick={BtnClickEvent} position='relative' width='86px'>
            <FlexDiv>
                {/* 여기 아닌 곳 클릭하면 닫히도록 */}
                <Div cursor='pointer' fontSize='14px' padding='0 4px'>{orderArr[0]}</Div>
                {/* <Div cursor='pointer' fontSize='14px' padding='0 4px'>좋아요순</Div> */}
                {
                    isClicked ?
                    <Img width='20px' display='inline' cursor='pointer' src={require('../../img/menuclose.svg').default} />
                    :
                    <Img width='20px' display='inline' cursor='pointer' src={require('../../img/menudown.svg').default} />
                }
                {
                    isClicked &&
                    <FlexDiv position='absolute' backgroundColor='white' fontSize='14px' top='23px' right='0px' height='32px' width='86px' borderRadius='0 0 12px 12px' padding='8px 10px' cursor='pointer' onClick={orderClickEvent}>{orderArr[1]}</FlexDiv>
                }
            </FlexDiv>
        </Btn>
    )
}


export default OrderSelect