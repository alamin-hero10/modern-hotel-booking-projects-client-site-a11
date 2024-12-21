import Banner from "../../components/Banner/Banner";
import Count from "../../components/Count/Count";
import RoomFurniture from "../../components/RoomFurniture/RoomFurniture";
import Map from "../../Map/Map";

const Home = () => {
    return (
        <div className="">
            {/* Banner */}
            <div>
                <Banner></Banner>
            </div>
            {/* React-Count */}
            <div className="w-10/12 mx-auto my-24">
                <Count></Count>
            </div>
            {/* Room Furniture */}
            <div>
                <RoomFurniture></RoomFurniture>
            </div>
            {/* others */}
            <div>
                {/* <Map></Map> */}
            </div>
            {/* Map */}
            <div>
                {/* <Map></Map> */}
            </div>
        </div>
    );
};

export default Home;