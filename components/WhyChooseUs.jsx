"use client";

import {useState} from "react";
import Image from "next/image";

import WhyChooseUsIcon1Active from "@/public/icons/why-choose-us-1-active.png";
import WhyChooseUsIcon1 from "@/public/icons/why-choose-us-1.png";
import WhyChooseUsIcon2Active from "@/public/icons/why-choose-us-2-active.png";
import WhyChooseUsIcon2 from "@/public/icons/why-choose-us-2.png";
import WhyChooseUsIcon3Active from "@/public/icons/why-choose-us-3-active.png";
import WhyChooseUsIcon3 from "@/public/icons/why-choose-us-3.png";
import WhyChooseUsIcon4Active from "@/public/icons/why-choose-us-4-active.png";
import WhyChooseUsIcon4 from "@/public/icons/why-choose-us-4.png";
import Git4 from "@/public/images/Loop6-1.gif";

function WhyChooseUs({animatedGif}) {
    const [hoverWhyChooseUsItem, setHoverWhyChooseUsItem] = useState(-1)

    return (
        <section className="why-choose-us py-5">
            <div className="position-relative">
                {
                    animatedGif && (
                        <Image src={Git4} alt="git-4" className="position-absolute flip-horizontal why-choose-img-position"
                               unoptimized={true}/>
                    )
                }
                <h2 className="why-choose-us-h2 text-dark text-center">Why <span
                    className="text-danger">Choose Us</span></h2>
                <div className="why-choose-us-items gap-3 mt-5">
                    <div onMouseEnter={() => setHoverWhyChooseUsItem(0)}
                         onMouseLeave={() => setHoverWhyChooseUsItem(-1)}
                         className={`why-choose-us-item ${hoverWhyChooseUsItem === 0 ? "active" : ""} pt-4 pb-5 px-3 rounded-4`}>
                        <div className="why-choose-us-item-icon mb-4">
                            {
                                (hoverWhyChooseUsItem === 0) ?
                                    <Image width={40} src={WhyChooseUsIcon1Active} alt="icon"/> :
                                    <Image width={40} src={WhyChooseUsIcon1} alt="icon"/>
                            }
                        </div>
                        <h4 className="why-choose-us-item-h4 mb-3 fw-semibold">Custom Avatar</h4>
                        <p className={`mb-0 fs-14 fw-normal ${hoverWhyChooseUsItem === 0 ? "text-white" : "text-lighter"}`}>Lorem
                            Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry.</p>
                    </div>

                    <div onMouseEnter={() => setHoverWhyChooseUsItem(1)}
                         onMouseLeave={() => setHoverWhyChooseUsItem(-1)}
                         className={`why-choose-us-item ${hoverWhyChooseUsItem === 1 ? "active" : ""} py-4 px-3 rounded-4`}>
                        <div className="why-choose-us-item-icon mb-4">
                            {
                                (hoverWhyChooseUsItem === 1) ?
                                    <Image width={40} src={WhyChooseUsIcon2Active} alt="icon"/> :
                                    <Image width={40} src={WhyChooseUsIcon2} alt="icon"/>
                            }
                        </div>
                        <h4 className="why-choose-us-item-h4 mb-3 fw-semibold">Learn How To Buy</h4>
                        <p className={`mb-0 fs-14 fw-normal ${hoverWhyChooseUsItem === 1 ? "text-white" : "text-lighter"}`}>Lorem
                            Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry.</p>
                    </div>

                    <div onMouseEnter={() => setHoverWhyChooseUsItem(2)}
                         onMouseLeave={() => setHoverWhyChooseUsItem(-1)}
                         className={`why-choose-us-item ${hoverWhyChooseUsItem === 2 ? "active" : ""} py-4 px-3 rounded-4`}>
                        <div className="why-choose-us-item-icon mb-4">
                            {
                                (hoverWhyChooseUsItem === 2) ?
                                    <Image width={40} src={WhyChooseUsIcon3Active} alt="icon"/> :
                                    <Image width={40} src={WhyChooseUsIcon3} alt="icon"/>
                            }
                        </div>
                        <h4 className="why-choose-us-item-h4 mb-3 fw-semibold">Creators</h4>
                        <p className={`mb-0 fs-14 fw-normal ${hoverWhyChooseUsItem === 2 ? "text-white" : "text-lighter"}`}>Lorem
                            Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry.</p>
                    </div>

                    <div onMouseEnter={() => setHoverWhyChooseUsItem(3)}
                         onMouseLeave={() => setHoverWhyChooseUsItem(-1)}
                         className={`why-choose-us-item ${hoverWhyChooseUsItem === 3 ? "active" : ""} py-4 px-3 rounded-4`}>
                        <div className="why-choose-us-item-icon mb-4">
                            {
                                (hoverWhyChooseUsItem === 3) ?
                                    <Image width={40} src={WhyChooseUsIcon4Active} alt="icon"/> :
                                    <Image width={40} src={WhyChooseUsIcon4} alt="icon"/>
                            }
                        </div>
                        <h4 className="why-choose-us-item-h4 mb-3 fw-semibold">Content</h4>
                        <p className={`mb-0 fs-14 fw-normal ${hoverWhyChooseUsItem === 3 ? "text-white" : "text-lighter"}`}>Lorem
                            Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;
