// Import All Files:
import { useEffect, useState } from "react";
import FeaturedRoomCard from "../FeaturedRoomCard/FeaturedRoomCard";
import axios from "axios";


// ---FeaturedRooms Function---
const FeaturedRooms = () => {

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

    // ---Return---
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-14">
            {
                rooms.slice(0, 6).map((room) => <FeaturedRoomCard key={room._id} roomData={room}></FeaturedRoomCard>)
            }
        </div>
    );
};

export default FeaturedRooms;