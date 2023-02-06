import React from "react"
import ReactDOM from "react-dom/client"
import  { RecoilRoot } from "recoil"
import { BrowserRouter } from "react-router-dom"

import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(<RecoilRoot><BrowserRouter><App/></BrowserRouter></RecoilRoot>)