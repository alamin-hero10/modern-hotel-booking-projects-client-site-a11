
const BookingOfferModal = () => {

    return (
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-8/12 max-w-xl py-20">
                {/* ---Cancel Button--- */}
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* ---Form--- */}
                <div>
                    <div className="card w-full max-w-2xl mx-auto shrink-0">
                        <h2 className="text-2xl font-semibold text-center mb-10">Booking Information Offer !!!</h2>
                    </div>
                </div>
                <div className="modal-action">
                </div>
            </div>
        </dialog>
    );
};

export default BookingOfferModal;