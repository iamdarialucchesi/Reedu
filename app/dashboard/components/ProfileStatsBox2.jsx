import flameWithBgIcon from "@/public/icons/flame-with-alice-blue-bg.svg"
import Image from "next/image";
export default function ProfileStatBox2({statImgSrc, statValue, statName}){
    return (
        <div className="d-flex align-items-center border border-lightest rounded-2 py-2 px-3 gap-3">
            <Image width={70} height={70} src={statImgSrc} alt="Statistics icon"/>
            <div className="d-flex flex-column justify-content-between flex-1 align-self-stretch">
                <div className="fs-22 fw-bold text-darkLow">{statValue}</div>
                <p className="mb-0 text-lighter">{statName}</p>
            </div>
        </div>
    )
}