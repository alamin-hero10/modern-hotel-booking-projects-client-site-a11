

// Import Images
import bedRoom from "../../assets/hotel1.png"


// ---FeaturedRooms Function---
const FeaturedRooms = () => {
    return (
        <div>
            <div className="">
                <div>
                    <img
                        className="w-[400px] h-60"
                        src={bedRoom}
                        alt="hotel1.png" />
                </div>
                <div>
                    <h1>Oceanfront Suite</h1>
                    <div>
                        <p>icon</p>
                        <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                    </div>
                </div>
                {/* <div>
                <p>Wi-Fi</p>
                <p>Workspace</p>
                <p>Breakfast Included</p>
                <p>Balcony</p>
                <p>Jacuzzi</p>
            </div> */}
                <div>
                    <div>
                        <h3>$250/Night</h3>
                        <p>3 Nights, 2 Rooms, 4 Persons</p>
                    </div>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRooms;