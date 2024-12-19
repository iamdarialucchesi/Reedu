import Image from "next/image";

export default function ProfileStatBox({iconSrc, value, isAddPlus}) {
    return (
        <div
            className="profile-stat-box d-flex align-items-center justify-content-center py-2 flex-1 rounded-3 bg-secondary border border-primary gap-2">
            <div className="img">
                <Image objectFit="contain" layout="fill" src={iconSrc} className="position-relative" alt="heart icon"/>
            </div>
            <div className="text fw-bold text-darkerGrey">{value}{isAddPlus && "+"}</div>
        </div>
    )
}