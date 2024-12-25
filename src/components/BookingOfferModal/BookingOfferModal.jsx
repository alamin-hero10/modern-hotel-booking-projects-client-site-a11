import { useEffect, useState } from "react";
import image from "../../assets/hotel1.png"

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
        <div>
            {
                isModalOpen && (
                    <dialog id="" className="modal modal-open">
                        <div className="modal-box w-10/12 max-w-xl mx-height-0 p-0">
                            <form method="dialog">
                                <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500">✕</button>
                            </form>
                            {/* ---Offer Image--- */}
                            <div
                                className="hero">
                                <img className="w-full h-[500px]" src={image} alt="" />
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-neutral-content text-center">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-3xl font-bold text-yellow-500">Winter Offer</h1>
                                        <h1 className="mb-5 text-6xl font-bold text-[#FBBF24]">50% - Discount</h1>
                                        <p className="text-lg font-semibold mb-5 text-yellow-400">
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