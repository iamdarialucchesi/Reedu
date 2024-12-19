import Image from "next/image";
import completeIcon from "@/public/icons/complete-icon-red.svg";

export default function StepCard({unActiveIcon, activeIcon, text, status, index}) {
    return (
        <div
            className={`${status === "complete" || status === "Not complete" ? "bg-whiteLow" : "carousel-slider-bg"} d-flex align-items-center p-2 gap-2 rounded-3 my-2`}>
            <Image src={status === "in progress" ? activeIcon : unActiveIcon} alt={`icon`} height={35} width={35}/>
            <div className="d-flex justify-content-between w-100 align-items-center">
                <div>
                    <p className={`m-0 fw-bold ${status === 'in progress' ? "text-white" : status === "complete" ? "text-darkLow" : "text-darkLow opacity-75"} fs-15`}>{`${index}.`}{text}</p>
                    <p className={`m-0 fw-normal ${status === 'in progress' ? "text-white" : status === "complete" ? "text-darkLow" : "text-darkLow opacity-75"} fs-12`}>{status}</p>
                </div>
                <div>
                    {status === "complete" && <Image src={completeIcon} alt="icon of complete" width={26} height={26}/>}
                </div>
            </div>
        </div>
    )
}
