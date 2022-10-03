import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error";
import ProductRegisterPage from "./pages/Product/Register";
import LoginPage from "./pages/User/Login";
import UserRegisterPage from "./pages/User/Register";
import HomePage from './pages/home';

export function Router(){

    return(

        <>
            {
                localStorage.getItem('@token') ? (
                    <Routes>
                        <Route path="/" element={<HomePage/>}></Route>
                        <Route path='/products/register' element={<ProductRegisterPage/>}></Route>
                        <Route path="*" element={<ErrorPage/>}></Route>
                    </Routes> 
                   
                ):(
                    <Routes>
                        <Route path="/" element={<LoginPage/>}></Route>
                        <Route path="/users/register" element={<UserRegisterPage/>}></Route>
                        <Route path="*" element={<ErrorPage/>}></Route>
                    </Routes>
                )
            }
        </>
    );
};