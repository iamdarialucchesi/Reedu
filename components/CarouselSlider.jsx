"use client";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

import ChevronLeft from "@/public/icons/Chevron left.svg"
import ChevronRight from "@/public/icons/Chevron Right.svg"
import LinkLine from "@/public/images/red linked image.png"

function CarouselSlider({teamMembers}) {
    const [teamMemberIndex, setTeamMemberIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [isClick, setIsClick] = useState(teamMembers[teamMemberIndex]);
    const sliderRef = useRef(null);

    const {id, name, experience, image, role, location, email} = isClick;

    useEffect(() => {
        if (isMounted) {
            setIsClick(teamMembers[teamMemberIndex]);

            // Scroll to the active thumbnail
            const activeButton = sliderRef.current?.querySelectorAll("button")[teamMemberIndex];
            activeButton?.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
        } else {
            setIsMounted(true);
        }
    }, [teamMembers, teamMemberIndex]);

    function handleActive(index) {
        setTeamMemberIndex(index)
    }

    function handleNext() {
        if (teamMemberIndex === teamMembers.length - 1) return;
        setTeamMemberIndex(teamMemberIndex + 1);
    }

    function handlePrevious() {
        if (teamMemberIndex === 0) return;
        setTeamMemberIndex(teamMemberIndex - 1);
    }

    return (
        <div className="mt-5 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 pe-2 pe-md-0">
                        <div
                            className="carousel-slider-bg p-3 rounded-4 d-flex flex-column justify-content-between custom-height-slider-card">
                            {/*image & role*/}
                            <div className="text-center text-md-start ">
                                <Image src={image} alt={`image of ${name}`} width={80} height={80}
                                       className="mb-4 rounded-pill"/>
                                <p className="d-none d-md-block fw-medium fs-18 text-white border-start border-white ps-3">{name}</p>
                                <p className="mb-0 mb-md-2 d-block d-md-none fw-medium text-center fs-16 text-white">{name}</p>
                                <p className="m-0 fw-normal fs-15 text-center text-md-start text-white">{role}</p>
                            </div>

                            {/*card inside info for small screen*/}
                            <div className="my-4 d-block d-md-none text-center">
                                <div className="mb-2">
                                    <p className="m-0 fw-normal fs-6 text-white">Years of Experience</p>
                                    <p className="m-0 fw-medium fs-6 text-white">{experience}</p>
                                </div>
                                <div className="mb-2">
                                    <p className="m-0 fw-normal fs-6 text-white">Location</p>
                                    <p className="m-0 fw-medium fs-6 text-white">{location}</p>
                                </div>
                                <div className="mb-2">
                                    <p className="m-0 fw-normal fs-6 text-white">Email Address</p>
                                    <p className="m-0 fw-medium fs-6 text-white">{email}</p>
                                </div>
                            </div>

                            {/*arrows */}
                            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                                <Image src={ChevronLeft} alt="left arrow" width={25} height={25}
                                       onClick={handlePrevious} className="cursor-pointer"/>
                                <Image src={ChevronRight} alt="next arrow" width={25} height={25} onClick={handleNext}
                                       className="cursor-pointer"/>
                            </div>
                        </div>
                    </div>

                    {/*red line*/}
                    <div className="col-md-1 p-0 m-0 position-relative d-none d-md-block">
                        <Image src={LinkLine} alt="line red" className="position-absolute redLinePosition"/>
                    </div>

                    {/* images slide */}
                    <div className="col-md-8 d-flex flex-column justify-content-between d-none d-md-block">
                        <div ref={sliderRef} className="scrollbar-hidden d-flex gap-lg-5 gap-4 mb-5 overflow-y-auto">
                            {
                                teamMembers.map((member, index) =>
                                    <button
                                        key={member.id}
                                        className={`btn rounded-pill p-0 ${index === teamMemberIndex ? "active-slide" : ""}`}
                                        onClick={() => handleActive(index)}>
                                        <Image src={member.image} alt={`photo of ${member.name}`}
                                               className="sliderImages"/>
                                    </button>
                                )
                            }
                        </div>

                        {/*card below info card*/}
                        <div className="row carousel-slider-bg px-lg-4 px-1 py-lg-4 py-2 rounded-4">
                            <div className="d-flex d-lg-block col-lg-4">
                                <p className="mb-2 fw-normal fs-6 text-white text-width">Years of Experience</p>
                                <p className="m-0 fw-medium fs-6 text-white">{experience}</p>
                            </div>
                            <div className="d-flex d-lg-block col-lg-4">
                                <p className="mb-2 fw-normal fs-6 text-white text-width">Location</p>
                                <p className="m-0 fw-medium fs-6 text-white">{location}</p>
                            </div>
                            <div className="d-flex d-lg-block col-lg-4">
                                <p className="mb-2 fw-normal fs-6 text-white text-width">Email Address</p>
                                <p className="m-0 fw-medium fs-6 text-white">{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselSlider;
