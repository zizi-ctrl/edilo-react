import React from "react"
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from "react-responsive"
import { createGlobalStyle } from "styled-components";

import FooterComponent from "./components/header/Footer"
import HeaderComponent from "./components/header/Header"
import Schedule from "./components/schedule/Schedule";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound";
import MyPage from "./components/myPage/MyPage";
import Community from "./components/community/Community";
import Write from "./components/community/Write";
import Login from "./components/login/Login";
import Signin from "./components/signin/Signin";

// min-width, max-width (헤더 푸터 안 쪽)
const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'NanumGothic', sans-serif;
        margin: 0px;
        min-width: 1024px;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: #E1E4E5;
            border-radius: 30px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #CCCCCC;
            border-radius: 30px;
        }

        ::-webkit-scrollbar-track {
            background: #F0F3F5;
        }
    }
`

const App = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 }) // 모바일

    return(
        <React.Fragment>
            <GlobalStyle/>
            <HeaderComponent isMobile={isMobile}></HeaderComponent>
            {isMobile && <FooterComponent></FooterComponent>}
            <Routes>               
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/schedule/*" element={<Schedule/>}/>
                <Route path="/community/*" element={<Community/>}/>
                <Route path="/writepost" element={<Write/>}/>
                <Route path="/myPage/*" element={<MyPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </React.Fragment>
    )

}

export default App