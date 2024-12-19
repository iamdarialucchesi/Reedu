"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

import {useModule} from "@/app/context/ModuleContext";

import QuizRender from "@/app/dashboard/(modules)/steps/components/QuizRender";
import TitleNameHeader from "@/app/dashboard/components/TitleNameHeader";
import ProgressBar from "@/app/dashboard/components/ProgressBar";
import StepCard from "@/app/dashboard/components/StepCard";
import InnerBodyHeading from "@/app/dashboard/components/InnerBodyHeading";
import InnerBodyText from "@/app/dashboard/components/InnerBodyText";
import BottomButtons from "@/app/dashboard/components/BottomButtons";

import glassesBoy from "@/public/images/Loop5-2.gif";
import hatBoy from "@/public/images/Loop6-1.gif";

export default function StepsPage() {
    const router = useRouter();
    const [activeStep, setActiveStep] = useState(0); //initial active step index
    const [completedSteps, setCompletedSteps] = useState([]); //new array for completed step
    const [selectedAnswer, setSelectedAnswer] = useState(true); //check user select any option
    const [selectedOption, setSelectedOption] = useState(null); //get value of selected option
    const [showModal, setShowModal] = useState(false); //show on wrong answer
    const [showCongrats, setShowCongrats] = useState(false); //show on complete the module
    const {moduleContext} = useModule();

    useEffect(() => {
        if (!moduleContext) {
            router.push('/dashboard');
        }
    }, [moduleContext, router]);

    if (!moduleContext || !moduleContext.moduleIntro) {
        return null;
    }

    const {moduleData: StepData} = moduleContext;
    const totalSteps = StepData.length;
    // console.log(StepData);

    // handle step next
    const handleNextStep = () => {
        if (activeStep < totalSteps - 1) {
            setActiveStep(activeStep + 1);

            if (!completedSteps.includes(activeStep)) {
                setCompletedSteps([...completedSteps, activeStep]);
            }
        }

        if (activeStep === totalSteps - 1) {
            setShowCongrats(true);
        }

        setSelectedOption(null);
        setSelectedAnswer(true);
    };

    // handle step back
    const handleBackStep = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);

            // remove the current step from completed steps array
            if (completedSteps.includes(activeStep)) {
                const newCompletedSteps = completedSteps.filter(step => step !== activeStep);
                setCompletedSteps(newCompletedSteps);
            }
        }

        if (activeStep === 0) {
            handleBackNavigate();
        }

        setSelectedOption(null);
        setSelectedAnswer(true);
    };

    function handleBackNavigate() {
        router.back();
    }

    // calculate progress
    const progressVal = activeStep === 0 ? 0 : ((completedSteps.length / totalSteps) * 100).toFixed(0);

    return (
        <>
            <div className="border-bottom">
                <TitleNameHeader title={moduleContext.moduleCongrats.text} backBtn={true} onClick={handleBackNavigate}/>
            </div>
            <div className="p-3 overflow-hidden">
                <div className="row">
                    <div className="col-md-5 col-xl-4 pe-0">
                        <div className="border px-3 py-2 rounded-3 position-relative z-3 bg-white">

                            {/*left side heading*/}
                            <h5 className="mb-3 fw-bold fs-20 text-darkLow text-uppercase">Steps</h5>

                            {/*progress bar*/}
                            <ProgressBar progressVal={progressVal}/>
                            <div className="mt-3 custom-step-height-70 overflow-y-scroll scrollbar-hidden">

                                {/*step mapping*/}
                                {StepData.map((step, index) => (
                                    <StepCard
                                        key={index}
                                        activeIcon={step.activeIcon}
                                        unActiveIcon={step.unactiveIcon}
                                        text={step.heading}
                                        index={index + 1}
                                        status={
                                            index < activeStep
                                                ? "complete"
                                                : index === activeStep
                                                    ? "in progress"
                                                    : "Not complete"
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*right side content*/}
                    <div
                        className="col-md-7 col-xl-8 d-flex flex-column justify-content-between position-relative px-0">
                        <div className="mt-4 mt-md-0 px-3">

                            {/*top heading*/}
                            <InnerBodyHeading>
                                {StepData[activeStep]?.heading}
                            </InnerBodyHeading>

                            {/*condition to check its step or Quiz*/}
                            {(StepData[activeStep].content?.text || StepData[activeStep].content?.orderList || StepData[activeStep].content?.unOrderList) &&
                                <div
                                    className="border rounded-3 mt-3 px-3 custom-step-next-height overflow-y-scroll scrollbar-hidden">
                                    <InnerBodyText>
                                        <p className="my-2">
                                            {StepData[activeStep]?.content?.text} {/* Display active step text */}
                                        </p>
                                        <p className="my-2">
                                            {StepData[activeStep]?.content?.text1} {/* Display active step text */}
                                        </p>
                                        {StepData[activeStep].content?.orderList &&
                                            <ol className="px-3">
                                                {StepData[activeStep]?.content?.orderList?.map((item, index) => (
                                                    <li className="mb-2" key={index}>
                                                        {typeof item === "string" ? (
                                                            item
                                                        ) : (
                                                            <>
                                                                <span className="fw-bold">{item.title}</span>
                                                                <span>{item.text}</span>
                                                                <p className="my-2 ms-n15">{item?.text1}</p>
                                                                <p className="ms-n15">{item?.text2}</p>
                                                            </>
                                                        )}
                                                    </li>
                                                ))}
                                            </ol>
                                        }

                                        {StepData[activeStep].content?.unOrderList &&
                                            <ul className="p-0">
                                                {StepData[activeStep]?.content?.unOrderList?.map((item, index) => (
                                                    <li className="mb-2" key={index}>
                                                        {typeof item === "string" ? (
                                                            item
                                                        ) : (
                                                            <>
                                                                <span className="fw-bold">{item?.title}</span>
                                                                <span>{item?.text}</span>
                                                            </>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        }

                                        {StepData[activeStep].content?.bottomOrderList &&
                                            <ol className="px-3">
                                                {StepData[activeStep]?.content?.bottomOrderList?.map((item, index) => (
                                                    <li className="mb-2" key={index}>
                                                        {typeof item === "string" ? (
                                                            item
                                                        ) : (
                                                            <>
                                                                <span className="fw-bold">{item.title}</span>
                                                                <span>{item.text}</span>
                                                                <p className="my-2 ms-n15">{item?.text1}</p>
                                                                <p className="ms-n15">{item?.text2}</p>
                                                            </>
                                                        )}
                                                    </li>
                                                ))}
                                            </ol>
                                        }

                                        {StepData[activeStep]?.content?.bottomText &&
                                            StepData[activeStep]?.content?.bottomText.map((item, index) => (
                                                <p className="mb-2" key={index}>
                                                    {item}
                                                </p>
                                            ))
                                        }
                                    </InnerBodyText>
                                </div>
                            }

                            {/*quiz content*/}
                            {StepData[activeStep].content?.questions &&
                                <div className="px-1 mt-3">
                                    <p className="m-0 fw-bold text-darkLow">Your Lifelines</p>
                                    <ProgressBar lifeline={5}/>
                                    <QuizRender questions={StepData[activeStep].content?.questions?.quiz}
                                                selectedAnswer={selectedAnswer}
                                                setSelectedAnswer={setSelectedAnswer}
                                                setSelectedOption={setSelectedOption}
                                                selectedOption={selectedOption} handleNextStep={handleNextStep}
                                                handleBackStep={handleBackStep} showModal={showModal}
                                                setShowModal={setShowModal} showCongrats={showCongrats}
                                                setShowCongrats={setShowCongrats}/>
                                </div>
                            }
                        </div>

                        {/*next & back btn*/}
                        {(StepData[activeStep].content?.text || StepData[activeStep].content?.list || StepData[activeStep].content?.unOrderList || StepData[activeStep].content?.orderList) &&
                            <BottomButtons handleNextStep={handleNextStep} onClick={handleBackStep}/>
                        }

                        {/*display the image on condition*/}
                        {StepData[activeStep].content?.text &&
                            <>
                                <Image src={glassesBoy} alt="glasses-kid" width={70} height={130}
                                       className="position-absolute step-section-text-gif-position-1"
                                       unoptimized={true}/>
                                <Image src={hatBoy} alt="glasses-kid" width={80} height={130}
                                       className="position-absolute step-section-text-gif-position-2"
                                       unoptimized={true}/>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
