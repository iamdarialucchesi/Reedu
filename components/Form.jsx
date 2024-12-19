import React from "react";

function Form() {
    return (
        <form className='custom-foucs ps-0 ps-lg-2 mb-4'>
            <div className="mb-4">
                <label htmlFor="firstName" className="form-label fw-semibold pb-1">First
                    Name</label>
                <input type="name" className="form-control" id="firstName"
                       placeholder='Enter First Name'/>
            </div>

            <div className="mb-4">
                <label htmlFor="LastName" className="form-label fw-semibold pb-1">Last Name</label>
                <input type="name" className="form-control" id="LastName"
                       placeholder='Enter First Name'/>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="form-label fw-semibold pb-1">Email</label>
                <input type="email" className="form-control" id="email"
                       placeholder='Enter First Name'/>
            </div>

            <div className="mb-4">
                <label htmlFor="phoneNumber" className="form-label fw-semibold pb-1">Phone
                    Number</label>
                <input type="number" className="form-control" id="phoneNumber"
                       placeholder='Enter Phone Number'/>
            </div>

            <div className="mb-4">
                <label htmlFor="Message" className="form-label fw-semibold pb-1">Message</label>
                <textarea className="form-control" id="Message" rows="5"
                          placeholder='Enter Message'></textarea>
            </div>

            <button type="button"
                    className="btn custom-btn-background fw-bold text-white py-2 px-4 rounded-3">Submit
            </button>
        </form>
    )
}

export default Form;
