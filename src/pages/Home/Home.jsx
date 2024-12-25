import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Count from "../../components/Count/Count";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import RoomFurniture from "../../components/RoomFurniture/RoomFurniture";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import PigeonMaps from "../../Map/PigeonMaps";
import BookingOfferModal from "../../components/BookingOfferModal/BookingOfferModal";


const Home = () => {

    return (
        <div className="">
            <Helmet>
                <title>Home | Modern Hotel</title>
            </Helmet>
            {/* Banner */}
            <div>
                <Banner></Banner>
            </div>
            {/* SpecialOffer */}
            <div className="w-10/12 mx-auto my-20">
                <h1 className="text-xl md:text-3xl text-black font-semibold text-center mb-16 font-gildaFont">Special Offer for Winter</h1>
                <SpecialOffer></SpecialOffer>
            </div>
            {/* React-Count */}
            <div className="w-10/12 mx-auto my-44">
                <Count></Count>
            </div>
            {/* FeaturedRooms */}
            <div className="my-20 bg-[#f9fafc]">
                <div className="w-10/12 md:w-8/12 mx-auto my-20 bg-[#f9fafc] py-20">
                    <FeaturedRooms></FeaturedRooms>
                </div>
            </div>
            {/* Room Furniture */}
            <div>
                <RoomFurniture></RoomFurniture>
            </div>
            {/* Pigeon Maps */}
            <div>
                <PigeonMaps></PigeonMaps>
            </div>
            {/* Offer-Modal */}
            <div>
                <BookingOfferModal></BookingOfferModal>
            </div>
        </div>
    );
};

export default Home;