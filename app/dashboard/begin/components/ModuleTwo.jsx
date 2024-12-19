"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";

import {useModule} from "@/app/context/ModuleContext";
import ModuleHead from "@/app/dashboard/begin/components/ModuleHead";

import moduleTwoHeadImage from "@/public/images/old-lady-picture.png";
import clickToStart from "@/public/icons/click-to-start-btn.svg";
import degreeHolder from "@/public/images/module-one-small.png";
import docCheck from "@/public/icons/doc-check-unactive.svg";
import docCheckActive from "@/public/icons/doc-check-active.svg";
import unactiveQuiz from "@/public/icons/unactive-quiz.svg";
import activeQuiz from "@/public/icons/active-quiz.svg";
import {useState} from "react";

export default function ModuleTwo() {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const {setModuleContext, count} = useModule();

    const moduleCongrats = {
        title: "module two",
        value: 2,
        text: "What to expect in a Purchase Agreement:",
    };
    const moduleIntro = {
        text: "When you find a property that you wish to make an offer on, the first thing you need to do is put together a purchase agreement breaking out the terms of the offer. A residential real estate purchase agreement, often referred to as a purchase contract, is a legally binding document that outlines the terms and conditions of the sale of a residential property. While the specific contents can vary by jurisdiction and the particulars of the transaction, there are several common elements you should expect to see in such an agreement.",
        text1: "As a reminder though, this contract is just an extension of an offer to purchase, until both parties (buyers and sellers) accept each other’s terms. Once both parties have agreed to the terms and signed the contract offer, the offer becomes binding, contingent upon the terms of the agreement becoming completed before closing.",
    };
    const moduleData = [
        {
            heading: "Finding a Purchase Agreement to Use for an Offer ",
            unactiveIcon: docCheck,
            activeIcon: docCheckActive,
            content: {
                text: "Most people’s number one question turns out to be, “Where can I find a purchase agreement to use?.",
                unOrderList: [
                    "The quickest places to turn are local real estate offices or your state Real Estate Commission. A Real Estate Commission is a regulatory body that is charged with administration of the Real Estate Licensing Act and other similar acts that enforce standards for those licensed in real estate related carriers, and to help protect the interest of the public who are engaged in real estate transactions. For instance, the state Department of Labor & Regulation in your area (or possibly another state agency) should provide free real estate transaction documents somewhere online for people to use.",
                    "If the property seller is using a real estate agent to sell their home, the agent for that sale would have a copy of a purchase agreement to provide you as well. Just remember, the seller’s agent may wish to try to represent you in the transaction, if they assist you with filling out the purchase agreement. There is no requirement that you are represented by an agent in order to get a copy of a purchase agreement, but if they assist you in filling out the agreement, there likely would be an obligation to have you signed as a client. Plus, the listing agent may or may not get paid more for representing you as the buyer in the transaction, so it is likely the agent will push you in the direction of having them (the agent) work as your agent to purchase the home alongside their representation of the seller. Make sure you are very clear with the listing agent about your intention to use them or not use them during the transaction, so no confusion or legal issues occur. If you wish no help or representation from the seller’s agent, make sure you do not sign any documentation that is outside of the purchase agreement you, personally, put together for the offer.",
                ],
            },
        },
        {
            heading: "Final Quiz",
            unactiveIcon: unactiveQuiz,
            activeIcon: activeQuiz,
            content: {
                questions: {
                    quiz: [
                        {
                            question: "True or False: If you get under contract, and a few weeks later you no longer wish to purchase the home, you can easily just cancel the contract without too much concern.",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "Remember, this contract is a binding and legal contract. If you decide to back out of the purchase because one of the contingencies were not met (such as home inspection came back with major issues, the home didn’t appraise for the purchase price, or other reasons), then you may have no legal ramifications. If you decide to no longer purchase a home, after you are under contract, outside of legitimate reasons, you can both lose your earnest money deposit and possibly be sued for a contract breach.",
                        },
                        {
                            question: "True or False: If the seller does not like your offer, they can choose to not accept it and end the negotiations.",
                            options: ["True", "False"],
                            correctOption: 1,
                            reason: "Though many times the seller will accept your offer, or choose to counter with their own offer, if your offer is too far off, they could choose to not accept it and skip trying to negotiate further.",
                        },
                        {
                            question: "True or False: When you write your offer, in the name section you should just put your name as a preferred nickname or shortened name instead of your full legal name.",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "You should put your name on the purchase agreement in the way you want the name to be on title to the property. Abbreviated names or nicknames should not be used unless you truly want that name as what shows up on the legal documentation.",
                        },
                        {
                            question: "True or False: When an appraisal is completed on a property, this is not the same as the property assessment by the county the home is in?",
                            options: ["True", "False"],
                            correctOption: 1,
                            reason: "An assessment is what the county or other government agency does with the property for the purpose of establishing property taxes for the property. An appraisal is a third-party opinion of the value of the home based on other properties that have recently sold and are similar in square footage, age, etc. to the property you are buying. The appraisal protects you and the mortgage portion from you purchasing a home that is not worth what you are buying it for.",
                        },
                        {
                            question: "True or False: When you have a home inspection completed on a property, you should ask the seller to fix everything the home inspector notates on the home inspection report?",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "A home inspection does provide you with information on updates and repairs that you may want to complete on the property, but it does not often state those updates/repairs have to be completed for you to safely live in the home. If you ask the seller to fix every little item on the home inspection report, the seller can decline your request, and even cancel the contract with you. You should go into the home inspection process knowing that it is for your information and protection. If there are major issues that will cost substantial funds to fix, asking the seller to do the work may be warranted. If there are minor issues you can fix easily while you own the property, those are likely not something to ask the sellers to complete.",
                        },
                        {
                            question: "True or False: The type of mortgage loan you are approved for with your lender can impact the seller accepting your offer?",
                            options: ["True", "False"],
                            correctOption: 1,
                            reason: "Each mortgage program has different requirements and criteria for the property you aim to purchase. The seller and the seller’s agent will likely know this. If you make an offer with a mortgage program approval that is going to be pickier and more likely to require minor repairs on the property, the seller may choose a different offer over yours or not accept your offer. In order to counter this risk to the seller, you may need to make a stronger offer to alleviate that risk to the seller.",
                        },
                    ],
                },
            },
        },
    ];

    function handleNavigate() {
        if (count >= 2) {
            setModuleContext({moduleIntro, moduleData, moduleCongrats});
            router.push('/dashboard/intro');
        }
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${isExpanded ? "mb-15" : "mb-10"}`}>
            <ModuleHead src={moduleTwoHeadImage} onClick={toggleExpand}>
                <div className="py-1">
                    <p className="mb-2 text-darkLow fw-bold fs-18">Module Two: Placing an offer</p>
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
                           className={`${count >= 2 && "cursor-pointer"}`}
                           onClick={handleNavigate}/>
                    <div
                        className="chat-bubble chat-bubble-module-two px-3 py-2 bg-whiteLow position-absolute d-none d-lg-block">
                        <p className="text-darkerGrey fw-normal fs-16 m-0">What to expect in a Purchase Agreement</p>
                    </div>
                    <Image src={degreeHolder} alt="girl-gif" width={70} height={100} unoptimized={true}
                           className="position-absolute module-two-gif-position d-none d-lg-block"/>
                </div>
            </div>
        </div>
    )
}
