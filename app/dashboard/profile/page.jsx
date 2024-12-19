import Image from "next/image";

import ProfileStatBox from "@/app/dashboard/components/ProfileStatBox";
import ProfileStatBox2 from "@/app/dashboard/components/ProfileStatsBox2";

import editPencilRedGradientIcon from "@/public/icons/edit-pencil-red-gradient.svg"
import profileAvatarImg from "@/public/images/profile-page-avatar.png"
import heartRedIcon from "@/public/icons/heart-red.svg"
import flameRedIcon from "@/public/icons/flame-red-yellow.svg"
import diamondBlueIcon from "@/public/icons/diamond-blue.svg"
import flameWithBgIcon from "@/public/icons/flame-with-alice-blue-bg.svg"
import xpWithBgIcon from "@/public/icons/xp-with-alice-blue-bg.svg"
import starBadgeWithBgIcon from "@/public/icons/star-badge-with-alice-blue-bg.svg"
import medalsWithBgIcon from "@/public/icons/medals-with-alice-blue-bg.svg"
import TitleNameHeader from "@/app/dashboard/components/TitleNameHeader";
import HeroUsernamePanel from "@/app/dashboard/profile/components/HeroUsernamePanel";
import HeroDescriptionPanel from "@/app/dashboard/profile/components/HeroDescriptionPanel";
import Link from "next/link";


export default function ProfilePage() {

    return (
        <div>
            <div className="border-bottom px-2">
             <TitleNameHeader title={"Profile"}/>
            </div>
            <div className="px-2 px-md-3 pt-5 pb-3">
                <section className="profile-hero mb-5">
                    <div className="profile-hero-left-panel">
                        <HeroUsernamePanel />

                        <HeroDescriptionPanel/>
                    </div>

                    <div className="profile-hero-right-panel">
                        <div className="d-flex justify-content-center">
                            <div className="position-relative">
                                <Image width={220} height={220} src={profileAvatarImg} alt="Profile avatar"/>
                                <Link className="profile-edit-btn-absolute bg-transparent border-0 p-0" href={"/dashboard/avatar"}>
                                    <Image width={20} height={20} src={editPencilRedGradientIcon} alt="edit icon"/>
                                </Link>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center gap-4 mt-4">
                            <ProfileStatBox iconSrc={heartRedIcon} value={5} isAddPlus={false}/>
                            <ProfileStatBox iconSrc={flameRedIcon} value={200} isAddPlus={true}/>
                            <ProfileStatBox iconSrc={diamondBlueIcon} value={500} isAddPlus={true}/>
                        </div>
                    </div>
                </section>

                <section className="d-flex flex-xl-row flex-column gap-30px">
                    <div className="flex-1">
                        <h2 className="fw-bold text-darkLow mb-5">Statistics</h2>

                        <div className="profile-stats-grid-container">
                            <ProfileStatBox2 statImgSrc={flameWithBgIcon} statName={"Day Streak"} statValue={100}/>
                            <ProfileStatBox2 statImgSrc={xpWithBgIcon} statName={"Total XP"} statValue={100}/>
                            <ProfileStatBox2 statImgSrc={starBadgeWithBgIcon} statName={"Current League"}
                                             statValue={"None"}/>
                            <ProfileStatBox2 statImgSrc={medalsWithBgIcon} statName={"Top 3 Finishes"} statValue={0}/>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="fw-bold text-darkLow mb-5">Achievements</h2>

                        <div className="profile-stats-grid-container">
                            <ProfileStatBox2 statImgSrc={starBadgeWithBgIcon} statName={"League"} statValue={"Basic"}/>
                            <ProfileStatBox2 statImgSrc={starBadgeWithBgIcon} statName={"League"} statValue={"Silver"}/>
                            <ProfileStatBox2 statImgSrc={starBadgeWithBgIcon} statName={"League"}
                                             statValue={"Diamond"}/>
                            <ProfileStatBox2 statImgSrc={starBadgeWithBgIcon} statName={"League"}
                                             statValue={"Premium"}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
