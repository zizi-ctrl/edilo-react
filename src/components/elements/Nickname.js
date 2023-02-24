import React, { useCallback } from "react";
import { useState } from "react";

import useFetch from '../../hooks/useFetch'
import { Img, Input, Div, FlexDiv, Button } from "../../styles/style";

const Nickname = (props) => {
    const { userNickname } = props
    const [clickCheck, setClickCheck] = useState(false)
    const [inputValue, setInputValue] = useState(userNickname) // 나중엔 원래 닉네임이 들어갈 예정


    const onChange = useCallback(e => {
        setInputValue(e.target.value)
    })

    const changeNickname = () => {
        clickCheck ? setClickCheck(false) : setClickCheck(true)
    }
    // 작성한 닉네임이 현재와 같은 경우엔 그냥 input을 div로 바꿔주기만 하면 되고, 변경되었을경우엔 닉네임 변경 api보내고 새로고침하도록 changeNickName 안 변경해주기
    // inputValue == nickName 
    // useFetch('/account/nickname', 'PUT', {
    //     "userIndexValue": number,
    //     "nicknameValue": string
    // })


    return (
        <FlexDiv align='row-vertical-center'>
            {
                clickCheck ?
                    <Input border='1px solid #E1E4E6' padding='4px 8px' borderRadius='12px' width='fit-content' type='text' value={inputValue} onChange={onChange} /> :
                    <Div>{userNickname}</Div>
            }
            <Button margin='0 8px' onClick={changeNickname}>
                <Img src={require('../../img/pencil.svg').default} width='16px' cursor='pointer' />
            </Button>
        </FlexDiv>
    )
}

export default Nickname