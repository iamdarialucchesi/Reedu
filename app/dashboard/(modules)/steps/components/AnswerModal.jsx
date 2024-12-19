export default function AnswerModal({
                                        correctOption,
                                        reason,
                                        onClose,
                                        lastQuestion,
                                        currentQuestionIndex,
                                        handleNextStep,
                                        quizCheck, setIsCorrectAnswer, setShowModal
                                    }) {

    function handleModalBtn() {
        if ((currentQuestionIndex + 1) === lastQuestion) {
            setIsCorrectAnswer("");
            setShowModal(false);
            handleNextStep();
            return;
        }

        setIsCorrectAnswer("");
        onClose();
    }

    return (
        <div className="modal fade border-0" id="quizModal" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content p-2">
                    <div className="modal-header border-0 mx-auto pb-2">
                        {quizCheck ?
                            <h1 className="fw-bold fs-27 text-darkLow text-capitalize text-center">The answer
                                is {correctOption}</h1>
                            :
                            <h1 className="fw-bold fs-27 text-darkLow text-capitalize text-center">Answer
                                is the Letter  &quot;{correctOption}&quot;</h1>
                        }
                    </div>
                    <div className="modal-body py-0">
                        <p className="my-3 text-secondaryHigh fw-bold fs-17 mt-0 text-center">{reason}</p>
                    </div>
                    <div className="modal-footer border-0 justify-content-center">
                        <div>
                            <button className="btn custom-btn-background text-white fw-bold px-4 py-2"
                                    data-bs-dismiss="modal" onClick={handleModalBtn}>Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
