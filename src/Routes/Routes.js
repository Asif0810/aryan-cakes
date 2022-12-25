import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SeeAllCake from "../Pages/seeAllCakes/SeeAllCake";

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
            }
        ]
    }
])