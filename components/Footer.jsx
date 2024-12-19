import React from "react"
import Image from "next/image";

import LogoWhite from "@/public/images/logo-white.png"
import FacebookLogo from "@/public/icons/facebook-logo-white.png"
import TwitterLogo from "@/public/icons/twitter-logo-white.png"
import InstagramLogo from "@/public/icons/instagram-logo-white.png"
import LinkedinLogo from "@/public/icons/linkedin-logo-white.png"

function Footer() {

    return (
        <>
            <footer className='position-relative'>
                <div className="text-white">
                    <div className="container d-flex justify-content-between flex-column flex-lg-row py-5">
                        <div className="footer-left-pane">
                            <Image width={70} src={LogoWhite} className='mb-2' alt="logo-white"/>
                            <p className="text-white mt-3 mb-0">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type.
                            </p>
                        </div>
                        <div className="footer-right-pane d-flex">
                            <div>
                                <h3 className="footer-h3 mb-4">Links</h3>

                                <ul className="list-unstyled mb-0 mt-3 d-flex flex-column gap-4">
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            Creators
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="footer-h3 mb-4">Support & Support</h3>

                                <ul className="list-unstyled mb-0 mt-3 d-flex flex-column gap-4">
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="footer-h3 mb-4">Contact</h3>

                                <ul className="list-unstyled mb-0 mt-3 d-flex flex-column gap-4">
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            (808) 123 4567
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none text-white">
                                            support@reedu.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-top border-white">
                        <div className="container py-3 d-flex align-items-center justify-content-between">
                            <div>© 2023 ReEdu, LLC</div>
                            <ul className="list-unstyled mb-0 d-flex align-items-center gap-3">
                                <li>
                                    <a href="#"
                                       className={`footer-social-media-link d-flex align-items-center justify-content-center border rounded-1 text-decoration-none`}>
                                        <Image width={16.5} src={FacebookLogo} alt=""/>
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="footer-social-media-link d-flex align-items-center justify-content-center border rounded-1 text-decoration-none">
                                        <Image width={16.5} src={TwitterLogo} alt=""/>
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="footer-social-media-link d-flex align-items-center justify-content-center border rounded-1 text-decoration-none">
                                        <Image width={16.5} src={InstagramLogo} alt=""/>
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="footer-social-media-link d-flex align-items-center justify-content-center border rounded-1 text-decoration-none">
                                        <Image width={16.5} src={LinkedinLogo} alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
