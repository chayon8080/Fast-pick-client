import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Blogs from "../Blogs/Blogs";
import Details from "../Details/Details";
import Home from "../Home/Home/Home";
import Main from '../Layout/Main'
import LogIn from "../LogIn/LogIn";
import MyReview from "../MyReview/MyReview";
import PrivateRoutes from "../Privateroutes/PrivateRoutes";
import Register from "../Register/Register";
import ServiceHolder from "../ServiceHolder/ServiceHolder";
import Services from "../Services/Services";
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
                path: '/services',
                element: <ServiceHolder></ServiceHolder>
            },
            {
                path: '/userReviews',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            }


        ]
    }
]);
export default router;