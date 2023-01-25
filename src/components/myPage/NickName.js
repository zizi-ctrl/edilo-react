import React, { useCallback } from "react";
import { useState } from "react";

import { Img, Input, Div, FlexDiv, Button } from "../../styles/style";

const Nickname = () => {
    const [ clickCheck, setClickCheck ] = useState(false)
    const [ inputValue, setInputValue ] = useState('여행가132') // 나중엔 원래 닉네임이 들어갈 예정

    const changeNickname = () => {
        clickCheck ? setClickCheck(false) : setClickCheck(true)
    }
    // 작성한 닉네임이 현재와 같은 경우엔 그냥 input을 div로 바꿔주기만 하면 되고, 변경되었을경우엔 닉네임 변경 api보내고 새로고침하도록 changeNickName 안 변경해주기
    // inputValue == nickName 

    const onChange = useCallback(e => {
        setInputValue(e.target.value)
    })

    return(
        <FlexDiv align='row-vertical-center'>
                    {
                        clickCheck ?
                        <Input border='1px solid #E1E4E6' padding='4px'  borderRadius='12px' width='fit-content' type='text' value={inputValue} onChange={onChange}/> :
                        <Div>여행가132</Div>
                    }
                    
                    <Button onClick={changeNickname}>
                        <Img src={require('../../img/pencil.svg').default} width='16px' margin='0 8px' cursor='pointer'/>
                    </Button>
                </FlexDiv>
    )
}

export default Nickname