import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddReview from "../Pages/AddReview/AddReview";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Fourpage from "../Pages/Fourpage/Fourpage";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRout from "../Pages/PrivateRout/PrivateRout";
import Register from "../Pages/Register/Register";
import Review from "../Pages/Review/Review";
import ServiceItem from "../Pages/Service/ServiceItem/ServiceItem";
import ServicesDetails from "../Pages/Service/ServicesDetails/ServicesDetails";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Fourpage></Fourpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/serviceItem',
                element:<ServiceItem></ServiceItem>
            },
              
            {
                path:'/addservice',
                element:<PrivateRout><AddService></AddService></PrivateRout>
            },
              
            {
                path:'/servicesDetails/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader: ({params}) => fetch(`https://y-iota-ruddy.vercel.app/services/${params.id}`)
            },
            {
                path:'/addreview',
                element:<PrivateRout><AddReview></AddReview></PrivateRout>
            },
            {
                path:'/review',
                element:<Review></Review>
            },
            {
                path:'/update/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params}) => fetch(`https://y-iota-ruddy.vercel.app/review/${params.id}`)
            }
        ]
    }
])

