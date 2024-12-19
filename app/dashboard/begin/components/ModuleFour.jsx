"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useState} from "react";

import {useModule} from "@/app/context/ModuleContext";
import ModuleHead from "@/app/dashboard/begin/components/ModuleHead";

import moduleFourHeadImage from "@/public/images/old-lady-picture.png";
import clickToStart from "@/public/icons/click-to-start-btn.svg";
import oldLadyPicture from "@/public/images/old-lady-picture.png";
import unactiveCard from "@/public/icons/unactive-card.svg";
import activeCard from "@/public/icons/active-card.svg";
import unactiveQuiz from "@/public/icons/unactive-quiz.svg";
import activeQuiz from "@/public/icons/active-quiz.svg";
import activeBookGear from "@/public/icons/book-gear-active.svg";
import unActiveBookGear from "@/public/icons/book-gear-unactive.svg";
import activeHandShake from "@/public/icons/hand-shake-active.svg";
import unActiveHandShake from "@/public/icons/hand-shake-unactive.svg";
import activePercentagePerson from "@/public/icons/percentage-person-active.svg";
import unActivePercentagePerson from "@/public/icons/percentage-person-unactive.svg";
import activeHouses from "@/public/icons/houses-active.svg";
import unActiveHouses from "@/public/icons/houses-unactive.svg";

export default function ModuleFour() {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const {setModuleContext, count} = useModule();

    const moduleCongrats = {title: "module four", value: 4, text: "Now You are Under Contract",};
    const moduleIntro = {
        text: "Congratulations! You have negotiated the purchase of a property and you and the seller have come to an agreement. This is a thrilling time, and you can definitely take a moment to celebrate and take in the excitement. Get some celebratory dinner or a treat and own the moment (many people don’t take the opportunity to feel the energy and joy, make sure you do!).",
        text1: "Once you have savored the moment, we also need to understand that being under contract, though a large first step, is only the beginning of your transaction process. Now, we must make sure you complete all the pieces and processes you put into the purchase contract and do so in the timeframes that keep you protected.",
        text2: "So, what do you need to do? Let’s get you a checklist of next steps to complete quickly so you can make sure everything is moving forward correctly.",
    };
    const moduleData = [
        {
            heading: "Have you gone through pre-approval?",
            unactiveIcon: unactiveCard,
            activeIcon: activeCard,
            content: {
                text: "Here are the big pieces you need to start doing as soon as you can once you have an accepted offer. Depending on what you all put in as requirements in the purchase agreement, these pieces may not cover everything. Or, if you negotiated the purchase without some of these pieces included, you may be able to skip something. But in general, jump on these steps as quickly as you can. Remember, time is of the essence when it comes to a real estate transaction. Do not procrastinate completing these pieces and potentially put your safety and contingency protections in peril.",
                orderList: [
                    {
                        title: "Earnest Money ",
                        text: "- When you have an accepted offer, start writing out the earnest money check and deliver it to the seller. Depending on what the seller wants, you could also wire the funds over to a bank account the seller or seller’s agent provides you for the holding of the funds. If you are providing the earnest money via a check, and the seller is using a real estate agent, you may be instructed by the seller or the seller’s agent to bring the check to the real estate agent’s office or the title company/closing attorney for cashing and holding. Check with the seller or seller’s agent whom to make the check out to and where it should be delivered and jump on that piece quickly. If you are purchasing a home in a different part of the country than where you currently reside, wiring the funds or mailing the check will be your options. Just make sure you give yourself time in the purchase agreement for delivery date of the earnest money check to be based on your situation.",
                    },
                    {
                        title: "Get your Loan Officer a Copy of the Paperwork ",
                        text: "– If you are using a mortgage to purchase the home, your loan officer will need to get started on their pieces quickly to have their portion can be completed by the closing date. Make sure you send the fully completed and signed version of the purchase agreement to your loan officer, including any addendums and counteroffers, so they have every detail to make sure everything is accurate on the mortgage application and in underwriting. Depending on your purchase, you may also have to send the Bill of Sale to the loan officer and/or other documents. Your loan officer can provide you updates on full document needs.",
                    },
                    {
                      title: "Homeowner’s Insurance Quotes – ",
                      text: "If you did not get homeowner’s insurance quotes prior to your offer (which we would always recommend getting quotes prior to your official offer so you have accurate payment examples when working up payment numbers for yourself or with your loan officer), you will want to start getting them now. Many people automatically request quotes from the same insurance agents that they currently have their vehicles and other insurance through, which is perfectly fine. We would always recommend getting quotes from a variety of different companies though, especially in this current insurance market, to give yourself the best opportunity to find lower cost insurance and good coverage.",
                    },
                ],
            },
        },
        {
            heading: "Quiz #1",
            unactiveIcon: unactiveQuiz,
            activeIcon: activeQuiz,
            content: {
                questions: {
                    quiz: [
                        {
                            question: "True or False – The best time to get insurance quotes is before you make an offer on the home?",
                            options: ["True", "False"],
                            correctOption: 1,
                            reason: "The purchase agreement’s section on homeowner’s insurance likely will be set up to allow you some time after getting under contract to find homeowner’s insurance companies that will insure the home. But, knowing if the property is insurable and what some estimated costs to insure it are, before you offer, can help you determine if purchasing that property is in your best interest prior to having a committed offer submitted. Homeowner’s insurance agents should be perfectly fine getting you quotes even if you not yet under contract. So, why not have that portion of your overall payment figured out to make sure that you will be comfortable with the total payment on the home you like.",
                        },
                    ],
                },
            },
        },
        {
            heading: "Quiz #2",
            unactiveIcon: unactiveQuiz,
            activeIcon: activeQuiz,
            content: {
                questions: {
                    quiz: [
                        {
                            question: "True or False – If you sign the initial disclosures and Loan Estimate that the loan officer and lender send out to you, that will mean you must work with that lender and loan officer for financing the home?",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "The initial disclosures being signed by you only means the loan officer and lender can continue working on your loan process. It does not mean you have to close the loan with them. If you are at the very beginning of being under contract on the home and the current loan officer does not appear to be providing you numbers that you expected or discussed with the loan officer beforehand, you can and likely should reach out to another loan officer and compare their numbers to the ones you received. If the second lender and loan officer provide much better pricing and options, and they verify they can close your file on time (based on the current contract), you have the right to switch. Just make sure you verify it will not cause issues with your current closing date, etc.",
                        },
                    ],
                },
            },
        },
        {
            heading: "Quiz #3",
            unactiveIcon: unactiveQuiz,
            activeIcon: activeQuiz,
            content: {
                questions: {
                    quiz: [
                        {
                            question: "Which of these steps are not likely needed to be done shortly after you get under contract on a home purchase?",
                            options: [
                                {
                                    title: "A",
                                    optionActiveIcon: activeBookGear,
                                    optionUnActiveIcon: unActiveBookGear,
                                    optionText: "Collecting homeowners’ insurance quotes on the property."
                                },
                                {
                                    title: "B",
                                    optionActiveIcon: activeHandShake,
                                    optionUnActiveIcon: unActiveHandShake,
                                    optionText: "Shopping for furniture"
                                },
                                {
                                    title: "C",
                                    optionActiveIcon: activePercentagePerson,
                                    optionUnActiveIcon: unActivePercentagePerson,
                                    optionText: "Getting your earnest money check or wire to the seller or seller’s agent"
                                },
                                {
                                    title: "D",
                                    optionActiveIcon: activeHouses,
                                    optionUnActiveIcon: unActiveHouses,
                                    optionText: "Scheduling a home inspection with a licensed home inspector."
                                },
                            ],
                            correctOption: 2,
                            reason: "This was hopefully not a very tricky one for you. Buying furniture shortly after you get under contract on a home purchase is not something that will increase or decrease your ability to protect yourself and your family during your home buying process. Focus on the important ones first.",
                        },
                    ],
                },
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
                            question: "When deciding on which homeowner’s insurance to choose, you should look all but which factor in your decision?",
                            options: [
                                {
                                    title: "A",
                                    optionActiveIcon: activeBookGear,
                                    optionUnActiveIcon: unActiveBookGear,
                                    optionText: "The level of coverage for the home, your personal items, and the endorsements."
                                },
                                {
                                    title: "B",
                                    optionActiveIcon: activeHandShake,
                                    optionUnActiveIcon: unActiveHandShake,
                                    optionText: "The price of the total premium you must pay for the insurance."
                                },
                                {
                                    title: "C",
                                    optionActiveIcon: activePercentagePerson,
                                    optionUnActiveIcon: unActivePercentagePerson,
                                    optionText: "The deductibles that are required for the policy."
                                },
                                {
                                    title: "D",
                                    optionActiveIcon: activeHouses,
                                    optionUnActiveIcon: unActiveHouses,
                                    optionText: "Whichever company has the best TV commercials."
                                },
                            ],
                            correctOption: 4,
                            reason: "Not a difficult one for you, either. Advertising is out there and can drive people to companies that they have heard of before. But that does not mean those companies are the best ones for you. Pick the insurance based on the coverage, costs, and deductibles you want, along with making sure the customer service reputation of the company is strong.",
                        },
                    ],
                },
            },
        },
    ];

    function handleNavigate() {
        if (count >= 4) {
            setModuleContext({moduleCongrats, moduleIntro, moduleData});
            router.push('/dashboard/intro');
        }
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${isExpanded ? "mb-15" : "mb-10"}`}>
            <ModuleHead src={moduleFourHeadImage} onClick={toggleExpand}>
                <div className="py-1">
                    <p className="mb-2 text-darkLow fw-bold fs-18">Module Four: Now You Are Under Contract</p>
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
                           className={`${count >= 4 && "cursor-pointer"}`}
                           onClick={handleNavigate}/>
                    <div
                        className="chat-bubble chat-bubble-module-two px-3 py-2 bg-whiteLow position-absolute d-none d-lg-block">
                        <p className="text-darkerGrey fw-normal fs-16 m-0">Now You are Under Contract</p>
                    </div>
                    <Image src={oldLadyPicture} alt="girl-gif" width={100} height={100} unoptimized={true}
                           className="position-absolute module-two-gif-position d-none d-lg-block"/>
                </div>
            </div>
        </div>
    )
}
