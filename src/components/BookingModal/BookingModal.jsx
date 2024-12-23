
const BookingModal = () => {
    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-8/12 max-w-2xl">
                    {/* ---Cancel Button--- */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* -----Form----- */}
                    <div>
                        <div className="card bg-base-100 w-full max-w-2xl mx-auto shrink-0">
                            <h2 className="text-2xl font-semibold text-center mt-10">Update Visa Information</h2>
                            <div className="divider w-11/12 mx-auto"></div>
                            {/* <form onSubmit={handleVisaUpdate}> */}
                            <form onSubmit="">
                                <div className="grid grid-cols-2">
                                    <div className="hero">
                                        <div className=" w-full shrink-0">
                                            <div className="card-body py-0">
                                                {/* ---Room Price--- */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Price</span>
                                                    </label>
                                                    <input
                                                        name="countryName"
                                                        type="name"
                                                        // defaultValue={countryName}
                                                        placeholder="Country Name"
                                                        className="input input-bordered"
                                                        required />
                                                </div>
                                                {/* ---Processing Time--- */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Processing Time</span>
                                                    </label>
                                                    <input
                                                        name="time"
                                                        type="text"
                                                        // defaultValue={time}
                                                        placeholder="Processing Time"
                                                        className="input input-bordered"
                                                        required />
                                                </div>
                                                {/* ---Visa Type--- */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Visa Type</span>
                                                    </label>
                                                    <select name="select" className="select select-bordered w-full">
                                                        <option disabled selected>Select Visa Type</option>
                                                        <option value="Tourist Visa">Tourist Visa</option>
                                                        <option value="Student Visa">Student Visa</option>
                                                        <option value="Official Visa">Official Visa</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* --------------------------------- */}
                                    <div className="hero">
                                        <div className="card bg-base-100 w-full shrink-0">
                                            <div className="card-body py-0">
                                                {/* ---Country Image--- */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Country Image</span>
                                                    </label>
                                                    <input
                                                        name="photo"
                                                        type="photo"
                                                        // defaultValue={photo}
                                                        placeholder="Country Image"
                                                        className="input input-bordered"
                                                        required />
                                                </div>
                                                {/* ---Application Method--- */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Application Method</span>
                                                    </label>
                                                    <input
                                                        name="applicationMethod"
                                                        type="text"
                                                        // defaultValue={application_method}
                                                        placeholder="Application Method"
                                                        className="input input-bordered"
                                                        required />
                                                </div>
                                                {/* ---Validity--- */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-lg">Validity</span>
                                                    </label>
                                                    <input
                                                        name="validity"
                                                        type="text"
                                                        // defaultValue={validity}
                                                        placeholder="Validity"
                                                        className="input input-bordered"
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-center mt-7">
                                    <button className="bg-[#015CB5] py-3 px-7 text-base font-medium text-white rounded-md hover:bg-[#4caf50] tracking-widest">Confirm</button>
                                </div>
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

export default BookingModal;