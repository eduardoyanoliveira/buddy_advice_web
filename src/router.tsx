import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/User/Login";
import UserRegisterPage from "./pages/User/Register";


export function Router(){

    return(

        <>
            {
                localStorage.getItem('@token') ? (
                    <Routes>
                        <Route path="*" element={<ErrorPage/>}></Route>
                    </Routes> 
                   
                ):(
                    <Routes>
                        <Route path="/" element={<LoginPage/>}></Route>
                        <Route path="/user/register" element={<UserRegisterPage/>}></Route>
                        <Route path="*" element={<ErrorPage/>}></Route>
                    </Routes>
                )
            }
        </>
    );
};