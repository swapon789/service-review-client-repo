import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ServiceItem from "../Pages/Service/ServiceItem/ServiceItem";
import ServicesDetails from "../Pages/Service/ServicesDetails/ServicesDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
              
            {
                path:'/serviceItem',
                element:<ServiceItem></ServiceItem>
            },
              
            {
                path:'/servicesDetails/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

