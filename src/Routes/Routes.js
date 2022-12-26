import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Details from "../Pages/details/Details";
import Home from "../Pages/Home/Home/Home";
import SeeAllCake from "../Pages/seeAllCakes/SeeAllCake";
import UserReview from "../Pages/userReview/UserReview";

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
                loader: () => fetch('http://localhost:5000/allcakes')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/review',
                element: <UserReview></UserReview>
            }
        ]
    }
])