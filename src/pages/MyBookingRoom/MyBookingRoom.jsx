import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";


const MyBookingRoom = () => {

    const { data } = useLoaderData();
    console.log(data)

    return (
        <div>
            <Helmet>
                <title>My Booking Room | Modern Hotel</title>
            </Helmet>
            <p>My Booking Room</p>
        </div>
    );
};

export default MyBookingRoom;