import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/blog";
import Details from "../Pages/details/Details";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/register/Login/Login";
import Register from "../Pages/register/Register";
import SeeAllCake from "../Pages/seeAllCakes/SeeAllCake";
import UserReview from "../Pages/userReview/UserReview";
import PrivateRoute from "./privateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allcakes',
                element: <SeeAllCake></SeeAllCake>,
                loader: () => fetch('https://assignment-eleven-server-side.vercel.app/allcakes')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://assignment-eleven-server-side.vercel.app/details/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><UserReview></UserReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-eleven-server-side.vercel.app/details/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])