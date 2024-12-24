import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import bed from "../../assets/double-bed.png"
import night from "../../assets/moon-and-star.png"

const RoomCard = ({ roomData }) => {

    const { _id, roomName, roomImage, price, totalReviews, location, stayDetails } = roomData || {};

    return (
        <div>
            <Link to={`/roomDetails/${_id}`}>
                {/* <div className="w-[380px] drop-shadow-2xl bg-white rounded-xl"> */}
                <div className="drop-shadow-2xl bg-white rounded-xl">
                    {/* Image */}
                    <div>
                        <img
                            // className="w-[400px] h-60"
                            className=""
                            src={roomImage}
                            alt="hotel1.png" />
                    </div>
                    {/* Room Name */}
                    <div className="px-7 py-5">
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
                            <p className="text-lg font-semibold bg-green-100 px-3 rounded-lg">{totalReviews} <span className="text-xs">Review</span> </p>
                        </div>
                        {/* Price */}
                        <div className="">
                            <h3 className="bg-white w-20 px-5 py-1 drop-shadow-md rounded-xl">${price}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default RoomCard;