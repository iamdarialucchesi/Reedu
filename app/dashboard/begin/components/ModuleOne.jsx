"use client";
import Image from "next/image";
import {useRouter} from 'next/navigation';

import {useModule} from "@/app/context/ModuleContext";
import ModuleHead from "@/app/dashboard/begin/components/ModuleHead";

import moduleOneHeadImage from "@/public/images/module-one-small.png";
import clickToStart from "@/public/icons/click-to-start-btn.svg";
import girlGif from "@/public/images/hero-house-girl.gif";
import docCheck from "@/public/icons/doc-check-unactive.svg";
import docCheckActive from "@/public/icons/doc-check-active.svg";
import unactiveCard from "@/public/icons/unactive-card.svg";
import activeCard from "@/public/icons/active-card.svg";
import unactiveQuiz from "@/public/icons/unactive-quiz.svg";
import activeQuiz from "@/public/icons/active-quiz.svg";
import unactiveDollor from "@/public/icons/unactive-dollor.svg";
import activeDollor from "@/public/icons/active-dollor.svg";
import unActiveBalance from "@/public/icons/balance-unactive.svg";
import activeBalance from "@/public/icons/balance-active.svg";
import activeBookGear from "@/public/icons/book-gear-active.svg";
import unActiveBookGear from "@/public/icons/book-gear-unactive.svg";
import activeHandShake from "@/public/icons/hand-shake-active.svg";
import unActiveHandShake from "@/public/icons/hand-shake-unactive.svg";
import activePercentagePerson from "@/public/icons/percentage-person-active.svg";
import unActivePercentagePerson from "@/public/icons/percentage-person-unactive.svg";
import activeHouses from "@/public/icons/houses-active.svg";
import unActiveHouses from "@/public/icons/houses-unactive.svg";
import unActivePercentHouse from "@/public/icons/house-percent-unactive.svg";
import activePercentHouse from "@/public/icons/house-percent-active.svg";
import capitalIcon from "@/public/icons/capital-icon.svg";
import checkDollorIcon from "@/public/icons/check-dollor-house.svg";
import capacityIcon from "@/public/icons/heat-waves.svg";
import costIcon from "@/public/icons/beg-of-money.svg";
import {useState} from "react";

export default function ModuleOne() {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const {setModuleContext} = useModule();

    const moduleCongrats = {
        title: "module one",
        value: 1,
        text: "Do you have an approval?",
    };
    const moduleIntro = {
        text: "Many steps come with the home buying process, and this can seem daunting to people that have to go through these steps, even if they have purchased a home in the past. It really can be pretty simple, once you know how the total picture looks and how to move through the steps easily and quickly. In total, it comes down to:",
        list: [
            "Qualifying to purchase.",
            "Finding a home you desire.",
            "Negotiating the purchase.",
            "Finalizing the steps for closing.",
        ],
        text1: "If you choose to work with a real estate agent (and you work with a mortgage loan officer for a mortgage), much of the process will be done for you by those professionals, with your guidance. If you wish to purchase a home without a real estate agent, then you just need to know what steps you oversee in the process that otherwise would have been done on your behalf by the real estate agent.",
        text2: "Let’s go through some of the pieces we will teach you in this first module, so you can picture the process with more ease. Here is a quick checklist for you to start with:",
        list1: [
            "Benefits of Owning a home",
            "Understanding Numbers and Mortgage Programs",
            "Getting Pre-Approved to Purchase a Home",
            "How to Find a Great Loan Officer to Work With.",
        ],
    };
    const moduleData = [
        {
            heading: "Benefits of Owning a Home",
            unactiveIcon: docCheck,
            activeIcon: docCheckActive,
            content: {
                text: "This topic is going to be short and sweet, because you already know many of the benefits, which is why you are getting this information on buying a home. But there are many more reasons to own a home than most people realize, and we thought we will help you see some of the bigger benefits of homeownership for yourself and your family. Either way, let’s start simply and go from there.",
                orderList: [
                    "If you buy a home, it’s yours! – Though there are guidelines of what you can and cannot do with the property (created and watched over by the mortgage company, the local governments, and others) you can largely live in the home as you see fit. If you wish to paint, own pets, build a garden, create a game room, have a pool, and more, you likely can do so. You can take pride with your home and make it your own without a landlord having the final word.",
                    "If you buy a home, you benefit from the equity you build in it. Equity is the amount of the home that you own, after subtracting out the mortgage. This ownership percentage grows over time. When you own a home, you gain more equity (or ownership) by paying down the mortgage balance, and by having the home grow in value over the years. For example, if you own a home for 8 years that you bought for $400,000, had the home increase in value 4% a year on average, and you had a 30-year mortgage at 6% fixed interest rate, you would gain $147,428 in home value growth and $48,911 in equity from paying down the mortgage balance (minimum payments only) during that time (starting loan amount also at $400,000). So, with this example, you would gain $196,339 in wealth through equity during that period. You will have expenses for owning the home that need to be considered in what you make from the property, in total, but you can benefit from building a nice amount of wealth with the home.",
                    "If you buy a home, you benefit from the equity you build in it. Equity is the amount of the home that you own, after subtracting out the mortgage. This ownership percentage grows over time. When you own a home, you gain more equity (or ownership) by paying down the mortgage balance, and by having the home grow in value over the years. For example, if you own a home for 8 years that you bought for $400,000, had the home increase in value 4% a year on average, and you had a 30-year mortgage at 6% fixed interest rate, you would gain $147,428 in home value growth and $48,911 in equity from paying down the mortgage balance (minimum payments only) during that time (starting loan amount also at $400,000). So, with this example, you would gain $196,339 in wealth through equity during that period. You will have expenses for owning the home that need to be considered in what you make from the property, in total, but you can benefit from building a nice amount of wealth with the home.",
                ]
            }
        },
        {
            heading: "Have you gone through pre-approval?",
            unactiveIcon: unactiveCard,
            activeIcon: activeCard,
            content: {
                text: "Preapproval for a mortgage is a significant step in the home-buying process. It involves a lender evaluating a potential homebuyer’s financial status to determine their creditworthiness and the amount they are eligible to borrow for a home purchase. If you are lucky enough to have enough cash to purchase a home without a mortgage, congratulations, and you can breeze through this material. If you don’t have hundreds of thousands laying around, make sure you understand this next part well.",
                orderList: [
                    "First, in order to get approved for a mortgage to buy a home, you need to get your information over to a mortgage lending company via their mortgage loan officer. A quick note, it is typically recommended that you apply with at least two different mortgage lending companies so you can compare interest rates, costs, approval ranges, etc. of each. This allows you the opportunity to get yourself the best financial deal and figure out who you like to work with most.",
                    {
                        title: "Submitting an Application:",
                        text: "The approval itself begins with the prospective homebuyer submitting a mortgage preapproval application to a lender and loan officer. This application requires various financial details, including income, assets, debts, etc. to be submitted for starting review. This gives the lender basic data to work up a file for you that likely will put you in position for the best options for qualifying.",
                    },
                    {
                        title: "Documentation collection and review:",
                        text: "After submitting your application, you need to provide documentation to the lender so they can verify what you put in the application is accurate. If the lender does not review the documents in detail, your approval may not be fully accurate, which can cause issues once you are under contract on a home.  Traditionally, documents that may get requested by the loan officer would be. Tax returns, W2s, Pay stubs, Bank statements, Investment/retirement account statements, Other income (social security, child support, etc.) documentation, And more.",
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
                            question: "True or False: When getting approved to purchase a home, most mortgage programs will require 20% down payment?",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "The majority of the programs available to purchase a primary residence will allow small or no down payments. Conventional loans, which often require the largest down payment, likely would only require 5% down.",
                        },
                        {
                            question: "True or False: When fewfgetting approved to purchase a home, most mortgage programs will require 20% down payment?",
                            options: ["True", "False"],
                            correctOption: 1,
                            reason: "The majority of the programssd available to purchase a primary residence will allow small or no down payments. Conventional loans, which often require the largest down payment, likely would only require 5% down.",
                        },
                        {
                            question: "True or False: When gettiewfewng approved to purchase a home, most mortgage programs will require 20% down payment?",
                            options: ["True", "False"],
                            correctOption: 1,
                            reason: "The majority of the programs available to pucrchase a primaryw residence will allow small or no down payments. Conventional loans, which often require the largest down payment, likely would only require 5% down.",
                        },
                    ],
                },
            },
        },
        {
            heading: "Pre-qualification vs Pre-approval",
            unactiveIcon: unactiveDollor,
            activeIcon: activeDollor,
            content: {
                unOrderList: [
                    {
                        title: "Pre-qualification vs Pre-approval: ",
                        text: "Another area that you should pay attention to is the difference between a pre-approval letter and a pre-qualification letter. A Pre-qualification letter usually means that some areas of your information and assessment are still unverified. Maybe they did a credit analysis but did not receive and verify your income documentation, for example. A Pre-Approval letter on the other hand often means that your documentation, credit, etc. has been reviewed and verified. Seller’s and selling real estate agents will want to see a pre-approval letter over a pre-qualification letter so they know there is a lower likelihood of issues arising. You should want the same thing so you know your process to buy the home can be as smooth and stress-free as possible. If the lender does not supply a pre-approval letter, make sure to ask what would be required for full pre-approval and complete that process. This will potentially alleviate a lot of headaches down the line. It is also important to note that pre-approval usually lasts a certain amount of time (60 to 120 days), after which much of the information will need to be collected and reviewed again. So, if it does take you a little while to find and close on a home, expect the lender to ask for updated information, on occasion.",
                    },
                    {
                        title: "Not a Guarantee of Final Approval: ",
                        text: "It is important to note that even Pre-Approval is not a guarantee of final loan approval. The final approval comes after the buyer has chosen a home, is under contract on that home, the property has passed an appraisal, and your credit, income, and assets have been double checked underwriting. The lender will re-verify the buyer’s financial information before finalizing the loan, so make sure you do everything you can to not have any new credit pulls, credit changes, income changes, asset losses, etc. If there is a big enough change for the negative, your approval could be lost.",
                    },
                    "Once you are under contract on a home, you will eventually work with the lender you choose to go with to finalize your rate by “locking” the rate. This just means the lender holds that day’s rate stack for you with your loan amount to make sure your rate won’t change on you before you close. Choosing the rate you want to go with is up to you. Your lender should give you many options for interest rates, and if they do not, it may be a good indication you should consult another lender who will give you the different options.",
                    "Each rate will come with different costs associated with it that are called “Points”. Points are a percentage of the loan amount that you are willing to pay in extra fees in exchange for higher or lower rates. For example, when a loan officer talks about one point, and your loan amount (for example) is $300,000, the loan officer is talking about one percent of the loan, which equals $3,000. Lenders offer different interest rates on loans with different point costs. There are three main choices you can make with points. You can decide you don’t want to pay or receive points at all. This is called a zero-point or “par” loan. You can pay points at closing to receive a lower interest rate, which then means you have the extra fees, or you can choose to have points paid to you (also called lender credits) and use them to cover some of your closing costs.",
                    "Paying points to take a lower interest rate only makes sense when you think you will keep the mortgage in place for a long time (5 or more years) and you can afford to pay more cash at the time of closing. If you take a 30-year mortgage, you may assume you will keep the loan for a long time and so paying points would then make sense. But, on average, most people look for opportunities to refinance their mortgage to lower interest rates, often. People often also upgrade or downgrade their home based on life changes. If these situations may occur (a refinance may be possible soon or you may sell your current home to buy a bigger/smaller one in the not-too-distant future), you may not keep your mortgage long enough to make your money back from paying points. Discuss which option is best with your loan officer to make sure you are not potentially losing money.",
                    {
                        title: "Advantages in Home Buying Process: ",
                        text: "Having a mortgage preapproval letter gives the buyer an edge in the home-buying process. It shows real estate agents and sellers that the buyer is serious and financially capable of purchasing a home. It can also speed up the closing process once a home is chosen because much of the work is already done. And, if we are to be truthful, many real estate agents will encourage their sellers not to accept offers from buyers who do not have a pre-approval letter already available. This can cause you to lose out on the home you desire, especially if the seller receives other offers around the same time as your offer from people who are already pre-approved to buy.",
                    },
                ],
            },
        },
        {
            heading: "How to find a great loan officer and lender",
            unactiveIcon: unActiveBalance,
            activeIcon: activeBalance,
            content: {
                text: "Finding a great loan officer and lender is an essential step in securing a mortgage that suits your needs and budget. Each lender has different costs associated with completing a mortgage through them, along with different processes. On top of that, a good loan officer can guide you through the complex process of obtaining a mortgage effectively, offering advice and options tailored to your situation.",
                text1: "Here are some key steps to find a great loan officer and lender:",
                unOrderList: [
                    {
                        title: "Do Your Own Research: ",
                        text: " There are organizations that track which mortgage lenders and loan officers do the most mortgages in the country. This is a good indication that those companies and loan officers have a large amount of experience and have good processes, otherwise so many other people would likely not use them.",
                    },
                    "To look up the top mortgage lenders in the country, we’d recommend using Scotsman’s Guide, a free source of the top producing lenders and loan officers around the nation.",
                    "To look for the highest producing lenders for 2024 (you can choose different years), here is the link - https://www.scotsmanguide.com/rankings/top-mortgage-lenders/2024-top-overall-lenders/",
                    "To look for top producing loan officers in the country in 2024, here is the link for most closed loans by year- https://www.scotsmanguide.com/rankings/top-originators/2024-most-loans-closed/",
                    "What we like about looking up the loan officers, is you can go to the “search table” button near the top and type in your particular state that you wish to purchase in. That will show you loan officers in your state, and you can look them up to see where they live and work, and choose to contact one that is near you.",
                    {
                        title: "Ask for Referrals: ",
                        text: "Second, ask friends, family, or real estate agents for personal recommendations. Though these recommendations may not be the top ranked people, they still could be loan officers that are good at their jobs and work for good companies. You can compare these recommendations to the top loan officer’s list and see if any of the recommendations are top producing loan officers as well.",
                    },
                    {
                        title: "Check Online Reviews and Ratings: ",
                        text: "Look for online reviews and ratings of loan officers and mortgage lenders. Websites like Zillow, Yelp, and Google can provide insights into experiences other people had. Pay attention to comments about their professionalism, and how smooth the process was while working with them. The loan officer’s website will often also have many reviews you can look into.",
                    },
                    {
                        title: "Evaluate Their Experience and Expertise: ",
                        text: "Inquire about the loan officer’s experience in the industry, especially with your particular type of loan. A loan officer does not need to have 20 years of experience to do a good job for you, but only having 1 or 2 years of experience can be a sign that their experience level is not as high, and you could be in for a bumpier ride. An experienced loan officer is more likely to navigate complex situations with ease, because they have already had to navigate that situation before and know how to handle it.  They also are more likely to not make mistakes up front to give you the best process possible.",
                    },
                    {
                        title: "Assess Their Responsiveness and Communication Skills: ",
                        text: "Pay attention to how quickly a loan officer responds to your inquiries and how clearly they communicate. A great loan officer should be proactive in keeping you informed and confident in the next steps. If you are not getting responses within 24 to 48 hours, it may be time to look for a new loan officer to work with.",
                    },
                    {
                        title: "Look for Transparency and Integrity: ",
                        text: "A good loan officer should be transparent about fees, rates, and the lending process. With the fees and rates you should be asking them to provide you a loan estimate or fee worksheet so you can get a visual of their costs, etc. You can compare this to other lenders if you wish to make sure you are getting a good deal. The loan officer should be willing to explain all aspects of the mortgage in terms you can understand, without pressuring you into a decision. Just remember, until your interest rate is locked in, the lender’s may or may not be showing you perfectly accurate information.",
                    },
                ],
            }
        },
        {
            heading: "Quiz #2",
            unactiveIcon: unactiveQuiz,
            activeIcon: activeQuiz,
            content: {
                questions: {
                    quiz: [
                        {
                            question: "Which of these is not a good way to find a loan officer that is likely to be highly rated and experienced?",
                            options: [
                                {
                                    title: "A",
                                    optionActiveIcon: activeBookGear,
                                    optionUnActiveIcon: unActiveBookGear,
                                    optionText: "Look up the highest ranked loan officers in your state according to their production on the Scotsman’s guide website."
                                },
                                {
                                    title: "B",
                                    optionActiveIcon: activeHandShake,
                                    optionUnActiveIcon: unActiveHandShake,
                                    optionText: "Ask for a number of referrals from real estate agents and other people you know who have purchased a property recently."
                                },
                                {
                                    title: "C",
                                    optionActiveIcon: activePercentagePerson,
                                    optionUnActiveIcon: unActivePercentagePerson,
                                    optionText: "Just go to your bank and ask to talk to a loan officer."
                                },
                                {
                                    title: "D",
                                    optionActiveIcon: activeHouses,
                                    optionUnActiveIcon: unActiveHouses,
                                    optionText: "Read reviews online, via the loan officer’s personal website and google, to see what other people have said about the loan officer’s process and communication."
                                },
                            ],
                            correctOption: 1,
                            reason: "Just because you have accounts with a bank or credit union does not mean you will receive any discounts or better deals for being a long-time customer (most of the time you won’t). On top of that, the bank loan officer you work with could be someone who is inexperienced or could be someone who a few months ago was helping people with vehicle loans and does not have much experience with mortgages yet. Do not work with any loan officer until you have done your research.",
                        },
                    ],
                },
            },
        },
        {
            heading: "You’re ready to look for properties, how do you start?",
            unactiveIcon: unActivePercentHouse,
            activeIcon: activePercentHouse,
            content: {
                text: "Now are you Pre-Approved? Let’s start looking for properties.",
                text1: "Searching for residential properties online has become a standard and efficient way to begin the home-buying process. Here is a guide to help you navigate this process effectively:",
                unOrderList: [
                    {
                        title: "Identify Your Criteria: ",
                        text: "Before starting your search, know what you are looking for and approved to buy. We have already discussed the pre-approval process, so you have some basic guidance on your ranges. But you now need to start looking at factors like location, budget, size (number of bedrooms and bathrooms), type of property (house, condo, townhouse), and any specific features (e.g., garden, garage, proximity to schools or public transport).",
                    },
                    "You can use Real Estate Websites and Apps to help narrow down some of these pieces. There are numerous websites and apps dedicated to real estate listings. Popular options include Zillow, Realtor.com, Redfin, Trulia, Homes.com AND local real estate company sites that are known as the MLS (Multiple Listing Service). These platforms offer extensive listings and allow you to filter your search according to your criteria.",
                    {
                        title: "Set Up Property Alerts: ",
                        text: "Most real estate websites allow you to set up alerts for new listings that meet your criteria. This feature can help you stay up to date with the latest properties on the market that have what you are looking for.",
                    },
                    {
                        title: "Go to Open Houses: ",
                        text: "Traditional weekends will have Open Houses that are specialty times where the property owner and listing agent set up the opportunity for the public to come and view the home, in-person. You can go on site and see how the home is set up, how it feels to be in the home, what updates and changes you may wish to make to the home. It also allows you to understand what the pictures on the websites don’t show you, good or bad.",
                    },
                    {
                        title: "Explore Google Maps: ",
                        text: "Google Maps can be a useful tool for getting a sense of the neighborhood. You can check the proximity to amenities like schools, grocery stores, parks, and public transportation and see how other neighborhoods are kept up.",
                    },
                    {
                        title: "Utilize social media and Online Forums: ",
                        text: "Social media platforms and online forums can be useful for finding listings and getting insights from local residents. Facebook groups, local community forums, and platforms like Next door can be helpful to gain new insights and knowledge.",
                    },
                    {
                        title: "Review Virtual Tours and Photos: ",
                        text: "Take advantage of virtual tours and detailed photos to get a better feel for the property. This can save time by helping you decide which properties are worth visiting in person.",
                    },
                    {
                        title: "Research the Neighborhood: ",
                        text: "Look into the neighborhoods you are considering. Websites like City-Data and Neighborhood Scout provide information on demographics, crime rates, schools, and community amenities.",
                    },
                    {
                        title: "Be Wary of Scams: ",
                        text: "Be cautious of listings that seem too good to be true, and never provide personal information or require payments before verifying the legitimacy of the listing and meeting the agent or landlord.",
                    },
                    {
                        title: "Keep Notes and Organize Your Findings: ",
                        text: "Keep track of the properties you are interested in. Organize your findings by creating a list or a spreadsheet, noting the pros and cons of each property. Remember to take your time. Don’t rush into buying the first house you see! There are plenty of options out there if you take your time. This is a big purchase. Find what is best for you.",
                    },
                    {
                        title: "How to set up a showing: ",
                        text: "Outside of the open house note earlier, one of the big risks of only looking at homes online is that you do not get a true feel and depiction of the home from photos, etc. Much can be left out, for good or bad, with pictures and seeing the home in person will be a large test of how much you like it.",
                    },
                    {
                        title: "Find the Contact Information of the listing agent: ",
                        text: "The listing should have contact information for the listing agent or the seller. This is typically found on the online listing on the agent’s real estate websites or in yard signs for properties. You will want to be sure to ignore the ads for Buyer’s Agents and many of the websites you look at homes through will actually try to trick you into calling buyer’s agents that pay the website to be put at the top of the list of contacts on that website.",
                    },
                    "If you are using an online website, you can double check the Listing Agent’s information on the local MLS (Multiple Listing Service) for your area, or on the sign in front of the home. If it is a For Sale By Owner, typically the phone number or email address provided will belong to the Seller. Be cautious, there are a LOT of ads for agents and scams!",
                    {
                        title: "Reach Out Professionally: ",
                        text: "Make your initial contact professional and to the point. You can do this via phone call, email, or sometimes through an online form on the listing page. Introduce yourself, express your interest in the property, request a viewing and ask for other documents specific to the property. Most of the time there will be seller disclosure documents that the agent and seller will provide to give you more information on the home. Getting these before your viewing of the home can help you have expectations of the property and a potential offer, up front.",
                    },
                    {
                        title: "Reach Out Professionally: ",
                        text: "Make your initial contact professional and to the point. You can do this via phone call, email, or sometimes through an online form on the listing page. Introduce yourself, express your interest in the property, request a viewing and ask for other documents specific to the property. Most of the time there will be seller disclosure documents that the agent and seller will provide to give you more information on the home. Getting these before your viewing of the home can help you have expectations of the property and a potential offer, up front.",
                    },
                    {
                        title: "Propose Specific Times: ",
                        text: "When you reach out, propose specific dates and times for the showing. This demonstrates seriousness and makes it easier to schedule. Be flexible, as the seller or agent may suggest alternative times.",
                    },
                ],
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
                            question: "True or False: To view a home that is for sale or to look at other homes for sale, you have to sign paperwork with the listing agent of the home or another real estate agent first?",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "The majority of the programs available to purchase a primary residence will allow small or no down payments. Conventional loans, which often require the largest down payment, likely would only require 5% down.",
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
                            question: "True or False: When a lender calculates your debt-to-income ratio, they divide your current minimum monthly debt payments for credit cards, student loans, car loans, and others, plus the new mortgage payment, by your net, take-home, income?",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "Your gross income is used in the calculation, not your net income. The lender will give you credit for your total income.",
                        },
                        {
                            question: "True or False: When working on my pre-approval, I only really need to get the loan officer my documents and application so they can pre-approve me. I don’t need to do much research after that.",
                            options: ["True", "False"],
                            correctOption: 2,
                            reason: "If all you receive from your loan officer is if you are approved and for what range, you have very little information to make sure you are in the best position. You need to have the loan officer review, IN DETAIL, what their fees are (so you can compare to other companies) and what the total closing costs of the mortgage process look like, what example interest rates are and why, what your example payment would be, where your credit scores are, how much your down payment would be and how much you may need to bring to closing of your own money, and why they approved you for that particular loan over other programs. Knowledge is power to make sure you are moving forward on this purchase knowing all the important information to make a good choice.",
                        },
                        {
                            question: "Which is not one of the 4 C’s of lending?",
                            options: [
                                {
                                    title: "A",
                                    icon: capitalIcon,
                                    optionText: "Capital"
                                },
                                {
                                    title: "B",
                                    icon: checkDollorIcon,
                                    optionText: "Collateral"
                                },
                                {
                                    title: "C",
                                    icon: capacityIcon,
                                    optionText: "Capacity"
                                },
                                {
                                    title: "D",
                                    icon: costIcon,
                                    optionText: "Cost"
                                },
                            ],
                            correctOption: 4,
                            reason: "Cost is important for you with your mortgage but Capital, Collateral, Capacity, and Credit are the 4 C’s.",
                        },
                        {
                            question: "True or False: A 740 credit score would be looked at as a good credit score to qualify for a home?",
                            options: ["True", "False"],
                            correctOption: 1,
                            reason: "Credit scores that are 720 and above are often looked at as high credit scores and will lead to easier mortgage approvals.",
                        },
                        {
                            question: "Which option below would likely improve your credit scores the quickest?",
                            options: [
                                {
                                    title: "A",
                                    optionActiveIcon: activeBookGear,
                                    optionUnActiveIcon: unActiveBookGear,
                                    optionText: "Look up the highest ranked loan officers in your state according to their production on the Scotsman’s guide website."
                                },
                                {
                                    title: "B",
                                    optionActiveIcon: activeHandShake,
                                    optionUnActiveIcon: unActiveHandShake,
                                    optionText: "Ask for a number of referrals from real estate agents and other people you know who have purchased a property recently."
                                },
                                {
                                    title: "C",
                                    optionActiveIcon: activePercentagePerson,
                                    optionUnActiveIcon: unActivePercentagePerson,
                                    optionText: "Just go to your bank and ask to talk to a loan officer."
                                },
                                {
                                    title: "D",
                                    optionActiveIcon: activeHouses,
                                    optionUnActiveIcon: unActiveHouses,
                                    optionText: "Read reviews online, via the loan officer’s personal website and google, to see what other people have said about the loan officer’s process and communication."
                                },
                            ],
                            correctOption: 4,
                            reason: "Taking out a new loan and not using credit at all for a long time could decrease your scores. Paying off a car loan, though it may not hurt your credit, likely will not improve your credit either because you lose credit activity. But your revolving debt utilization makes up about 30% of your FICO credit scores and paying down the balances to low levels can have a quick improvement to your scores.",
                        },
                    ],
                },
            },
        },
    ];

    function handleNavigate() {
        setModuleContext({moduleIntro, moduleData, moduleCongrats});
        router.push('/dashboard/intro');
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${isExpanded ? "mb-15" : "mb-10"}`}>
            <ModuleHead src={moduleOneHeadImage} onClick={toggleExpand}>
                <div>
                    <p className="mb-2 text-darkLow fw-bold fs-18 lh-sm">
                        Module One: So, You Decided to Purchase a Home (or real estate in general)! What should you do
                        now?
                    </p>
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
                    <Image src={clickToStart} alt="click-to-start" height={90} width={90} className="cursor-pointer"
                           onClick={handleNavigate}/>
                    <div
                        className="chat-bubble chat-bubble-module-one px-3 py-2 bg-whiteLow position-absolute d-none d-lg-block">
                        <p className="text-darkerGrey fw-normal fs-16 m-0">Do you have an approval?</p>
                    </div>
                    <Image src={girlGif} alt="girl-gif" width={100} height={180} unoptimized={true}
                           className="position-absolute module-one-gif-position d-none d-lg-block"/>
                </div>
            </div>
        </div>
    )
}
