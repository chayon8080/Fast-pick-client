import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from '../Layout/Main'
import LogIn from "../LogIn/LogIn";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            }


        ]
    }
]);
export default router;