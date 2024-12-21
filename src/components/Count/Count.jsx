import CountUp from "react-countup";
import { GoBook } from "react-icons/go";
import { LiaAwardSolid } from "react-icons/lia";
import { SlPeople } from "react-icons/sl";
import { TbWorldCheck } from "react-icons/tb";

const Count = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 animate__animated animate__bounceInRight animate__delay-.5s animate__slower">
            <div className="flex items-center gap-3">
                <span className="w-14 h-14 bg-[#E6E5FF] p-2 rounded-full flex items-center justify-center"><SlPeople className="size-7" /></span>
                <div className="ml-2">
                    <div className="flex items-center">
                        <CountUp
                            start={0}
                            end={1250}
                            delay={1}
                            className="text-3xl font-medium"
                        >
                        </CountUp>
                        <span className="text-3xl font-medium text-blue-800 ml-2">+</span>
                    </div>
                    <p className="text-lg text-gray-500 mt-1">Active Students</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="w-14 h-14 bg-[#DFFFEC] p-3 rounded-full flex items-center justify-center"><GoBook className="size-7 text-[#4AD382]" /></span>
                <div className="ml-2">
                    <div className="flex items-center">
                        <CountUp
                            start={0}
                            end={60}
                            delay={1}
                            className="text-3xl font-medium"
                        >
                        </CountUp>
                        <span className="text-3xl font-medium text-blue-800 ml-2">+</span>
                    </div>
                    <p className="text-lg text-gray-500 mt-1">Interactive Courses</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="w-14 h-14 bg-[#FFF4DF] p-3 rounded-full flex items-center justify-center"><LiaAwardSolid className="size-7 text-[#FFB830]" /></span>
                <div className="ml-2">
                    <div className="flex items-center">
                        <CountUp
                            start={0}
                            end={3210}
                            delay={1}
                            className="text-3xl font-medium"
                        >
                        </CountUp>
                        <span className="text-3xl font-medium text-blue-800 ml-2">+</span>
                    </div>
                    <p className="text-lg text-gray-500 mt-1">Graduate Students</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="w-14 h-14 bg-[#DFF4FF] p-3 rounded-full flex items-center justify-center"><TbWorldCheck className="size-7 text-[#3AB5F6]" /></span>
                <div className="ml-2">
                    <div className="flex items-center">
                        <CountUp
                            start={0}
                            end={30}
                            delay={1}
                            className="text-3xl font-medium"
                        >
                        </CountUp>
                        <span className="text-3xl font-medium text-blue-800 ml-2">+</span>
                    </div>
                    <p className="text-lg text-gray-500 mt-1">Certified Teachers</p>
                </div>
            </div>
        </div>
    );
};

export default Count;