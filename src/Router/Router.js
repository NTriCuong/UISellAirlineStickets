import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Page/HomePage/HomePage";
import DetailPage from "../Page/DetailPage/DetailPage";
import LoginPage from "../Page/Login_LogoutPage/LoginPage";
import LogoutPage from "../Page/Login_LogoutPage/LogoutPage";


const Router = createBrowserRouter ([
    {
        path: "/",// element  ngừoi dùng vừa truy cập vào web sẻ vào trang này trước
        element: <HomePage/>,
    }, {
        path: "/detail",// element  ngừoi dùng vừa truy cập vào web sẻ vào trang này trước
        element: <DetailPage/>,
    }, {
        path: "/login",// element  ngừoi dùng vừa truy cập vào web sẻ vào trang này trước
        element: <LoginPage/>,
    }, {
        path: "/logout",// element  ngừoi dùng vừa truy cập vào web sẻ vào trang này trước
        element: <LogoutPage/>,
    },
    
   
]);

export default Router;