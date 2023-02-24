import React from "react";
import styled from "styled-components";

import { Button, Div, FlexDiv, Img, Span } from "../../styles/style";

const LabelDiv = styled(Div)`
    font-size: 14px;
    color: #919699;
    margin: ${(props) => props.margin ? props.margin : '36px 0 8px'}
`

const NoticeItem = (props) => {
    const { senderNickname, alarmCategory, postTitle } = props.eachNotice

    return (
        <FlexDiv flexDirection='column' borderBottom='1px solid #E1E4E6' margin='0 0 14px 0'>
            <FlexDiv justifyContent='space-between' alignItems='baseline'>
                <Div>
                    <Div display='inline-block' color='#4980A3' fontSize='18px'>{senderNickname + '님이'}&nbsp;</Div>
                    <Div display='inline-block' fontSize='18px' cursor='pointer'>
                        {
                            alarmCategory == 'reply' ?
                            '댓글을 남겼습니다.' :
                            '좋아요를 남겼습니다.'
                        }    
                    </Div>
                </Div>
                <Button>
                    <LabelDiv cursor='pointer'>
                        삭제
                    </LabelDiv>
                </Button>
            </FlexDiv>
            <LabelDiv margin='12px 0 26px'>
                {postTitle}
            </LabelDiv>
        </FlexDiv>
    )
}

export default NoticeItem