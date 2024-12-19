"use client";

import {useEffect, useState} from "react";
import Image from "next/image";

import OpenIcon from "@/public/icons/accordion-open.png";
import CloseIcon from "@/public/icons/accordion-close.png";
import AccordionImage1 from "@/public/images/accordion body.png";
import woodenImage from "@/public/images/wooden building.png";

function Accordions({icons, woodenBody, btn, clientText, line, transparentEffect}) {
    const [creatorsAccordionToggle, setCreatorsAccordionToggle] = useState(0);

    useEffect(() => {
        const handleResizeForAccordianToggle = () => {
            if (window.innerWidth >= 768 && creatorsAccordionToggle === -1) {
                setCreatorsAccordionToggle(0);
            }
        };
        window.addEventListener('resize', handleResizeForAccordianToggle);
        // Check initial width
        handleResizeForAccordianToggle();
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResizeForAccordianToggle);
        };
    }, [creatorsAccordionToggle]);

    const handleCreatorsAccordionToggle = (indexToShow) => {
        if (window.innerWidth < 768) {
            if (creatorsAccordionToggle === indexToShow) {
                setCreatorsAccordionToggle(-1)
            } else {
                setCreatorsAccordionToggle(indexToShow)
            }
        } else {
            setCreatorsAccordionToggle(indexToShow)
        }
    }

    return (
        <section className='creators-section my-5'>
            <div>
                <div className="accordion width gap-3" id="accordionHorizontalExample">
                    <div
                        className={`card ${creatorsAccordionToggle === 0 ? `${transparentEffect ? "bg-transparent pt-3" : "accordion-bg-blue py-3"}` : "accordion-bg-blue-close py-3"} rounded-3`}>
                        <div onClick={() => handleCreatorsAccordionToggle(0)}
                            // <div onClick={() => setCreatorsAccordionToggle(0)}
                             className={`card-header ${creatorsAccordionToggle === 0 ? "px-0" : "px-3 d-flex"} accordion-btn align-items-center ${transparentEffect ? "d-md-flex" : "d-flex px-3"} justify-content-between gap-3 text-white`}
                             data-toggle="collapse" data-target="#collapseOne">
                            <div className='accordion-heading d-flex align-items-center gap-3'>
                                {
                                    icons && (
                                        (creatorsAccordionToggle === 0) ?
                                            <Image src={OpenIcon} width={40} height={40} alt="plus icon"/> :
                                            <Image src={CloseIcon} alt="minus icon" width={40} height={40}/>
                                    )
                                }
                                {
                                    <div className={`${creatorsAccordionToggle === 0 && "d-none"}`}>Lorem Ipsum is
                                        simply</div>
                                }
                                {line && <span
                                    className={`custom-line ${creatorsAccordionToggle === 0 && "d-none"}`}></span>}
                            </div>
                            <div
                                className={`fs-2 rt-180 fw-bold ${creatorsAccordionToggle === 0 && `${transparentEffect && "text-primary"}`}`}>
                                01
                            </div>
                        </div>
                        <div id="collapseOne"
                             className={`collapse ${creatorsAccordionToggle === 0 ? "show" : ""} width`}
                             data-parent="#accordionHorizontalExample">
                            <div
                                className={`card-body text-white ${transparentEffect ? "p-0 px-md-4" : "px-4"} ${transparentEffect ? "pt-2" : "py-2"}`}>
                                <h2 className={`fw-bold fs-2 pb-2 ${creatorsAccordionToggle === 0 && `${transparentEffect && "text-primary"}`}`}>Imagination
                                    Vacation: Clouds</h2>
                                {clientText &&
                                    <div className="my-3">
                                        <div className="d-flex">
                                            <p className={`m-0 ${creatorsAccordionToggle === 0 ? `${transparentEffect && "text-light"}` : "text-white"} custom-width-accordion-text`}>Client</p>
                                            <p className={`m-0 ${creatorsAccordionToggle === 0 ? `${transparentEffect && "text-light"}` : "text-white"}`}>Location</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className={`m-0 ${creatorsAccordionToggle === 0 ? `${transparentEffect && "text-dark"}` : "text-white"} fw-medium custom-width-accordion-text`}>Lorem
                                                Ipsum</p>
                                            <p className={`m-0 ${creatorsAccordionToggle === 0 ? `${transparentEffect && "text-dark"}` : "text-white"} fw-medium`}>Semarang,
                                                Indonesia</p>
                                        </div>
                                    </div>
                                }
                                <p className={`fs-5 fs-19 ${creatorsAccordionToggle === 0 ? `${transparentEffect && "text-light"}` : "text-white"}`}>Lorem
                                    Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem Ipsum has been the industry
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.</p>
                                {btn && <button className='btn btn-outline-white px-4 py-2 mt-3'>Learn More</button>}
                                <Image src={woodenBody ? woodenImage : AccordionImage1} className='img-fluid mt-4'
                                       alt="image"/>
                            </div>
                        </div>
                    </div>

                    {/*2nd accordion*/}
                    <div
                        className={`card ${creatorsAccordionToggle === 1 ? `${transparentEffect ? "bg-transparent pt-3" : "accordion-bg-red py-3"}` : "accordion-bg-red-close py-3"} rounded-3`}>
                        <div
                            onClick={() => handleCreatorsAccordionToggle(1)}
                            // onClick={() => setCreatorsAccordionToggle(1)}
                            className={`card-header ${creatorsAccordionToggle === 1 ? "px-0" : "d-flex px-3"} accordion-btn ${transparentEffect ? "d-md-flex" : "d-flex px-3"} align-items-center justify-content-between gap-3 text-white`}
                            data-toggle="collapse" data-target="#collapseOne">
                            <div className='accordion-heading d-flex align-items-center gap-3 '>
                                {
                                    icons && (
                                        (creatorsAccordionToggle === 1) ?
                                            <Image src={OpenIcon} width={40} height={40} alt="plus icon"/> :
                                            <Image src={CloseIcon} width={40} height={40} alt="minus icon"/>
                                    )
                                }
                                {
                                    <div className={`${creatorsAccordionToggle === 1 && "d-none"}`}>Lorem Ipsum is
                                        simply</div>
                                }
                                {line && <span
                                    className={`custom-line ${creatorsAccordionToggle === 1 && "d-none"}`}></span>}
                            </div>
                            <div
                                className={`fs-2 rt-180 fw-bold ${creatorsAccordionToggle === 1 && `${transparentEffect && "text-danger"}`}`}>
                                02
                            </div>
                        </div>
                        <div id="collapseTwo"
                             className={`collapse ${creatorsAccordionToggle === 1 ? "show" : ""}`}
                             data-parent="#accordionHorizontalExample">
                            <div
                                className={`card-body text-white ${transparentEffect ? "p-0 px-md-4" : "px-4"} ${transparentEffect ? "pt-2" : "py-2"}`}>
                                <h2 className={`fw-bold fs-2 pb-2 ${creatorsAccordionToggle === 1 && `${transparentEffect && "text-danger"}`}`}>Imagination
                                    Vacation: Clouds</h2>
                                {clientText &&
                                    <div className="my-3">
                                        <div className="d-flex">
                                            <p className={`m-0 ${creatorsAccordionToggle === 1 ? `${transparentEffect && "text-light"}` : "text-white"} custom-width-accordion-text`}>Client</p>
                                            <p className={`m-0 ${creatorsAccordionToggle === 1 ? `${transparentEffect && "text-light"}` : "text-white"}`}>Location</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className={`m-0 ${creatorsAccordionToggle === 1 ? `${transparentEffect && "text-dark"}` : "text-white"} fw-medium custom-width-accordion-text`}>Lorem
                                                Ipsum</p>
                                            <p className={`m-0 ${creatorsAccordionToggle === 1 ? `${transparentEffect && "text-dark"}` : "text-white"} fw-medium`}>Semarang,
                                                Indonesia</p>
                                        </div>
                                    </div>
                                }
                                <p className={`fs-5 fs-19 ${creatorsAccordionToggle === 1 ? `${transparentEffect && "text-light"}` : "text-white"}`}>Lorem
                                    Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem Ipsum has been the industry
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.</p>
                                {btn && <button className='btn btn-outline-white px-4 py-2 mt-3'>Learn More</button>}
                                <Image src={woodenBody ? woodenImage : AccordionImage1} className='img-fluid mt-4'
                                       alt="image"/>
                            </div>
                        </div>
                    </div>

                    {/*3rd accordion*/}
                    <div
                        className={`card ${creatorsAccordionToggle === 2 ? `${transparentEffect ? "bg-transparent pt-3" : "accordion-bg-blue py-3"}` : "accordion-bg-blue-close py-3"} rounded-3`}>
                        <div
                            onClick={() => handleCreatorsAccordionToggle(2)}
                            className={`card-header ${creatorsAccordionToggle === 2 ? "px-0" : "d-flex px-3"} accordion-btn ${transparentEffect ? "d-md-flex" : "d-flex px-3"} align-items-center justify-content-between gap-3 text-white`}
                            data-toggle="collapse" data-target="#collapseOne">
                            <div className='accordion-heading d-flex align-items-center gap-3 '>
                                {
                                    icons && (
                                        (creatorsAccordionToggle === 2) ?
                                            <Image src={OpenIcon} width={40} height={40} alt="plus icon"/> :
                                            <Image src={CloseIcon} width={40} height={40} alt="minus icon"/>
                                    )
                                }
                                {
                                    <div className={`${creatorsAccordionToggle === 2 && "d-none"}`}>Lorem Ipsum is
                                        simply</div>
                                }
                                {line && <span
                                    className={`custom-line ${creatorsAccordionToggle === 2 && "d-none"}`}></span>}
                            </div>
                            <div
                                className={`fs-2 rt-180 fw-bold ${creatorsAccordionToggle === 2 && `${transparentEffect && "text-primary"}`}`}>
                                03
                            </div>
                        </div>
                        <div id="collapseThree"
                             className={`collapse ${creatorsAccordionToggle === 2 ? "show" : ""} width`}
                             data-parent="#accordionHorizontalExample">
                            <div
                                className={`card-body text-white ${transparentEffect ? "p-0 px-md-4" : "px-4"} ${transparentEffect ? "pt-2" : "py-2"}`}>
                                <h2 className={`fw-bold fs-2 pb-2 ${creatorsAccordionToggle === 2 && `${transparentEffect && "text-primary"}`}`}>Imagination
                                    Vacation: Clouds</h2>
                                {clientText &&
                                    <div className="my-3">
                                        <div className="d-flex">
                                            <p className={`m-0 ${creatorsAccordionToggle === 2 ? `${transparentEffect && "text-light"}` : "text-white"} custom-width-accordion-text`}>Client</p>
                                            <p className={`m-0 ${creatorsAccordionToggle === 2 ? `${transparentEffect && "text-light"}` : "text-white"}`}>Location</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className={`m-0 ${creatorsAccordionToggle === 2 ? `${transparentEffect && "text-dark"}` : "text-white"} fw-medium custom-width-accordion-text`}>Lorem
                                                Ipsum</p>
                                            <p className={`m-0 ${creatorsAccordionToggle === 2 ? `${transparentEffect && "text-dark"}` : "text-white"} fw-medium`}>Semarang,
                                                Indonesia</p>
                                        </div>
                                    </div>
                                }
                                <p className={`fs-5 fs-19 ${creatorsAccordionToggle === 2 ? `${transparentEffect && "text-light"}` : "text-white"}`}>Lorem
                                    Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem Ipsum has been the industry
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.</p>
                                {btn && <button className='btn btn-outline-white px-4 py-2 mt-3'>Learn More</button>}
                                <Image src={woodenBody ? woodenImage : AccordionImage1} className='img-fluid mt-4'
                                       alt="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accordions;
