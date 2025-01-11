import { motion } from "motion/react"

// Import Images
import cardImg1 from "../../assets/hotel2.jpg"
import cardImg2 from "../../assets/hotel1.png"
import cardImg3 from "../../assets/hotel6.jpg"


const SpecialOffer = () => {
    return (
        <div className="md:flex items-center justify-center gap-5">
            {/* Offer Card - 01 */}
            <motion.div
                className="w-[350px]"
                animate={{ y: [25, 50, 25] }}
                transition={{ duration: 5, repeat: Infinity }}>
                <img
                    className="w-[400px] h-60"
                    src={cardImg1}
                    alt="" />
                <div className="border-4 border-double border-yellow-500 p-2 mt-1">
                    <h3 className="text-xl font-medium text-yellow-500 bg-yellow-50 rounded-2xl text-center">Couple’s Getaway Package 25%</h3>
                    <div className="bg-green-100 py-[2px] my-2 rounded-lg"></div>
                    <div className="">
                        <p className="text-base font-medium">25% off January bookings for couples.</p>
                        <p>Enjoy up to 30% off on your stay when you book directly through our website. This special offer is available for a limited time</p>
                    </div>
                </div>
            </motion.div>
            {/* Offer Card - 02 */}
            <motion.div
                className="w-[340px]"
                animate={{ y: [0, 50, 0] }}
                transition={{ duration: 10, repeat: Infinity }}>
                <img
                    className="w-[400px] h-60"
                    src={cardImg2}
                    alt="" />
                <div className="border-4 border-double border-yellow-500 p-2 mt-1">
                    <h3 className="text-xl font-medium text-yellow-500 bg-yellow-50 rounded-2xl text-center">Family Getaway Package 20%</h3>
                    <div className="bg-green-100 py-[2px] my-2 rounded-lg"></div>
                    <div className="">
                        <p className="text-base font-medium">20% off January bookings for Family.</p>
                        <p>Book now to receive a complimentary breakfast and a flexible late checkout option. Start your day with a delicious meal and take your time to relax home.</p>
                    </div>
                </div>
            </motion.div>
            {/* Offer Card - 03 */}
            <motion.div
                className="w-[340px]"
                animate={{ y: [25, 50, 25] }}
                transition={{ duration: 5, repeat: Infinity }}>
                <img
                    className="w-[400px] h-60"
                    src={cardImg3}
                    alt="" />
                <div className="border-4 border-double border-yellow-500 p-2 mt-1">
                    <h3 className="text-xl font-medium text-yellow-500 bg-yellow-50 rounded-2xl text-center">Winter Special Package 30%</h3>
                    <div className="bg-green-100 py-[2px] my-2 rounded-lg"></div>
                    <p className="text-base font-medium">30% off January bookings for couples.</p>
                    <p>Make your romantic getaway unforgettable with our exclusive package for couples. Enjoy a cozy room, breakfast and a private dinner to set the perfect mood.</p>
                </div>
            </motion.div>
            {/* Offer Card - 02 */}
            <motion.div
                className="w-[340px]"
                animate={{ y: [0, 50, 0] }}
                transition={{ duration: 10, repeat: Infinity }}>
                <img
                    className="w-[400px] h-60"
                    src={cardImg2}
                    alt="" />
                <div className="border-4 border-double border-yellow-500 p-2 mt-1">
                    <h3 className="text-xl font-medium text-yellow-500 bg-yellow-50 rounded-2xl text-center">Family Getaway Package 20%</h3>
                    <div className="bg-green-100 py-[2px] my-2 rounded-lg"></div>
                    <div className="">
                        <p className="text-base font-medium">20% off January bookings for Family.</p>
                        <p>Book now to receive a complimentary breakfast and a flexible late checkout option. Start your day with a delicious meal and take your time to relax home.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SpecialOffer;