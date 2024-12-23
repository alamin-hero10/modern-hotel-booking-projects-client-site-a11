import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayouts/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Rooms from "../../pages/Rooms/Rooms";
import MyBookingRoom from "../../pages/MyBookingRoom/MyBookingRoom";
import MyBooking from "../../pages/MyBooking/MyBooking";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";
import RoomDetail from "../../components/RoomDetail/RoomDetail";

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
                path: "/myBookingRoom",
                element: <PrivetRoute>
                    <MyBookingRoom></MyBookingRoom>
                </PrivetRoute>
            },
            {
                path: "/myBooking",
                element: <PrivetRoute>
                    <MyBooking></MyBooking>
                </PrivetRoute>
            },
            {
                path: "/roomDetails/:id",
                element:<RoomDetail></RoomDetail>,
                loader: ({ params }) => fetch(`http://localhost:5110/rooms/${params.id}`)
            }
        ]
    }
])

export default Router;