import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";



const BookingModal = () => {

    const roomData =useLoaderData();
    
    const { roomName, roomImage, description, price, totalReviews, location, date, stayDetails, keyFeatures, topCategories, } = roomData;

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-8/12 max-w-xl py-20">
                    {/* ---Cancel Button--- */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* ---Form--- */}
                    <div>
                        <div className="card w-full max-w-2xl mx-auto shrink-0">
                            <h2 className="text-2xl font-semibold text-center mb-10">Booking Information</h2>
                            {/* <form onSubmit={handleVisaUpdate}> */}
                            <form onSubmit="">
                                <div className="grid grid-cols-2">
                                    <div className="hero">
                                        <div className=" w-full shrink-0">
                                            <div className=" py-0">
                                                {/* ---Room Price--- */}
                                                <div className="form-control">
                                                    <h3>Room Name:</h3>
                                                    <p className="bg-amber-100 rounded-lg px-2 py-1">{roomName}</p>
                                                    {/* <label className="label">
                                                        <span className="label-text text-lg">Room Name</span>
                                                    </label> */}
                                                    {/* <input
                                                        name="name"
                                                        type="name"
                                                        defaultValue={roomName}
                                                        placeholder="Country Name"
                                                        className="input input-bordered"
                                                        required /> */}
                                                </div>
                                                {/* ---Booking Date--- */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Booking Date</span>
                                                    </label>
                                                    <DatePicker
                                                        className="border p-2 rounded-md"
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* --------------------------------- */}
                                    <div className="hero">
                                        <div className="card bg-base-100 w-full shrink-0">
                                            <div className=" ">
                                                {/* ---Country Image--- */}
                                                <div className="form-control">

                                                    <h3>Price $</h3>
                                                    <span className="bg-amber-100 rounded-lg px-2 py-1">{price}</span>
                                                </div>
                                                {/* ---Application Method--- */}
                                                <div className="form-control">
                                                    {/* <p>{description}</p> */}
                                                    <label className="label">
                                                        <span className="label-text text-lg">Description</span>
                                                    </label>
                                                    <input
                                                        name="applicationMethod"
                                                        type="text"
                                                        placeholder="Application Method"
                                                        className="input input-bordered"
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center mt-7">
                                    <button className="bg-[#015CB5] py-3 px-7 text-base font-medium text-white rounded-md hover:bg-[#4caf50] tracking-widest">Confirm</button>
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