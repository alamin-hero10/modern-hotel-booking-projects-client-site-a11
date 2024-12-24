// Import
import hotelImg from "../../assets/hotel7.png"
import doubleBed from "../../assets/double-bed.png"
import wireless from "../../assets/wireless.png"
import safeBox from "../../assets/safe-box.png"
import bath from "../../assets/Bath.png"
import exercise from "../../assets/Exercise.png"
import drinks from "../../assets/Drinks.png"


const RoomFurniture = () => {
    return (
        <div>
            <div className="hero place-items-stretch">
                <div>
                    <img
                        className="w-full h-[800px]" src={hotelImg} alt="" />
                </div>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content mx-auto">
                    <div className="md:flex items-center justify-center gap-20 mx-auto bg-white/80 backdrop-brightness-125 px-10 py-14">
                        {/* Image-01 */}
                        <div>
                            <img
                                className="w-24 h-16"
                                src={doubleBed}
                                alt="" />
                            <p className="text-base text-black text-center mt-3">LARGE BED</p>
                        </div>
                        {/* Image-01 */}
                        <div>
                            <img
                                className="w-24 h-16"
                                src={wireless}
                                alt="" />
                            <p className="text-base text-black text-center mt-3">FAST WIFI</p>
                        </div>
                        {/* Image-01 */}
                        <div>
                            <img
                                className="w-24 h-16"
                                src={safeBox}
                                alt="" />
                            <p className="text-base text-black text-center mt-3">SAFE</p>
                        </div>
                        {/* Image-01 */}
                        <div>
                            <img
                                className="w-24 h-16"
                                src={bath}
                                alt="" />
                            <p className="text-base text-black text-center mt-3">BATH</p>
                        </div>
                        {/* Image-01 */}
                        <div>
                            <img
                                className="w-24 h-16"
                                src={exercise}
                                alt="" />
                            <p className="text-base text-black text-center mt-3">EXERCISE</p>
                        </div>
                        {/* Image-01 */}
                        <div>
                            <img
                                className="w-24 h-16"
                                src={drinks}
                                alt="" />
                            <p className="text-base text-black text-center mt-3">DRINKS</p>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default RoomFurniture;