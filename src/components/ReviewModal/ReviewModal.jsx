
import { useState } from "react";
import DatePicker from "react-datepicker";


const ReviewModal = () => {

    // Date Picker:
    const [startDate, setStartDate] = useState(new Date());

    // ---useContext---
    // const { user } = useContext(AuthContext);

    // const {roomData} = useParams();
    // console.log(roomData)


    // const { id, roomName, roomImage, price, totalReviews, location, stayDetails, keyFeatures, topCategories, } = roomData;

    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-8/12 max-w-xl pb-0">
                    {/* ---Cancel Button--- */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* ---Form--- */}
                    <div>
                        <div className="card mx-auto shrink-0">
                            <h2 className="text-3xl font-semibold text-center mb-3 underline">Room Review</h2>
                            <form onSubmit="">
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 my-3 ">
                                        <div className="rating rating-md">
                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-8"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center mt-7 me-2 mb-2">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ReviewModal;