import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ReviewModal from "../../components/ReviewModal/ReviewModal";
import { format } from 'date-fns'


const MyBooking = () => {


    // ---useContext---
    const { user } = useContext(AuthContext);

    // ---UseState---
    const [rooms, setRooms] = useState([]);
    console.log(rooms)

    // ---UseEffect---
    useEffect(() => {
        fetchAllRooms()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    // ---Axios DB Fetch the Data---
    const fetchAllRooms = async () => {
        const { data } = await axios.get(`http://localhost:5110/add-booking/${user?.email}`,
            { withCredentials: true }
        )
        setRooms(data)
    }
    // ---Return---
    const handleCancel = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5110/room-delete/${id}`)
            console.log(data)
            fetchAllRooms()
        }
        catch (error) {
            console.log(error)
        }
    }

    // Toast Delete Confirm:
    const handleCancelConfirm = (id) => {
        toast((t) => (
            <div>
                <div className="text-center">
                    <h1 className="text-3xl text-black mt-5 mb-2">Are you sure?</h1>
                    <p className="text-lg mb-5">Do you want to cancel this data?</p>
                </div>
                <div className="text-center mb-2">
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded-sm"
                        onClick={() => {
                            handleCancel(id)
                            toast.dismiss(t.id)
                        }}>Confirm</button>
                    <button
                        className="bg-green-500 text-white px-3 py-1 rounded-sm ml-5"
                        onClick={() => toast.dismiss(t.id)}>
                        Cancel
                    </button>
                </div>
            </div>
        ))
    }



    // ---Return---
    return (
        <div className="md:w-9/12 md:mx-auto mx-3 my-10">
            <Helmet>
                <title>My Booking| Modern Hotel</title>
            </Helmet>
            {/* My Booking Room Count */}
            <div className="">
                <h3 className="text-lg font-semibold">My Booking Room: <span className="bg-[#ECFDF5] text-xs text-[#059669] px-3 py-1 rounded-3xl">{rooms.length} Room</span></h3>
            </div>
            {/* ---Table Formate--- */}
            <div className="overflow-x-auto mt-5">
                <table className="table table-lg border border-solid">
                    <thead className="border border-solid bg-slate-100">
                        <tr className="text-[17px] text-black font-normal">
                            <th></th>
                            <th>Photo</th>
                            <th>Room Name</th>
                            <th>Your Email</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Dynamic tr My Booking Room Table*/}
                        {
                            rooms.map((room) =>
                                <tr key={room._id}>
                                    <th>1</th>
                                    <td>
                                        <img className="w-[90px] border border-solid border-gray-300 p-1" src={room.roomImage} alt="" />
                                    </td>
                                    <td>{room.roomName}</td>
                                    <td>{room.customer.email}</td>
                                    <td>{format(new Date(room.date), 'P')}</td>
                                    <td>${room.price}</td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <Link to={`/myBookingUpdate`}>
                                                {/* <Link to={`/myBookingUpdate/${room._id}`}> */}
                                                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update Date</button>
                                            </Link>
                                            <button
                                                onClick={() => document.getElementById('my_modal_4').showModal()}
                                                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Review</button>
                                            <button
                                                onClick={() => handleCancelConfirm(room._id)}
                                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <ReviewModal></ReviewModal>
        </div>
    );
};

export default MyBooking;