import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";



const BookingModal = () => {

    // useContext:
    const { user } = useContext(AuthContext);

    // useNavigate:
    const navigate = useNavigate()

    // useLoaderData:
    const roomData = useLoaderData();

    const { id, roomName, roomImage, price, totalReviews, location, stayDetails, keyFeatures, topCategories, } = roomData;

    // Date Picker:
    const [startDate, setStartDate] = useState(new Date());

    // Handle Hotel Booking Submit:
    const handleBookingSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const description = form.description.value;
        const date = startDate;

        const bookingData = {
            id,
            roomName,
            roomImage,
            description,
            price,
            totalReviews,
            location,
            keyFeatures,
            stayDetails,
            topCategories,
            date,
            customer: {
                email: user?.email,
                name: user?.displayName,
                photo: user?.photoURL,
            },
            room: "Unavailable"
        }

        // Try - Catch Block and Make Post Request:
        try{
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-booking`, bookingData)
            console.log(data)
            if(data){
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true
                });
            }
            navigate("/myBooking")
        }
        catch (error) {
            console.log(error)
        }
    }

    // ---Return---
    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-10/12 md:w-8/12 max-w-2xl md:max-w-xl pt-20">
                    {/* ---Cancel Button--- */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* ---Form--- */}
                    <div>
                        <div className="card w-full max-w-3xl md:max-w-2xl mx-auto shrink-0">
                            <h2 className="text-xl md:text-2xl font-semibold text-center mb-10">Booking Information</h2>
                            <form onSubmit={handleBookingSubmit}>
                                <div className="md:grid grid-cols-2">
                                    <div className="hero">
                                        <div className=" w-full shrink-0">
                                            <div className=" py-0">
                                                {/* ---Room Name--- */}
                                                <div className="form-control w-60">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Room Name:</span>
                                                    </label>
                                                    <input 
                                                    type="email" 
                                                    placeholder="email" 
                                                    defaultValue={roomName}
                                                    disabled={true}
                                                        className="input input-bordered text-green-700 text-lg font-semibold" 
                                                    required />
                                                </div>
                                                {/* <div className="form-control">
                                                    <h3>Room Name:</h3>
                                                    <p className="text-green-700 text-lg font-semibold rounded-lg py-1">{roomName}</p>
                                                </div> */}
                                                {/* ---Price--- */}
                                                <div className="form-control mt-5 w-60">
                                                    <h3 className="text-lg">Price:</h3>
                                                    <h3 className="text-green-700 text-lg font-semibold border border-solid rounded-lg bg-gray-100 py-2 pl-4">$ {price}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ---Price and Description--- */}
                                    <div className="hero">
                                        <div className="card bg-base-100 w-full shrink-0">
                                            <div className=" ">
                                                {/* ---Description--- */}
                                                <div className="form-control w-60">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Description</span>
                                                    </label>
                                                    <input
                                                        name="description"
                                                        type="text"
                                                        placeholder="Application Method"
                                                        className="input input-bordered py-[8px]"
                                                        required />
                                                </div>
                                                {/* ---Booking Date--- */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Booking Date</span>
                                                    </label>
                                                    <DatePicker
                                                        className="border p-2 rounded-md py-[10px] w-60"
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ---Button--- */}
                                <div className="flex items-center justify-center mt-12">
                                    <button className="text-white md:text-lg  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-action">
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;