import Image from "next/image";
import heartRed from "@/public/icons/heart-red.svg";

export default function ProgressBar({progressVal, lifeline}) {


    if (lifeline) {
        // Calculate the percentage based on the number of lifelines.
        const percentage = (100 / lifeline);

        return (
            <div>
                <div className="d-flex gap-3 align-items-center">
                    <div className="progress w-100 rounded-3" style={{height: '15px'}} role="progressbar"
                         aria-label="Basic example"
                         aria-valuenow={percentage} aria-valuemin="0"
                         aria-valuemax="100">
                        <div className="progress-bar bg-primary" style={{width: `${percentage}%`}}></div>
                    </div>
                    <div className="text-dangerLight fw-bold fs-18 d-flex gap-2">
                        <Image src={heartRed} alt="heart"/>{lifeline}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <p className="mb-2 fw-bold fs-16 text-darkLow">Your Progress</p>
            <div className="d-flex gap-3 align-items-center">
                <div className="progress w-100 rounded-3" style={{height: '15px'}} role="progressbar"
                     aria-label="Basic example"
                     aria-valuenow="25" aria-valuemin="0"
                     aria-valuemax="100">
                    <div className="progress-bar bg-primary" style={{width: `${progressVal}%`}}></div>
                </div>
                <div className="text-darkLow fw-bold fs-16">{progressVal}%</div>
            </div>
        </div>
    )
}
