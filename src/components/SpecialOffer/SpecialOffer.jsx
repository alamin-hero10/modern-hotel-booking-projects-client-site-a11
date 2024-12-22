import { motion } from "motion/react"

// Import Images
import cardImg1 from "../../assets/hotel2.jpg"


const SpecialOffer = () => {
    return (
        <div className="flex items-center justify-center gap-10">
            {/* Offer Card - 01 */}
            <motion.div
                className="w-[350px]"
                animate={{ y: [25, 50, 25] }}
                transition={{ duration: 5, repeat: Infinity }}>
                <img
                    className="w-[400px] h-60"
                    src={cardImg1}
                    alt="" />
                <div className="mt-5">
                    <h3>Summer Couples Offer</h3>
                    <div className="divider my-0"></div>
                    <p>20% off January bookings for couples</p>
                </div>
            </motion.div>
            {/* Offer Card - 02 */}
            <motion.div
                className="w-[340px]"
                animate={{ y: [0, 50, 0] }}
                transition={{ duration: 10, repeat: Infinity }}>
                <img
                    className="w-[400px] h-60"
                    src={cardImg1}
                    alt="" />
                <div className="mt-5">
                    <h3>Summer Couples Offer</h3>
                    <div className="divider my-0"></div>
                    <p>20% off January bookings for couples</p>
                </div>
            </motion.div>
            {/* Offer Card - 03 */}
            <motion.div
                className="w-[340px]"
                animate={{ y: [25, 50, 25] }}
                transition={{ duration: 5, repeat: Infinity }}>
                <img
                    className="w-[400px] h-60"
                    src={cardImg1}
                    alt="" />
                <div className="mt-5">
                    <h3>Summer Couples Offer</h3>
                    <div className="divider my-0"></div>
                    <p>20% off January bookings for couples</p>
                </div>
            </motion.div>
        </div>
    );
};

export default SpecialOffer;