import Image from "next/image";
import chevronLeftBlack from "@/public/icons/Chevron Left black.svg";

export default function TitleNameHeader({title, backBtn, onClick}) {
    return (
        <div className="px-md-2 px-2 py-3 d-flex align-items-center gap-1">
            {
                backBtn &&
                <Image src={chevronLeftBlack} alt="Back-icon" height={25} width={25} className="mb-n2 cursor-pointer"
                       onClick={onClick}/>
            }
            <h5 className="fw-bold text-darkLow mb-0">{title}</h5>
        </div>
    )
}
