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
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`)
        setRooms(data)
    }

    // ---Return---
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                rooms.slice(0, 4).map((room) => <FeaturedRoomCard key={room._id} roomData={room}></FeaturedRoomCard>)
            }
        </div>
    );
};

export default FeaturedRooms;