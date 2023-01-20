import React from "react"
import { useMediaQuery } from "react-responsive"

import FooterComponent from "./components/header/Footer"
import HeaderComponent from "./components/header/Header"

const App =() => {
    const isMobile = useMediaQuery({ maxWidth: 768 }) // 모바일 가로

    return(
        <React.Fragment>
            <HeaderComponent isMobile={isMobile}></HeaderComponent>
            {isMobile && <FooterComponent></FooterComponent>}
        </React.Fragment>
    )

}

export default App