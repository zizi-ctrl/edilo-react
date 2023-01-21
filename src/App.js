import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from "react-responsive"

import FooterComponent from "./components/header/Footer"
import HeaderComponent from "./components/header/Header"

const App =() => {
    const isMobile = useMediaQuery({ maxWidth: 768 }) // 모바일 가로

    return(
        <BrowserRouter>
            <HeaderComponent isMobile={isMobile}></HeaderComponent>
            {isMobile && <FooterComponent></FooterComponent>}
            <Routes>
                {
                /*
                <Route path="/" element={< Main/>} />
                <Route path="/page1/*" element={<Page1 />} />
                <Route path="/page2/*" element={<Page2 />} />
                <Route path="/*" element={<NotFound />} />
                */
                }
            </Routes>
        </BrowserRouter>
    )

}

export default App