"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useState} from "react";

import ModuleHead from "@/app/dashboard/begin/components/ModuleHead";
import {useModule} from "@/app/context/ModuleContext";

import moduleSevenHeadImage from "@/public/images/old-lady-picture.png";
import clickToStart from "@/public/icons/click-to-start-btn.svg";
import degreeHolderGirlPicture from "@/public/images/degree-holder-girl-picture.png";

export default function ModuleSeven() {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const {count} = useModule();

    function handleNavigate() {
        if (count >= 7) {
            router.push('/dashboard/intro');
        }
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${isExpanded ? "mb-15" : "mb-10"}`}>
            <ModuleHead src={moduleSevenHeadImage} onClick={toggleExpand}>
                <div className="py-1">
                    <p className="mb-2 text-darkLow fw-bold fs-18">Module Seven: Final Checklist Items and Closing</p>
                    <div className="m-0 text-secondaryHigh fw-bold fs-12 text-uppercase"
                       style={{wordSpacing: "0.2rem"}}>
                        {isExpanded ? (
                            <>
                                <p className="m-0">
                                    Many steps come with the home buying process, and this can seem daunting to people
                                    that have to
                                    go through these steps, even if they have purchased a home in the past. It really
                                    can be pretty
                                    simple, once you know how the total picture looks and how to move through the steps
                                    easily and
                                    quickly. In total, it comes down to:
                                </p>
                                <ol>
                                    <li>Qualifying to purchase,</li>
                                    <li>Finding a home you desire,</li>
                                    <li>Negotiating the purchase,</li>
                                    <li>And finalizing the steps for closing.</li>
                                </ol>
                                <p className="m-0">
                                    If you choose to work with a real estate agent (and you work with a mortgage loan
                                    officer for a
                                    mortgage), much of the process will be done for you by those professionals, with
                                    your guidance.
                                    If you wish to purchase a home without a real estate agent, then you just need to
                                    know what
                                    steps you oversee in the process that otherwise would have been done on your behalf
                                    by the real
                                    estate agent.
                                </p>
                                <p className="m-0">
                                    Let’s go through some of the pieces we will teach you in this first module, so you
                                    can picture
                                    the process with more ease. Here is a quick checklist for you to start with:
                                </p>
                                <ol>
                                    <li>Benefits of Owning a home</li>
                                    <li>Understanding Numbers and Mortgage Programs</li>
                                    <li>Getting Pre-Approved to Purchase a Home</li>
                                    <li>How to Find a Great Loan Officer to Work With</li>
                                    <li>Starting the Process of Looking at Properties</li>
                                </ol>
                            </>
                        ) : (
                            "Many steps come with the home buying process"
                        )}
                    </div>
                </div>
            </ModuleHead>

            <div className="position-relative" style={{top: isExpanded ? "70px" : "0px"}}>
                <h3 className="mt-3 text-darkLow fw-bold fs-5 text-center">Start Your Journey</h3>
                <div className="d-flex justify-content-center position-relative">
                    <Image src={clickToStart} alt="click-to-start" height={90} width={90}
                           className={`${count >= 7 && "cursor-pointer"}`}
                           onClick={handleNavigate}/>
                    <div
                        className="chat-bubble-six chat-bubble-module-two px-3 py-2 bg-whiteLow position-absolute d-none d-lg-block">
                        <p className="text-darkerGrey fw-normal fs-16 m-0">You are So Close</p>
                    </div>
                    <Image src={degreeHolderGirlPicture} alt="girl-gif" width={80} height={90} unoptimized={true}
                           className="position-absolute module-two-gif-position d-none d-lg-block"/>
                </div>
            </div>
        </div>
    )
}
