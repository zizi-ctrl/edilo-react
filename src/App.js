import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from "react-responsive"

import FooterComponent from "./components/header/Footer"
import HeaderComponent from "./components/header/Header"
import NotFound from "./components/NotFound";
import MyPage from "./components/myPage/MyPage";
import Community from "./components/community/Community";


const App =() => {
    const isMobile = useMediaQuery({ maxWidth: 768 }) // 모바일 가로

    return(
        <React.Fragment>
            <HeaderComponent isMobile={isMobile}></HeaderComponent>
            {isMobile && <FooterComponent></FooterComponent>}
            <Routes>
                {/*
                <Route path="/" element={<Main/>}/>
                <Route path="/schedule/*" element={<Schedule/>}/>
                */}
                <Route path="/community/*" element={<Community/>}/>
                <Route path="/myPage/*" element={<MyPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </React.Fragment>
    )

}

export default App