import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import WelcomePage from './pages'
import { SwapPage } from './pages'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='welcome' element={ <WelcomePage/> } />
                <Route path='swap'element={ <SwapPage/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;