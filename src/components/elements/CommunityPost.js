import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { currentPostState } from "../../recoil/backendState";
import { Div, Button, FlexDiv, PTag, Img } from "../../styles/style";

const LabelDiv = styled(Div)`
    font-size: 14px;
    color: #919699;
`

const Textarea = styled.textarea`
    width: 100%;
    height: 140px;
    background-color: #F0F3F5;
    border-radius: 18px;

    margin: 46px 0;
    padding: 32px 24px;

    border: none;
    resize: none;

    &:focus {
        outline: none;
    }
`

const ImgDiv = styled(FlexDiv)`
    overflow-x: scroll;
    object-fit: contain;

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #E1E3E6;
        border-radius: 30px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #CCCCCC;
    }

    ::-webkit-scrollbar-track {
        background: #F0F3F5;
        border-radius: 30px;
    }
`

const AttachImg = styled(Img)`
    user-select: none;
`

const ProfileImg = styled(Img)`
    object-fit: cover;
`


const CommunityPost = () => {
    const location = useLocation()
    const [postInfo, setPostInfo] = useRecoilValue(currentPostState)
    console.log(postInfo)
    const { areaTag, postTitle, postDate, postWriter, postImg, postCategory, view, like, scrap, postContent, postIndex, comment } = postInfo
    const [year, month, day] = postDate.split('-')

    useEffect(() => {
        const fc = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + location.pathname + location.search, {
                    "method": "GET",
                    "mode": 'cors', // no-cors, *cors, same-origin
                    "credentials": "include"
                })
                const result = await response.json()
    
                
                if (result.success) {
                    setPostInfo(result)
                    console.log(result)
                }
            }
            catch (err) {
                console.log(`ERR : ${err}`)
            }
        }
    })


    return (
        <FlexDiv width='100%' justifyContent='center' padding='20px 0 140px 260px'>
            <FlexDiv backgroundColor='white' width='90%' padding='24px 96px' margin='20px 0 0 0' borderRadius='30px' flexDirection='column'>
                <FlexDiv>
                    <LabelDiv margin='36px 0 8px'>
                        {areaTag.cityCategory +
                            (areaTag.cityCountry ? ' · ' + areaTag.cityCountry : '') +
                            (areaTag.cityName ? ' · ' + areaTag.cityName : '')}
                    </LabelDiv>
                </FlexDiv>
                <FlexDiv>
                    <FlexDiv fontSize='20px' fontWeight='600'>
                        {postTitle}
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv justifyContent='space-between' margin='24px 0' padding='0 0 16px 0' borderBottom='1px solid #333333'>
                    {/* 왼쪽 */}
                    <FlexDiv alignItems='center'>
                        <LabelDiv>
                            {year}.{month}.{day}
                        </LabelDiv>
                        <LabelDiv margin='0 18px 0 10px'>
                            by {postWriter}
                        </LabelDiv>
                        <Button padding='0 4px'>
                            <LabelDiv>
                                수정
                            </LabelDiv>
                        </Button>
                        <Button padding='0 4px'>
                            <LabelDiv>
                                삭제
                            </LabelDiv>
                        </Button>
                    </FlexDiv>
                    {/* 오른쪽 */}
                    <FlexDiv>
                        <LabelDiv margin='0 12px 0 2px'>
                            조회수 {view}
                        </LabelDiv>
                        <LabelDiv margin='0 12px 0 2px'>
                            댓글 수 {comment.length}
                        </LabelDiv>
                        <LabelDiv margin='0 12px 0 2px'>
                            스크랩 {scrap}
                        </LabelDiv>
                        <LabelDiv margin='0 12px 0 2px'>
                            좋아요 {like}
                        </LabelDiv>
                    </FlexDiv>
                </FlexDiv>

                {/* 여행기 첨부한 경우 */}

                {/* 게시글 내용 시작 */}
                <PTag margin='36px 0' dangerouslySetInnerHTML={{__html: postContent}}>
                </PTag>

                {/* 첨부된 이미지 */}
                <ImgDiv width='100%' height='380px' margin='0 0 48px 0'>
                    {
                        postImg.map((img) => <AttachImg pointerEvent='none' width='auto' height='350px' margin='8px' src={img} />)
                    }
                </ImgDiv>
                <FlexDiv justifyContent='right' borderBottom='1px solid black' padding='24px 0'>
                    <Button border='1.5px solid #0097F5' margin='0 12px' borderRadius='12px' height='36px'>
                        <FlexDiv alignItems='center'>
                            <Img width='16px' src={require('../../img/heart.svg').default} margin='0 2px' />
                            <Div color='mainColor' fontSize='14px'>
                                {like}
                            </Div>
                        </FlexDiv>
                    </Button>
                    <Button border='1.5px solid #0097F5' borderRadius='12px' height='36px'>
                        <FlexDiv alignItems='center'>
                            <Img width='18px' src={require('../../img/star_full.svg').default} margin='0 2px' />
                            <Div color='mainColor' fontSize='14px'>
                                {scrap}
                            </Div>
                        </FlexDiv>
                    </Button>
                </FlexDiv>
                {/* 댓글 작성*/}
                <Div position='relative'>
                    <Textarea></Textarea>
                    <Button position='absolute' right='8px' top='190px' backgroundColor='mainColor' borderRadius='10px' height='28px' width='54px' color='white'>
                        등록
                    </Button>
                </Div>
                {
                    comment.map((eachComment) => {
                        const [year, month, day] = eachComment.commentDate.split('-')

                        return (
                            <FlexDiv margin='18px 0'>
                                <ProfileImg width='60px' height='60px' borderRadius='50%' src={eachComment.commentWriterImg} margin='0 12px 0 0' />
                                <FlexDiv flexDirection='column'>
                                    <Div>{eachComment.commentWriter}</Div>
                                    <FlexDiv>
                                        <LabelDiv fontSize='14px' margin='4px 0'>
                                            {year}.{month}.{day}
                                        </LabelDiv>
                                        {
                                            postWriter == eachComment.commentWriter &&
                                            <Button margin='0 0 0 8px'>
                                                <LabelDiv>
                                                    삭제
                                                </LabelDiv>
                                            </Button>
                                        }
                                    </FlexDiv>
                                    <Div margin='8px 0'>
                                        {eachComment.commentContent}
                                    </Div>
                                </FlexDiv>
                            </FlexDiv>
                        )
                    })
                }
            </FlexDiv>
        </FlexDiv>
    )
}

export default CommunityPost