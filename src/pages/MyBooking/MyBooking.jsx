import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const MyBooking = () => {

    // ---useContext---
    const { user } = useContext(AuthContext);

    // ---UseState---
    const [rooms, setRooms] = useState([]);

    // ---UseEffect---
    useEffect(() => {
        fetchAllRooms()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    // ---Axios DB Fetch the Data---
    const fetchAllRooms = async () => {
        const { data } = await axios.get(`http://localhost:5110/add-booking/${user?.email}`)
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
                <div>
                    <p>Are you sure?</p>
                    <p>You wont be able to revert this!</p>
                </div>
                <div>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                        onClick={() => {
                            handleCancel(id)
                            toast.dismiss(t.id)
                        }}>Confirm</button>
                    <button
                        className="bg-green-500 text-white px-3 py-1 rounded-md"
                        onClick={() => toast.dismiss(t.id)}>Cancel</button>
                </div>
            </div>
        ))
    }



    // ---Return---
    return (
        <div className="w-9/12 mx-auto my-14">
            <Helmet>
                <title>My Booking| Modern Hotel</title>
            </Helmet>
            {/* --------------- */}
            <div>
                <h3 className="text-lg font-semibold">My Booking Room: <span className="bg-[#ECFDF5] text-xs text-[#059669] px-3 py-1 rounded-3xl">{rooms.length} Room</span></h3>
            </div>
            {/* --------------- */}
            <div className="overflow-x-auto">
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
                                    <td>{room.date}</td>
                                    <td>${room.price}</td>
                                    <td>
                                        <div className="flex items-center gap-5">
                                            <button

                                                className="btn btn-success">Update Date</button>
                                            <button
                                                onClick={() => handleCancelConfirm(room._id)}
                                                className="btn btn-secondary">Cancel</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;