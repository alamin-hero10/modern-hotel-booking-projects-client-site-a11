import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import offerAnimation from "../../assets/animation/offer-animation.json"

const BookingOfferModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // useEffect:
    useEffect(() => {
        setIsModalOpen(true)
    }, [])

    // HandleCloseModal
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="">
            {
                isModalOpen && (
                    <dialog id="" className="modal absolute modal-open">
                        <div className="modal-box max-w-screen-sm w-10/12 p-2">
                            <form method="dialog">
                                <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-red-500">✕</button>
                            </form>
                            {/* ---Offer Image--- */}
                            <div className="">
                                <div className=" text-neutral-content text-center m-0 p-0">
                                    <div className="">
                                        <div className="w-48 mx-auto">
                                            <Lottie animationData={offerAnimation} loop={true}></Lottie>
                                        </div>
                                        <h1 className="mb-3 text-xl md:text-3xl font-bold text-[#ffc32c]">Winter Offer</h1>
                                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-[#d828fc]">50% - Discount</h1>
                                        <p className="text-lg font-semibold mb-5 text-black">
                                            Special discounts on room bookings this winter.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                )
            }
        </div >
    );
};

export default BookingOfferModal;