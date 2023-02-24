import React, { useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil"

import Profile from "./Profile"
import MyPageNav from '../navs/MyPageNav'
import Setting from './Setting'
import Clipping from './Clipping'
import Notice from './Notice'
import { isLoginState } from "../../recoil/state"
import { FlexDiv } from "../../styles/style"


const MyPage = () => {
    // 미디어 쿼리 중간 지점 950px (레이아웃 깨져서 안이쁘게 보임)
    const isLogin = useRecoilValue(isLoginState)
    const navigate = useNavigate()


    useEffect(() => {
        if (!isLogin) {
            navigate('/login')
        }
    })


    return (
        <FlexDiv backgroundColor='backgroundGray' height='100%' padding='70px 0 70px 0' align='column-center'>
            <Profile></Profile>

            <FlexDiv width='80%'>
                <MyPageNav />
                <FlexDiv flexDirection='column' backgroundColor='white' borderRadius='30px' margin='0 0 0 20px' padding='46px 96px' width='100%'>
                    <Routes>
                        <Route path="/setting" element={<Setting />} />
                        <Route path="/clipping" element={<Clipping />} />
                        <Route path="/notice" element={<Notice />} />
                    </Routes>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}


export default MyPage