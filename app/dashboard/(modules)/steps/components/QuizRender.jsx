import {useEffect, useState} from "react";
import Image from "next/image";

import QuizButton from "@/app/dashboard/(modules)/steps/components/QuizButton";
import AnswerModal from "@/app/dashboard/(modules)/steps/components/AnswerModal";
import CongratsModal from "@/app/dashboard/(modules)/steps/components/CongratsModal";

import trueIcon from "@/public/icons/check.svg";
import crossIcon from "@/public/icons/cross.svg";
import {useModule} from "@/app/context/ModuleContext";

export default function QuizRender({
                                       questions,
                                       selectedOption,
                                       setSelectedOption,
                                       setSelectedAnswer,
                                       selectedAnswer,
                                       handleNextStep,
                                       handleBackStep,
                                       setShowModal,
                                       showModal,
                                       setShowCongrats,
                                       showCongrats
                                   }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null); //check is answer is right or wrong
    const [correctAnswer, setCorrectAnswer] = useState(null); //store value of correct answer from data object
    const {moduleContext: {moduleCongrats}} = useModule();

    // console.log("question", questions);
    const lastQuestion = questions?.length;
    const isTrueFalseQuestion = questions[currentQuestionIndex]?.options?.length === 2;
    // console.log("Modal value",showModal);

    useEffect(() => {
        if (showModal) {
            import("bootstrap/dist/js/bootstrap.bundle").then((bootstrap) => {
                const modalElement = document.getElementById("quizModal");
                if (modalElement) {
                    const modal = new bootstrap.Modal(modalElement);
                    modal.show();
                }
            });
        }

        if (showCongrats) {
            import("bootstrap/dist/js/bootstrap.bundle").then((bootstrap) => {
                const modalElement = document.getElementById("congratsModal");
                if (modalElement) {
                    const modal = new bootstrap.Modal(modalElement);
                    modal.show();
                }
            });
        }
    }, [showModal, showCongrats]);

    const handleSelected = (option) => {
        if (isTrueFalseQuestion) {
            setSelectedOption(option);
            setSelectedAnswer(false);
        } else {
            setSelectedOption(option);
            // console.log("else", selectedOption);
            setSelectedAnswer(false);
        }
    };

    // handle quiz question inside step with condition
    const handleNextQuestion = () => {
        const correctOptionIndex = questions[currentQuestionIndex].correctOption - 1;
        // console.log(correctOptionIndex);

        if (selectedOption === questions[currentQuestionIndex].options[correctOptionIndex] || selectedOption === questions[currentQuestionIndex].options[correctOptionIndex].title) {
            setIsCorrectAnswer(true);
            moveToNextQuestion();
        } else {
            setIsCorrectAnswer(false);
            isTrueFalseQuestion ? setCorrectAnswer(questions[currentQuestionIndex].options[correctOptionIndex]) : setCorrectAnswer(questions[currentQuestionIndex].options[correctOptionIndex].title)
            setShowModal(true);
        }
    };

    // show next question
    const moveToNextQuestion = () => {
        if ((currentQuestionIndex + 1) === lastQuestion) {
            handleNextStep();
        }

        if (currentQuestionIndex < questions.length - 1) {
            // console.log("movetoquestion", currentQuestionIndex < questions.length - 1);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsCorrectAnswer("");
            setSelectedOption(null);
            setSelectedAnswer(true);
            setShowModal(false);
            setCorrectAnswer("")
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex === 0) {
            return handleBackStep();
        }

        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption(null);
            setSelectedAnswer(true);
            setShowModal(false);
            setIsCorrectAnswer("");
            setCorrectAnswer("")
        }
    };

    const closeModalAndContinue = () => {
        setShowModal(false);
        moveToNextQuestion();
    };

    let multiOptionType2 = questions[currentQuestionIndex]?.options[0]?.hasOwnProperty("icon");

    // useEffect(() => {
    //     console.log("modal", showModal);
    //     console.log("isCorrectAnswer", isCorrectAnswer);
    //     console.log("correctAnswer", correctAnswer);
    //     console.log("current question", currentQuestionIndex);
    // }, [showModal, isCorrectAnswer, correctAnswer, currentQuestionIndex]);

    return (
        <div className="d-flex flex-column justify-content-between custom-quiz-section-height">
            <div className="my-3 overflow-scroll scrollbar-hidden">
                <p className="fw-bold text-darkLow fs-18">{`#${currentQuestionIndex + 1}`} {questions[currentQuestionIndex]?.question}</p>

                {/* options for the current question */}
                <div className="mt-2">
                    <div className="row">
                        {isTrueFalseQuestion ? (
                            <>
                                <div className="col-6">
                                    <button
                                        className={`btn w-100 border d-flex flex-column justify-content-between align-items-center p-3 rounded-3 ${selectedOption === 'True' ? "bg-whiteLow" : ""}`}
                                        onClick={() => handleSelected(questions[currentQuestionIndex]?.options[0])}>
                                        <p className="fw-bold text-darkLow fs-16">1</p>
                                        <Image src={trueIcon} alt="check icon" width={80} height={80} className="mb-3"/>
                                        <p className="m-0 fw-bold text-darkLow fs-16">{questions[currentQuestionIndex]?.options[0]}</p>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className={`btn w-100 border d-flex flex-column justify-content-between align-items-center p-3 rounded-3 ${selectedOption === 'False' ? "bg-whiteLow" : ""}`}
                                        onClick={() => handleSelected(questions[currentQuestionIndex]?.options[1])}>
                                        <p className="fw-bold text-darkLow fs-16">2</p>
                                        <Image src={crossIcon} alt="cross icon" width={80} height={80}
                                               className="mb-3"/>
                                        <p className="m-0 fw-bold text-darkLow fs-16">{questions[currentQuestionIndex]?.options[1]}</p>
                                    </button>
                                </div>
                            </>
                        ) : (
                            questions[currentQuestionIndex]?.options?.map((option, index) => (
                                <div className={`${multiOptionType2 ? "col-6 col-lg-3 " : "col-12"}`} key={index}>
                                    <div className="mb-3">
                                        <button
                                            className={`btn w-100 border d-flex ${multiOptionType2 ? "flex-column p-3" : "px-3 py-2"} align-items-center rounded-3 gap-3 ${selectedOption === option.title ? "bg-whiteLow" : ""}`}
                                            onClick={() => handleSelected(option.title)}>
                                            <p className={`fw-bold text-darkLow fs-20 ${multiOptionType2 ? "" : "m-0"}`}>{option.title}</p>
                                            {
                                                multiOptionType2 ?
                                                    <Image
                                                        src={option.icon}
                                                        alt={`${option.title} icon`} width={multiOptionType2 ? 70 : 40}
                                                        height={multiOptionType2 ? 70 : 40} className="mb-3"/>
                                                    :
                                                    <Image
                                                        src={selectedOption === option.title ? option.optionActiveIcon : option.optionUnActiveIcon}
                                                        alt={`${option.title} icon`} width={40} height={40}/>
                                            }
                                            <p className="m-0 fw-bold text-darkLow fs-16 text-start">{option.optionText}</p>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <QuizButton selectedAnswer={selectedAnswer} handleNextQuestion={handleNextQuestion}
                        handlePrevQuestion={handlePrevQuestion} showModal={showModal} setShowModal={setShowModal}
                        showCongrats={showCongrats}/>

            {showModal &&
                <AnswerModal correctOption={correctAnswer} reason={questions[currentQuestionIndex].reason}
                             onClose={closeModalAndContinue} handleNextStep={handleNextStep}
                             setIsCorrectAnswer={setIsCorrectAnswer}
                             currentQuestionIndex={currentQuestionIndex} lastQuestion={lastQuestion}
                             quizCheck={isTrueFalseQuestion} setShowModal={setShowModal}/>
            }

            {/*<CongratsModal/>*/}
            {showCongrats &&
                <CongratsModal text={moduleCongrats} setShowCongrats={setShowCongrats}/>
            }
        </div>
    )
}
