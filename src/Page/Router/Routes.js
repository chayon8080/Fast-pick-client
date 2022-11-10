import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Details from "../Details/Details";
import Home from "../Home/Home/Home";
import Main from '../Layout/Main'
import LogIn from "../LogIn/LogIn";
import MyReview from "../MyReview/MyReview";
import Register from "../Register/Register";
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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/userReviews',
                element: <MyReview></MyReview>
            }


        ]
    }
]);
export default router;