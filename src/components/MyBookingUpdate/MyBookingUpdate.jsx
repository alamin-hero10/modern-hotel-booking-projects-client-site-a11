
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";

const MyBookingUpdate = () => {

    // Date Picker:
    const [startDate, setStartDate] = useState(new Date());

    const { id } = useParams();
    const [room, setRoom] = useState({});
    console.log(room)

    useEffect(() => {
        fetchRoomData();
    }, [id]);

    const fetchRoomData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/add-booking/${id}`,
            { withCredentials: true }
        );
        setRoom(data);
    };

    // ---Return---
    return (
        <div className="mt-14">
            {/* ---Form--- */}
            <div className="card w-full max-w-3xl md:max-w-2xl mx-auto shrink-0 border">
                <h2 className="text-xl md:text-2xl font-semibold text-center my-10">Update Information</h2>
                <form onSubmit="">
                    <div className="md:grid grid-cols-2 justify-center items-center ml-14">
                        <div className="hero">
                            <div className=" w-full shrink-0">
                                <div className=" py-0 ">
                                    {/* ---Room Name--- */}
                                    <div className="form-control w-60">
                                        <label className="label">
                                            <span className="label-text text-lg">Room Name:</span>
                                        </label>
                                        <input
                                            type="name"
                                            placeholder="Name"
                                            defaultValue=""
                                            disabled={true}
                                            className="input input-bordered text-green-700 text-lg font-semibold"
                                            required />
                                    </div>
                                    <div className="form-control mt-5 w-60">
                                        <h3 className="text-lg">Price:</h3>
                                        <h3 className="text-green-700 text-lg font-semibold border border-solid rounded-lg bg-gray-100 py-2 pl-4">$</h3>
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
                                            placeholder="Description"
                                            className="input input-bordered py-[8px]"
                                            required />
                                    </div>
                                    {/* ---Booking Date--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Update Booking Date</span>
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
                    <div className="flex items-center justify-center mb-5 mt-12">
                        <button className="text-white md:text-lg  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyBookingUpdate;