import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

const RoomDetail = () => {

    // UseLoaderData:
    const roomData = useLoaderData();
    const { roomName, roomImage, description, price, totalReviews, location, date, stayDetails, keyFeatures, topCategories, } = roomData;

    // ---Return---
    return (
        <div className="w-8/12 mx-auto my-20">
            <div className="md:flex items-center gap-10">
                <img
                    className="w-[640px]"
                    src={roomImage}
                    alt="" />
                <div>
                    <div>
                        <h3>{roomName}</h3>
                        <p>{location}</p>
                        <div>
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
                            <p>({totalReviews})</p>
                            <p>${price}</p>
                        </div>
                    </div>
                    <div className="divider my-0"></div>
                    <div>
                        <ul>
                            {
                                roomData.keyFeatures.map((features, index) => (
                                    <li key={index}>{features}</li>
                                ))
                            }
                        </ul>
                        <p>{ }</p>
                        <p>{ }</p>
                        <p>{ }</p>
                    </div>
                    <div className="divider my-0"></div>
                    <div>
                        <ul>
                            {
                                roomData.topCategories.map((features, index) => (
                                    <li key={index}>{features}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="divider my-0"></div>
                    <div>
                        <ul>
                            <li><strong>Max Nights:</strong> {roomData.stayDetails.maxNights} </li>
                            <li><strong>Max Rooms:</strong> {roomData.stayDetails.maxRooms} </li>
                            <li><strong>Max People:</strong> {roomData.stayDetails.maxPeople} </li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className="bg-[#2a508b] py-2 px-5 rounded-lg md:text-lg font-medium text-white hover:bg-[#087cf0]">Book Now</button>
                    </div>
                </div>
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default RoomDetail;