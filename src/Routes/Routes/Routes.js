import { createBrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Dashboard from "../../Layouts/Dashboard";
import Main from "../../Layouts/Main";
import AddBanner from "../../Pages/Dashboard/AddBanner/AddBanner";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import errorImg from '../../Assets/error.png'
import About from "../../Pages/About/About";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AllPackages from "../../Pages/Dashboard/AllPackages/AllPackages";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyDashboard from "../../Pages/Dashboard/MyDashboard/MyDashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '*',
                element:
                    <div className="flex flex-col justify-center items-center my-10 mx-4">
                        <img src={errorImg} alt="" />
                        <Link to='/' className="text-2xl lg:text-3xl font-semibold hover:text-sky-500">Go back to home</Link>
                    </div>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
                children: [
                    {
                        path: '/dashboard',
                        element: <MyDashboard />
                    },
                    {
                        path: '/dashboard/add_banner',
                        element: <AddBanner />
                    },
                    {
                        path: '/dashboard/orders',
                        element: <MyOrders />
                    },
                    {
                        path: '/dashboard/all_packages',
                        element: <AllPackages />
                    },
                    {
                        path: '/dashboard/all_users',
                        element: <AllUsers />
                    }
                ]
            }
        ]
    }
])