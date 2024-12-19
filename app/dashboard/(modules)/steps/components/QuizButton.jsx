export default function QuizButton({
                                       selectedAnswer,
                                       handleNextQuestion,
                                       handlePrevQuestion,
                                       setShowModal,
                                       showModal,
                                       showCongrats
                                   }) {

    function handleNextClick() {
        setShowModal(false);
        handleNextQuestion();
    }

    function handleBackClick() {
        setShowModal(false);
        handlePrevQuestion();
    }

    return (
        <div className="d-flex justify-content-between align-items-center px-3 pt-3 border-top">
            <button className="btn text-lighter fw-bold fs-18 px-5 py-2 border border-gretLow"
                    onClick={handleBackClick}>Back
            </button>
            <div style={{width: "150px"}}>
                <button className="btn custom-btn-background text-white fw-bold px-4 py-2 w-100"
                        data-bs-toggle={showModal || showCongrats && "modal"}
                        data-bs-target={`${showCongrats ? "" : "#quizModal"}`} disabled={selectedAnswer}
                        onClick={handleNextClick}>
                    Next
                </button>
            </div>
        </div>
    )
}
