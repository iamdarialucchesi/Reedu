import Image from "next/image";

import xpIcon from "@/public/icons/xp-token.svg";
import labelIcon from "@/public/icons/label-token.svg";

export default function DailyQuest() {
    return (
        <div
            className="border border-primary rounded-4 position-relative ">
            <div className="px-3 pt-3 pb-4  border-bottom border-greyLow">
                <div className="d-flex justify-content-between align-items-center pb-3">
                    <h5 className="m-0 text-darkLow fw-bold fs-6">Daily Quest</h5>
                    <p className="m-0 text-primary fw-bold fs-12 text-uppercase gradient-text">View All</p>
                </div>

                {/*progress bar*/}
                <div className="d-flex align-items-center gap-3">
                    <Image src={xpIcon} alt="xp-icon" width={50} height={50}/>
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-2 text-darkLow fw-bold fs-17">Earn 10 XP</h5>
                            <p className="mb-2 text-primary fw-bold fs-14">5/10</p>
                        </div>
                        <div className="progress rounded-pill" style={{height: "11px"}} role="progressbar"
                             aria-label="Danger example"
                             aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-danger" style={{width: "50%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-viewport-height-65">
                <div className="px-3 pt-4 overflow-y-scroll custom-cal-height-50 scrollbar-hidden">
                    <h4 className="text-darkLow fw-bold fs-18 mb-3">Unlock Next Module</h4>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Image src={labelIcon} alt="xp-icon" width={50} height={50}/>
                        <p className="m-0 text-darkLow fw-bold fs-16">Complete 10 Steps to Start Competing</p>
                    </div>
                </div>

                <div
                    className="px-4 py-3 custom-height-50 d-flex align-items-center gap-5 learners-slide-footer w-100 rounded-bottom-4">
                    <p className="m-0 text-white fw-medium fs-12">Terms & Conditions</p>
                    <p className="m-0 text-white fw-medium fs-12">Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
