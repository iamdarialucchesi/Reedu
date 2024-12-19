"use client";
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";

import ModuleHead from "@/app/dashboard/begin/components/ModuleHead";
import {useModule} from "@/app/context/ModuleContext";

import moduleFiveHeadImage from "@/public/images/old-lady-picture.png";
import clickToStart from "@/public/icons/click-to-start-btn.svg";
import confuesBookHolder from "@/public/images/confues-book-holder.png";
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

export default function ModuleFive() {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const {setModuleContext, count} = useModule();

    const moduleCongrats = {title: "module five", value: 5, text: "Now You are Under Contract "};
    const moduleIntro = {
        text: "You now have the important steps to take after you are under contract on a home purchase, and now we need to cover more of the details and the nuances of what the home inspection will show you, along with going into unique aspects that you may see while purchasing property. In this module, we will deep dive into home inspections, along with thorough conversations on “Home Owner’s Associations”, also known as “HOAs”, and flood insurance (if either are part of owning the home you are looking at).",
    };
    const moduleData = [
        {
            heading: "Finding a Home Inspector",
            unactiveIcon: unactiveCard,
            activeIcon: activeCard,
            content: {
                text: "Finding a good home inspector is crucial to your home buying process (if you are having a home inspection completed as part of the purchase). A home inspection can give you comfort and peace of mind that the home you are buying is likely safe and should come with low future maintenance costs. Or it can reveal important details about the property that you want to make sure you get more information on before you proceed with your purchase. Home inspections have caught issues with properties that could have cost a potential buyer tens of thousands or hundreds of thousands of dollars on more than a few occasions, so they can definitely be worth the cost.",
                text1: "But how should you find good home inspectors in your area (yes, we said home inspectors as you likely want to interview a few)?",
                orderList: [
                    {
                        title: "Ask for referrals ",
                        text: "- As with most recommendations, the best place to start can be to ask other people you know who have purchased a home. If they would rate their home inspector an 8 out of 10 or higher, that home inspector likely did a pretty good job. Below that range of rating, it probably would be likely to continue looking at other recommendations. So, ask around. We are sure you can find someone else you know who has bought a home.",
                    },
                    {
                        title: "Look online and read reviews ",
                        text: "– Most home inspectors will have their business listed online. From there, you should be able to find others who have used them and who have left reviews and ratings of the work the inspector performed. True to looking online for other information, many reviews with high ratings likely gives some trustworthiness to the home inspector and their quality of work.",
                    },
                    {
                        title: "Talk with others in the real estate industry ",
                        text: "– for extra knowledge, feel free to ask the listing agent of the property (if there is one), the loan officer you use (if you use a mortgage), and the title company or closing attorney that the transaction will close through. These individuals are working in the real estate industry every day and have likely heard names of inspectors that have done a good job for others in the past.",
                    },
                ],
            },
        },
        {
            heading: "Reviewing a Home Inspection and Negotiating with the Seller",
            unactiveIcon: unactiveCard,
            activeIcon: activeCard,
            content: {
                text: "Once you have narrowed down the home inspector you want to use and they have completed the inspection of the property, it is time to review the inspection report they provide you. Let’s dive into some best practices when going through the inspection report.",
                orderList: [
                    {
                        title: "Understand and break out major concerns vs minor concerns ",
                        text: "– the home inspection report will likely have a lot of details broken out on recommendations for updates and repairs on the property, especially if the property is not a brand-new construction. As the potential buyer, you need to decipher which of the listed recommendations by the inspector are actually safety concerns and which are just recommendations for work that could or should eventually be completed while you are owner of the home. Minor recommendations such as eventually upgrading a few outlets to have ground fault protection (GFCI outlets) near sinks or extending downspouts in certain areas of the exterior to prevent the likelihood that water will be near the property’s foundation are all recommendations that you can easily remedy, for little cost, while you own the home over the next number of years. Major recommendations such as having a foundation repair company come and inspect the home’s foundation or having a roofing company come and inspect potential damage on the home’s roof, should be focused on right away.",
                    },
                    {
                        title: "Call the Home Inspector with Questions ",
                        text: "– If you did not attend the inspection with the home inspector, or just have further questions about the inspector’s findings or recommendations, call and review everything with the inspector. For added safety, probe the home inspector about the home and the inspection notes. For instance, good questions for the inspector (once you have the report) could be: A. Could you explain the major issues you found? B. Are any of the major issues safety issues? C. If you were going to buy the property, what would your biggest concerns be? D. How urgent are the repairs you notate? E. What might some potential costs be to fix the urgent or safety issues? F. Does anything require that I get a specialist involved, quickly? If so, who would you recommend? G. Are these issues common in homes like the one I am buying?",
                    },
                ],
                bottomText: [
                    "Remember, the goal of this report, and the questions you ask the home inspector, is to help you understand the current condition of the property and gauge any future costs that you could have in your ownership. Protect yourself and ask the inspector any questions you have. A good home inspector will be happy to help.",
                    "One quick note. No matter what you find on your home inspection, if an appraisal is required to purchase the property (by you or by a lender), any requirements for repairs that the appraiser notates will have to be fixed by the seller (or by you) if you use a mortgage to buy the home. This is regardless of whether you require them to be fixed by the seller or not. The appraiser will do his or her own inspection of the property, so keep that in mind because there could be repair requirements required by the appraiser potentially, as well.",
                    "Once you review the inspection report and ask any questions you have, you are now ready to have a secondary negotiation with the seller, if there are any major concerns with the property.",
                    "You would do this by submitting a contingency removal form to the seller or the seller’s agent. The form simply states that the home inspection contingency can be removed from the purchase agreement if certain requirements, defined by you in the form, are met. This could include certain repairs, or more time for the home inspection process to allow for a specialist to inspect the concerns of the property. The seller can either agree to the requirements or they can disagree. Most of the time, the sellers will only truly disagree if the buyer’s requirements are too extreme. For instance, if you request every little recommendation of the home inspector to be fixed by the seller, regardless of those recommendations needing to be done right away or not, the seller will likely quickly decline your requests. Just like in your initial offer, you will likely need to be flexible with your requests to help the transaction continue moving forward. So, picking the items that are of actual concern and leaving the little items to be done over the years you own the home is a good tactic.",
                ],
            },
        },
        {
            heading: "Understanding HOAs and Flood Insurance",
            unactiveIcon: unactiveCard,
            activeIcon: activeCard,
            content: {
                text: "Certain properties will have extra requirements and costs that accompany the location and building of the home. Most of the time, these pieces will not be required, but certain areas of the country will have them more frequently.",
                unOrderList: [
                    "The two most common are “Homeowner’s Associations” and flood insurance (or other specialty insurances). If you look to purchase a property that has these different aspects of owning the property, it is good to know a little bit about them before moving forward on the home.",
                    {
                        title: "HOAs",
                    },
                    "Most of us want to buy a home and use it how we want to, but in many neighborhoods around the country there are neighborhood associations that set requirements for what property owners can do to or with their property. These associations are aptly named “Homeowner’s Associations”, and you will commonly see them in residential communities, especially with condominiums, townhomes, and Planned Neighborhood Developments (PUDs). These HOAs are both helpful and irritating depending on the person who lives in areas under an HOA.",
                    "The positives that come with an HOA:",
                    "Even though we don’t often like people telling us what we can and cannot do, there are positives with living in an HOA area."
                ],
                bottomOrderList: [
                    "There are people monitoring the neighborhood and working to prevent the likelihood that the homes in that area could be negatively impacted by the poor choices of a single homeowner or two. We have all seen the homes where people who live in the home decide to park their vehicles in the front yard or do some other action that regularly brings down the appearance of the neighborhood. In most HOA areas, there are rules against such practices for the protection of the neighborhood. If you happen to be one of the people that like to park your car in your front yard, a home in an HOA area may not be for you. If you enjoy fairly strict rules that keep the neighborhood in check, it might be perfect. ",
                    "Many of the HOAs cover and pay of extra services of you live in the areas covered under the HOA. For instance, an HOA area may have a community pool or playground that is paid for and kept up by the HOA. The HOA may also cover certain insurances for the exterior of your property or may have snow removal, road maintenance, and yard mowing/maintenance as part of what is covered by the HOA costs. If you have young kids that can benefit from the pool over the summers, or you are older or someone who doesn’t enjoy shoveling/mowing, etc. you could benefit from these extra services.",
                ],
            },
        },
        {
            heading: "Test",
            unactiveIcon: unactiveQuiz,
            activeIcon: activeQuiz,
            content: {
                questions: {
                    quiz: [
                        {
                            question: "True or False: It is inappropriate for you to be at the property while the home inspector is there doing their inspection?",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "It is not only appropriate for you to attend the inspection with the home inspector, but also encouraged by this educational program. The more you can see and understand, in person, the better you will understand what pieces really matter and what you can do as a homeowner to fix other pieces that are not urgent to take care of.",
                        },
                        {
                            question: "True or False: Everything that is put in the home inspector report needs to be fixed by the seller in order for you to safely own the property?",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "The home inspector is likely going to be very thorough in their report, but many of the pieces they find and point out will be pieces that are unlikely to cause you financial hardships or tons of work. Most can be taken care of easily during the timeframe that you own the home. It doesn’t mean they should be ignored, but trying to get the seller to fix every little thing on the report is not necessary and should not be an expected result.",
                        },
                        {
                            question: "True or False: It is not necessary for every home to have flood insurance protection on the property.",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "The home inspector is likely going to be very thorough in their report, but many of the pieces they find and point out will be pieces that are unlikely to cause you financial hardships or tons of work. Most can be taken care of easily during the timeframe that you own the home. It doesn’t mean they should be ignored, but trying to get the seller to fix every little thing on the report is not necessary and should not be an expected result.",
                        },
                        {
                            question: "What is an HOA?",
                            options: [
                                {
                                    title: "A",
                                    optionActiveIcon: activeBookGear,
                                    optionUnActiveIcon: unActiveBookGear,
                                    optionText: "High Operation Aircraft"
                                },
                                {
                                    title: "B",
                                    optionActiveIcon: activeHandShake,
                                    optionUnActiveIcon: unActiveHandShake,
                                    optionText: "Hysterically Old Adult"
                                },
                                {
                                    title: "C",
                                    optionActiveIcon: activePercentagePerson,
                                    optionUnActiveIcon: unActivePercentagePerson,
                                    optionText: "Homeowner’s Association"
                                },
                                {
                                    title: "D",
                                    optionActiveIcon: activeHouses,
                                    optionUnActiveIcon: unActiveHouses,
                                    optionText: "Hypnotherapy Operating Association"
                                },
                            ],
                            correctOption: 3,
                            reason: "Hopefully you can figure out this one without a long explanation. Maybe it is also a Hysterically Old Adult also.",
                        },
                    ],
                },
            },
        },
    ];

    function handleNavigate() {
        if (count >= 5) {
            setModuleContext({moduleCongrats, moduleIntro, moduleData});
            router.push('/dashboard/intro');
        }
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${isExpanded ? "mb-15" : "mb-10"}`}>
            <ModuleHead src={moduleFiveHeadImage} onClick={toggleExpand}>
                <div className="py-1">
                    <p className="mb-2 text-darkLow fw-bold fs-18">Module Five: Inspections and Repairs</p>
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
                           className={`${count >= 5 && "cursor-pointer"}`}
                           onClick={handleNavigate}/>
                    <div
                        className="chat-bubble chat-bubble-module-two px-3 py-2 bg-whiteLow position-absolute d-none d-lg-block">
                        <p className="text-darkerGrey fw-normal fs-16 m-0">Inspections, Repairs, And Unique Aspects</p>
                    </div>
                    <Image src={confuesBookHolder} alt="girl-gif" width={65} height={100} unoptimized={true}
                           className="position-absolute module-two-gif-position d-none d-lg-block"/>
                </div>
            </div>
        </div>
    )
}
