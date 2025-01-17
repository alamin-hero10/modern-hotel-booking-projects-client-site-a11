import { Helmet } from "react-helmet";
import RoomCard from "../../components/RoomCard/RoomCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Rooms = () => {

    // useState:
    const [sort, setSort] = useState('');

    // UseState:
    const [rooms, setRooms] = useState([]);

    // UseEffect:
    useEffect(() => {
        // Axios DB Fetch the Data:
        const fetchAllRooms = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-rooms?sort=${sort}`)
            setRooms(data)
        }
        fetchAllRooms()
    }, [sort]);

    // ---Return---
    return (
        <div className="w-10/12 mx-auto my-14 min-h-screen">
            <Helmet>
                <title>Rooms | Modern Hotel</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            {/* ---Sorting--- */}
            <div className="md:flex items-center justify-between mb-7">
                <h1 className="text-2xl font-medium bg-green-100 py-1 px-3 mb-5 md:mb-0">Choose The Room:</h1>
                {/* ---Sorting--- */}
                <div className="">
                    <select
                        onChange={(event) => setSort(event.target.value)}
                        className="select select-bordered select-sm w-full max-w-xs">
                        <option selected value=''>Sort by Price</option>
                        <option value='descending'>Highest - Lowest</option>
                        <option value='ascending'>Lowest - Highest</option>
                    </select>
                </div>
            </div>
            {/* ---Rooms Map--- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    rooms.map((room) => <RoomCard key={room._id} roomData={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;