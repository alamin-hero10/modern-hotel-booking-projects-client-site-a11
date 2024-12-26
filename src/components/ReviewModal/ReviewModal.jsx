
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
                        <div className="card w-full max-w-2xl mx-auto shrink-0">
                            <h2 className="text-2xl font-semibold text-center mb-10">Room Review</h2>
                            <form onSubmit="">
                                <div>
                                    <div>
                                        <h1>Room Name: Deluxe Suite</h1>
                                        <h1>Your Name: Al-Amin Hero</h1>
                                        <h1>Your Email: abc@gmail.com</h1>
                                    </div>
                                    <div>
                                        <textarea className="textarea textarea-success" placeholder="Bio"></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        onClick={() => document.getElementById('my_modal_4').showModal()}
                                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-7 me-2 mb-2">
                                        Review
                                    </button>
                                </div>
                                {/* <div className="flex items-center justify-center mt-7">
                                    <button className="bg-[#015CB5] py-3 px-7 text-base font-medium text-white rounded-md hover:bg-[#4caf50] tracking-widest">Confirm</button>
                                </div> */}
                            </form>
                        </div>
                    </div>
                    <div className="modal-action">
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ReviewModal;