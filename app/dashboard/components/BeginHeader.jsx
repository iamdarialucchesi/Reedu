"use client";
import Image from "next/image";

import profilePic from "@/public/images/profile-pic.png";
import borderPic from "@/public/images/border-red-rounded.png";
import badgePic from "@/public/images/badge.png";
import heartIcon from "@/public/icons/heart-red.svg";
import fireIcon from "@/public/icons/fire-colorfull.svg";
import diamondIcon from "@/public/icons/daimond.svg";

export default function BeginHeader() {

    return (
        <div
            className="border border-danger d-flex flex-column flex-sm-row gap-3 gap-md-0 justify-content-between w-100 px-3 px-md-3 pt-2 pt-md-2 pb-2 pb-md-3 rounded-4">
            <div className="stats-detail d-flex align-items-center gap-3">
                <div className="profile-image position-relative">
                    <Image src={borderPic} alt="border-red" width={80} height={80}/>
                    <Image src={profilePic} alt="profile-pic" height={60} width={60}
                           className="position-absolute start-14 top-14"/>
                    <Image src={badgePic} alt="badge-pic" height={30} width={30}
                           className="position-absolute start-32 bottom-n10"/>
                    <span className="position-absolute fs-10 text-white z-2 start-48 bottom-0">1</span>
                </div>
                <div className="profile-name">
                    <h3 className="fw-bold text-darkLow">John</h3>
                    <span
                        className="fw-medium text-primary fs-14 text-uppercase border border-primaryDark bg-primaryLow px-2 py-1 rounded-2">level 1</span>
                </div>
            </div>
            <div className="achievements d-flex gap-5 justify-content-around justify-content-md-start">
                <div className="d-flex gap-2 align-items-center">
                    <Image src={heartIcon} alt="heart-icon" width={20} height={20}/>
                    <p className="fw-bold fs-18 m-0">5</p>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <Image src={fireIcon} alt="fire-icon" width={20} height={20}/>
                    <p className="fw-bold fs-18 m-0">200+</p>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <Image src={diamondIcon} alt="daimond-icon" width={20} height={20}/>
                    <p className="fw-bold fs-18 m-0">500+</p>
                </div>
            </div>
        </div>
    )
}
