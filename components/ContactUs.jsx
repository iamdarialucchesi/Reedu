import React from "react"
import Image from "next/image";

import contactTell from "@/public/icons/phone-call.svg";
import contactEmail from "@/public/icons/sharp-email.svg";
import contactLocation from "@/public/icons/location-filled.svg";
import facebook from "@/public/icons/Facebook-contact-logo.png";
import instagram from "@/public/icons/Instagram-contact-logo.png";
import linkedIn from "@/public/icons/Linkedin-contact-logo.png";
import Form from "@/components/Form";

function ContactUs() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className='contact-section my-7 py-5'>
            <section className="">
                <div className='row px-12px'>
                    <div className='col-12 col-lg-5 contact-bg border rounded-3 position-relative c-form'>
                        <div className=" px-3 px-md-4 py-3  d-flex flex-column justify-content-between gap-4">
                            <div className="">
                                <h2 className='contact-heading fw-bold text-white mb-3'>Contact Us</h2>
                                <p className='text-white pe-3'>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting
                                    industry. Lorem Ipsum has been the industry standard dummy text ever since the
                                    1500s</p>
                                <div className='contact-details mt-5'>
                                    <p className='contact-tel text-white d-flex gap-4 mb-4'>
                                        <Image width={20} height={20} src={contactTell} alt="icon"
                                               style={{width: 'auto', height: 'auto'}}/>
                                        864.672.4675
                                    </p>
                                    <p className='contact-tel text-white d-flex gap-4 mb-4'>
                                        <Image width={20} height={20} src={contactEmail} alt="icon"
                                               style={{width: 'auto', height: 'auto'}}/>
                                        info@reedu.com
                                    </p>
                                    <p className='contact-tel text-white d-flex align-items-start gap-4'>
                                        <Image width={20} height={20} src={contactLocation} alt="icon"
                                               style={{width: 'auto', height: 'auto'}}/>
                                        333 Wade Hampton Blvd<br/> Greenville, SC 29609
                                    </p>
                                </div>
                            </div>

                            <div className='contact-icons d-flex gap-4 pb-2 position-absolute bottom-0 pb-4'>
                                <Image width={20} height={30} src={facebook} alt="facebook-icon"/>
                                <Image width={20} height={30} src={linkedIn} alt="linkedIn-icon"/>
                                <Image width={20} height={30} src={instagram} alt="instagran-icon"/>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-7 mt-4 mt-lg-0'>
                        <Form/>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default ContactUs;
