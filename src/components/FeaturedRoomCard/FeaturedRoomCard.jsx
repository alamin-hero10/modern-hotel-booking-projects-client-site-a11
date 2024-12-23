import { Link } from "react-router-dom";

const FeaturedRoomCard = ({ roomData }) => {

    const { _id, roomName, roomImage, description, price, totalReviews } = roomData || {};

    return (
        <div>
            <Link to={`/roomDetails/${_id}`}>
                <div className="w-[400px]">
                    <div>
                        <img
                            className="w-[400px] h-60"
                            src={roomImage}
                            alt="hotel1.png" />
                    </div>
                    <div>
                        <h1>{roomName}</h1>
                        {/* <div>
                        <p>icon</p>
                        <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                    </div> */}
                    </div>
                    <p>{description}</p>
                    {/* <div>
                <p>Wi-Fi</p>
                <p>Workspace</p>
                <p>Breakfast Included</p>
                <p>Balcony</p>
                <p>Jacuzzi</p>
            </div> */}
                    <div>
                        <div>
                            <h3>${price}</h3>
                            <p>{totalReviews}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FeaturedRoomCard;