
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Registration from '../elements/Registration'
import PageNotFound from '../../pages/PageNotFound'
import Dashboard from '../../pages/Dashboard'
import { BrowserRouter } from "react-router-dom";
import Base from "../Layout/Base";

const RoutesPage = () => {

    return (
        <>
            <BrowserRouter>
                <Base>
                    <Routes >
                        <Route index path='/' element={<Home />} />
                        <Route path='/registration' element={<Registration />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage