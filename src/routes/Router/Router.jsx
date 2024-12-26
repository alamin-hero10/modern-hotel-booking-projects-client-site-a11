import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayouts/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Rooms from "../../pages/Rooms/Rooms";
import MyBooking from "../../pages/MyBooking/MyBooking";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";
import RoomDetail from "../../components/RoomDetail/RoomDetail";
import AboutUs from "../../components/AboutUs/AboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import MyBookingUpdate from "../../components/MyBookingUpdate/MyBookingUpdate";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>
            },
            {
                path: "/myBooking",
                element: <PrivetRoute>
                    <MyBooking></MyBooking>
                </PrivetRoute>
            },
            {
                path: "/roomDetails/:id",
                element: <RoomDetail></RoomDetail>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`)
            },
            {
                path: "/myBookingUpdate",
                element: <MyBookingUpdate></MyBookingUpdate>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            }
        ]
    }
])

export default Router;