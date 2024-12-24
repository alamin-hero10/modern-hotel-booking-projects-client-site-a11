import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import bed from "../../assets/double-bed.png"
import night from "../../assets/moon-and-star.png"
import guest1 from "../../assets/guest1.png"
import check from "../../assets/check.png"
import arrow from "../../assets/double-right-arrow.png"
import { LuMapPin } from "react-icons/lu";
import ReactStars from "react-stars";

const RoomDetail = () => {

    // UseLoaderData:
    const roomData = useLoaderData();
    const { roomName, roomImage, description, price, totalReviews, location, stayDetails } = roomData;

    // ---Return---
    return (
        <div className="w-8/12 mx-auto my-20">
            <div className="md:flex items-center gap-10">
                <img
                    className="w-[640px]"
                    src={roomImage}
                    alt="" />
                <div>
                    <div className="flex items-center justify-between">
                        <div>
                            {/* Room Name */}
                            <div>
                                <h1 className="text-3xl text-black font-medium">{roomName}</h1>
                            </div>
                            {/* Location */}
                            <div className="flex items-center gap-3 my-3">
                                <LuMapPin className="size-5" />
                                <p className="text-base text-black font-normal">{location}</p>
                            </div>
                        </div>
                        {/* Review and Price */}
                        <div className="">
                            {/* Price */}
                            <div className="text-center mb-5">
                                <h3 className="bg-white text-green-600 px-5 py-1 drop-shadow-md rounded-xl">Price: ${price}</h3>
                            </div>
                            {/* Review and Rating Option- 01 */}
                            {/* <div className="flex items-center gap-3 my-3">
                                <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    color2={'#ffd700'} ></ReactStars>
                                <p className="text-lg font-semibold bg-yellow-100 px-3 rounded-lg">{totalReviews} <span className="text-xs">Review</span> </p>
                            </div> */}
                            {/* Review and Rating Option- 02 */}
                            <div className="flex items-center gap-3 my-3">
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-8"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className="text-lg font-semibold bg-yellow-100 px-3 rounded-lg">{totalReviews} <span className="text-xs">Review</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-accent my-0"></div>
                    <div className="mt-3">
                        <ul className="flex items-center justify-between">
                            {
                                roomData.keyFeatures.map((features, index) => (
                                    // <li key={index}>{features}</li>
                                    <>
                                        <li key={index}>
                                            <div className="flex items-center gap-2">
                                                <img className="w-5" src={check} alt="" />
                                                <p className="text-base text-gray-500 font-medium"> {features}</p>
                                            </div>
                                        </li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Top Categories */}
                    <div>
                        <ul className="flex items-center gap-7 my-7">
                            {
                                roomData.topCategories.map((features, index) => (
                                    <>
                                        <li key={index}>
                                            <div className="flex items-center gap-1">
                                                <img className="w-8" src={arrow} alt="" />
                                                <p className="text-base text-gray-500 font-medium"> {features}</p>
                                            </div>
                                        </li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                    {/* stayDetails */}
                    <div className="flex items-center gap-7 my-3">
                        <div className="flex items-center gap-3">
                            <img className="w-8" src={bed} alt="" />
                            <p className="text-base text-gray-500 font-medium"> {stayDetails.maxRooms} Max Rooms</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img className="w-8" src={night} alt="" />
                            <p className="text-base text-gray-500 font-medium"> {stayDetails.maxNights} Max Nights</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img className="w-8" src={guest1} alt="" />
                            <p className="text-base text-gray-500 font-medium"> {stayDetails.maxPeople} Max People</p>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="divider divider-accent my-0"></div>
                    {/* Description */}
                    <div className="my-3">
                        <p className="text-base text-gray-500">
                            {description}
                        </p>
                    </div>
                    {/* Book Now Button */}
                    <div className="mt-5">
                        <button onClick={() => document.getElementById('my_modal_4').showModal()}  className="text-white md:text-lg  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Book Now</button>

                    </div>
                </div>
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default RoomDetail;