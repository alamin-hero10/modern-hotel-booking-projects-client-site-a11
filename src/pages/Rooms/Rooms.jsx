import { Helmet } from "react-helmet";
import RoomCard from "../../components/RoomCard/RoomCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Rooms = () => {

    // UseState:
    const [rooms, setRooms] = useState([]);

    // UseEffect:
    useEffect(() => {
        fetchAllRooms()
    }, []);

    // Axios DB Fetch the Data:
    const fetchAllRooms = async () => {
        const { data } = await axios.get(`https://modern-hotel-server-projects-a11.vercel.app`)
        setRooms(data)
    }

    return (
        <div className="w-10/12 mx-auto my-24">
            <Helmet>
                <title>Rooms | Modern Hotel</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14">
                {
                    rooms.map((room) => <RoomCard key={room._id} roomData={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;