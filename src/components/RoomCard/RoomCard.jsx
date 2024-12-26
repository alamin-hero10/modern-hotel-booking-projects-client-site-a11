/* eslint-disable react/prop-types */
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import bed from "../../assets/double-bed.png"
import night from "../../assets/moon-and-star.png"
import 'animate.css';

const RoomCard = ({ roomData }) => {

    const { _id, roomName, roomImage, price, totalReviews, location, stayDetails } = roomData || {};


    return (
        <div className="animate__animated animate__zoomIn animate__delay-1s">
            {/* ---Room Card--- */}
            <Link to={`/roomDetails/${_id}`}>
                <div className="drop-shadow-2xl bg-white rounded-xl">
                    {/* Image */}
                    <div>
                        <img
                            className=""
                            src={roomImage}
                            alt="hotel1.png" />
                    </div>
                    {/* Room Name */}
                    <div className="px-7 pt-5 pb-1">
                        <div>
                            <h1 className="text-[22px] text-black font-medium">{roomName}</h1>
                        </div>
                        {/* Location */}
                        <div className="flex items-center gap-3 my-5">
                            <LuMapPin className="size-5" />
                            <p className="text-base text-black font-normal">{location}</p>
                        </div>
                        {/* stayDetails */}
                        <div className="flex items-center gap-7 my-5">
                            <div className="flex items-center gap-3">
                                <img className="w-8" src={bed} alt="" />
                                <p className="text-base text-gray-500 font-medium"> {stayDetails.maxRooms} Rooms</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-8" src={night} alt="" />
                                <p className="text-base text-gray-500 font-medium"> {stayDetails.maxNights} Nights</p>
                            </div>
                        </div>
                        {/* Review */}
                        <div className="flex items-center gap-3 my-5">
                            <ReactStars
                                count={5}
                                // onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'} ></ReactStars>
                            <p className="w-24 text-lg font-semibold bg-[#fbf83c8c] px-3 rounded-lg">{totalReviews} <span className="text-xs">Review</span> </p>
                        </div>
                        {/* Button */}
                        <div className="flex items-center justify-between mb-5">
                            {/* Price */}
                            <div className="">
                                <h3 className="w-32 bg-white text-green-600 px-5 py-1 drop-shadow-md rounded-xl">Price: $<span className="text-lg font-medium">{price}</span></h3>
                            </div>
                            {/* Book Now Button */}
                            <div className="">
                                <button onClick={() => document.getElementById('my_modal_4').showModal()} className="text-white md:text-lg  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <BookingModal></BookingModal> */}
            </Link>
        </div >
    );
};

export default RoomCard;