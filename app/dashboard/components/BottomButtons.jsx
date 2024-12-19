import GradientButton from "@/components/GradientButton";

export default function BottomButtons({to, handleNextStep, onClick}) {
    return (
        <div className="d-flex justify-content-between align-items-center px-3 pt-3 border-top">
            <button className="btn text-lighter fw-bold fs-18 px-5 py-2 border border-gretLow" onClick={onClick}>Back
            </button>
            <div style={{width: "150px"}}>
                <GradientButton to={to} handleNext={handleNextStep} >Next</GradientButton>
            </div>
        </div>
    )
}
