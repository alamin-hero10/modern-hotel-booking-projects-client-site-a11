import CountUp from "react-countup";

// Import Images
import guests from "../../assets/guests.png"
import hotel from "../../assets/hotel.png"
import livingRoom from "../../assets/living-room.png"
import chair from "../../assets/chair.png"
import 'animate.css';

const Count = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
            <div className="flex items-center justify-center gap-3 animate__animated animate__bounceInLeft animate__delay-.5s animate__slower">
                <img className="w-16 h-16" src={guests} alt="" />
                <div className="ml-2">
                    <div className="flex items-center">
                        <CountUp
                            start={0}
                            end={985}
                            delay={1}
                            className="text-4xl font-base"
                        >
                        </CountUp>
                        <span className="text-4xl font-medium text-blue-800 ml-2">+</span>
                    </div>
                    <p className="text-lg text-gray-500 mt-1">Guests</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 animate__animated animate__bounceInLeft animate__delay-.5s animate__slower">
                <img className="w-14 h-14" src={hotel} alt="" />
                <div className="ml-2">
                    <div className="flex items-center">
                        <CountUp
                            start={0}
                            end={7}
                            delay={1}
                            className="text-4xl font-normal"
                        >
                        </CountUp>
                        <span className="text-4xl font-base text-blue-800 ml-2">+</span>
                    </div>
                    <p className="text-lg text-gray-500 mt-1">Hotels</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 animate__animated animate__bounceInRight animate__delay-.5s animate__slower">
                <img className="w-14 h-14" src={livingRoom} alt="" />
                <div className="ml-2">
                    <div className="flex items-center">
                        <CountUp
                            start={0}
                            end={2570}
                            delay={1}
                            className="text-4xl font-normal"
                        >
                        </CountUp>
                        <span className="text-4xl font-base text-blue-800 ml-2">+</span>
                    </div>
                    <p className="text-lg text-gray-500 mt-1">Rooms</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 animate__animated animate__bounceInRight animate__delay-.5s animate__slower">
                <img className="w-14 h-14" src={chair} alt="" />
                <div className="ml-2">
                    <div className="flex items-center">
                        <CountUp
                            start={0}
                            end={10}
                            delay={1}
                            className="text-4xl font-normal"
                        >
                        </CountUp>
                        <span className="text-4xl font-base text-blue-800 ml-2">+</span>
                    </div>
                    <p className="text-lg text-gray-500 mt-1">Beaches</p>
                </div>
            </div>
        </div>
    );
};

export default Count;