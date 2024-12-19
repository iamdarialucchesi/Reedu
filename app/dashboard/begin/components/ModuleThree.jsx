"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";

import ModuleHead from "@/app/dashboard/begin/components/ModuleHead";

import moduleThreeHeadImage from "@/public/images/old-lady-picture.png";
import clickToStart from "@/public/icons/click-to-start-btn.svg";
import bookHolder from "@/public/images/book-holder-picture.png";
import docCheck from "@/public/icons/doc-check-unactive.svg";
import docCheckActive from "@/public/icons/doc-check-active.svg";
import unactiveCard from "@/public/icons/unactive-card.svg";
import activeCard from "@/public/icons/active-card.svg";
import unactiveQuiz from "@/public/icons/unactive-quiz.svg";
import activeQuiz from "@/public/icons/active-quiz.svg";
import capitalIcon from "@/public/icons/capital-icon.svg";
import checkDollorIcon from "@/public/icons/check-dollor-house.svg";
import capacityIcon from "@/public/icons/heat-waves.svg";
import costIcon from "@/public/icons/beg-of-money.svg";
import activeBookGear from "@/public/icons/book-gear-active.svg";
import unActiveBookGear from "@/public/icons/book-gear-unactive.svg";
import activeHandShake from "@/public/icons/hand-shake-active.svg";
import unActiveHandShake from "@/public/icons/hand-shake-unactive.svg";
import activePercentagePerson from "@/public/icons/percentage-person-active.svg";
import unActivePercentagePerson from "@/public/icons/percentage-person-unactive.svg";
import activeHouses from "@/public/icons/houses-active.svg";
import unActiveHouses from "@/public/icons/houses-unactive.svg";
import {useModule} from "@/app/context/ModuleContext";
import {useState} from "react";

export default function ModuleThree() {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const {setModuleContext, count} = useModule();

    const moduleCongrats = {title: "module three", value: 3, text : "How to Negotiate Your Purchase Agreement",};
    const moduleIntro = {
        text: "Navigating the negotiation process of an offer as an unrepresented buyer can sometimes be challenging. We went through a lot of the aspects of the purchase agreement in the last module, but it is important to focus a little more on the planning of your offer and the expectations of the negotiations that follow the initial offer and the contingencies you work through. Once we go through this module in more detail, it should help you be more confident in the steps you will take to prep for a good offer.",
        text1: "Let’s start with preparation to make an offer. What can you do to increase your likelihood of getting your offer accepted? Here are some broad-based focus points you can use to put yourself and your offer in the best position.",
    };
    const moduleData = [
        {
            heading: "Extra On Negotiating Your Purchase Agreement",
            unactiveIcon: unactiveCard,
            activeIcon: activeCard,
            content: {
                orderList: [
                    {
                        title: "Do your Homework ",
                        text: "– This always sounds simple and expected when buying a home, but many people get so excited to make the offer they do not do enough initial homework on the property to make sure it is the best property for them.",
                        text1: "One of the best things you can do for “homework” is look at other real estate that is for sale or is under contract around the property you want to offer on. You can do this on any of the online property search websites with just a little time and effort. Look at these comparable properties (focusing on properties that are of similar square footage, have similar number of bedrooms and bathrooms, are of similar age, similar garage stalls, etc. to the property you wish to offer on). This will help you get a good guide on if the approximate asking price of the property you like is accurate. If or when you have an appraisal done, it will verify this information for you during your under-contract timeframe, but doing your research up front can alleviate issues for you later.",
                        text2: "Another homework item, which we already discussed, is getting your pre-approval all set and ready if you need a mortgage. We don’t need to beat this conversation down too much more, but having this set up and talking to your loan officer about the property payments, the property as collateral, and other pieces prior to your offer can make sure you are in the financial spot you want to be in.",
                    },
                    {
                        title: "Try to Understand the Seller’s Motivation ",
                        text: "– You will be working with the seller or seller’s agent throughout the process of buying the home. If you can talk with the seller or the seller’s real estate agent prior to deciding to offer on the home, you can get a good idea of what the seller needs to put a deal together. The seller is a human, just like you, and they will have important needs, wants, and dislikes built into their expectations of selling their home. Feel free to ask the seller or the seller’s agent to coffee and ask what matters to the seller most. You might think that price is the only factor, but often, as long as the seller receives a good offer, they may be open to helping you with your needs also. This can open the door for conversations around seller paid closing costs or other pieces to help you lower your monthly payment, total out of pocket costs, or whatever is the biggest need on your side.",
                        text1: "You also need to be prepared to compromise during the offer and the steps to closing. This encompasses both compromising on your initial offer price and on working through the contingencies that you work have during the process. It is unlikely that everything you want in the transaction comes to fruition. You are human and so are the other parties you work with. Compromise will be likely to eventually get the home you want. Though it can often be scary or frustrating, make sure you keep your emotions in check and understand the other sides point of view.",
                    },
                    {
                        title: "Be Clear and Direct with Communication and Very Timely with Follow Up ",
                        text: "– One of the most important things you can do once you begin and move through the purchase process is to communicate effectively and timely. This whole transaction, and the contingencies you negotiated in your offer, are all time sensitive. You have a completion date for everything and if you don’t follow through on time, you could void the contract and lose the home (and your earnest money). We will provide a checklist in later modules for you to use and make sure you are taking care of the big pieces, on time.",
                    },
                    {
                        title: "Be Prepared to Walk Away from The Purchase ",
                        text: "– Though it is never a happy thought, you need to have it in the back of your mind that if something comes up on one of the contingencies that puts you in a bad position, it may be that the best option is to no longer pursue the purchase of the property. Some properties will end up showing that they have major issues that cannot be remedied easily by the seller or by you. If those major issues will be passed on to you when you purchase the home, and they could cause some major financial setbacks for you and your family, it could be best to cancel the purchase agreement. Make sure you understand your rights to withdraw from a home purchase by understanding what terms you are putting on the purchase agreement and use that to find a home that will be a better fit.",
                    },
                    {
                        title: "Final, Quick Notes for This Section ",
                        text: "– Remember, the key to a successful negotiation is preparation and maintaining a balance between assertiveness and flexibility. Being unrepresented means, you'll need to manage these negotiations yourself, so it's crucial to stay informed and organized throughout the process. If issues come up and you are not working with a real estate agent, another option could be to talk with a real estate attorney in your local area. There could be costs associated with getting their guidance and help, but having a third party advise you on the legal aspects of the contract could help you get out of a tough situation or prevent one from happening. If you feel extra help could be desired, do not delay reaching out to a real estate attorney or others to make sure you keep yourself protected.",
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
                            question: "True or False: Building rapport with the seller and seller’s agent can be a good idea to help smooth out the negotiations that take place during a purchase transaction?",
                            options: ["True", "False"],
                            correctOption: 1,
                            reason: "negotiations with someone you know a little bit are often easier than negotiations with someone you do not know at all. You don’t want to give away unnecessary information to the seller or seller’s agent, but understanding the seller’s goals and helping the seller understand your most important needs with your offer can help smooth out the transaction.",
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
                            question: "If you are not working with a real estate agent, who else may be a good contact to reach out to for help with the process or negotiations.",
                            options: [
                                {
                                    title: "A",
                                    optionActiveIcon: activeBookGear,
                                    optionUnActiveIcon: unActiveBookGear,
                                    optionText: "Your Mortgage Loan Officer"
                                },
                                {
                                    title: "B",
                                    optionActiveIcon: activeHandShake,
                                    optionUnActiveIcon: unActiveHandShake,
                                    optionText: "A Real Estate Attorney"
                                },
                                {
                                    title: "C",
                                    optionActiveIcon: activePercentagePerson,
                                    optionUnActiveIcon: unActivePercentagePerson,
                                    optionText: "The Title Company or Closing Attorney"
                                },
                                {
                                    title: "D",
                                    optionActiveIcon: activeHouses,
                                    optionUnActiveIcon: unActiveHouses,
                                    optionText: "All of the Above"
                                },
                            ],
                            correctOption: 4,
                            reason: "All of the Above. You have professions around you that likely are part of different components of you potential purchase, such as your loan officer and the closing company the transaction will close through. You also can reach out to a real estate attorney for representation or guidance. Do not try to do everything on your own.  Use the resources that are available to you to give you the highest likelihood of success.",
                        },
                    ],
                },
            },
        },
    ];

    function handleNavigate() {
        if (count >= 3) {
            setModuleContext({moduleCongrats, moduleIntro, moduleData});
            router.push('/dashboard/intro');
        }
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${isExpanded ? "mb-15" : "mb-10"}`}>
            <ModuleHead src={moduleThreeHeadImage} onClick={toggleExpand}>
                <div className="py-1">
                    <p className="mb-2 text-darkLow fw-bold fs-18">Module Three: How to Negotiate Your Purchase
                        Agreement</p>
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
                           className={`${count >= 3 && "cursor-pointer"}`}
                           onClick={handleNavigate}/>
                    <div
                        className="chat-bubble chat-bubble-module-two px-3 py-2 bg-whiteLow position-absolute d-none d-lg-block">
                        <p className="text-darkerGrey fw-normal fs-16 m-0">How to Negotiate Your Purchase Agreement</p>
                    </div>
                    <Image src={bookHolder} alt="girl-gif" width={60} height={100} unoptimized={true}
                           className="position-absolute module-two-gif-position d-none d-lg-block"/>
                </div>
            </div>
        </div>
    )
}
