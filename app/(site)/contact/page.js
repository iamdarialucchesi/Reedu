import Image from "next/image";

import ContactInfo from "@/components/ContactInfo";
import Form from "@/components/Form";
import ImagesAnimation from "@/components/ImagesAnimation";

import ContactHeroImage from "@/public/images/contact-page-hero.png";
import MailIcon from "@/public/icons/mail-icon.svg";
import PhoneIcon from "@/public/icons/phone-icon.svg";
import Building from "@/public/images/building.png";

function ContactUsPage() {
    return (
        <div className="contact-us-section pt-7">
            <div className="container">
                {/*hero section*/}
                <div className="mb-4 mb-md-6">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="about-hero-text">
                                <h1 className="fw-semibold">
                                    <span className="text-danger fw-semibold me-2">Contact</span>Us
                                </h1>
                                <p className="mb-0 me-3 text-lighter">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-md-end heroImage mt-3 mt-md-0">
                                <Image src={ContactHeroImage} alt="contact-hero-image" className="img-fluid w-100 h-100"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/*contact info*/}
                <div className="mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <ContactInfo src={MailIcon} heading="Mail Us" text="info@reedu.com" refernce="mailto"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ContactInfo src={PhoneIcon} heading="Call Us" text="864.672.4675" refernce="tel"/>
                        </div>
                    </div>
                </div>

                {/*form section*/}
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <Image src={Building} alt="building" className="img-fluid rounded-2 w-100 h-100"/>
                    </div>
                    <div className="col-12 col-lg-7">
                        <div className="mt-4 mt-lg-0">
                            <Form/>
                        </div>
                    </div>
                </div>

                <ImagesAnimation />
            </div>
        </div>
    )
}

export default ContactUsPage;
