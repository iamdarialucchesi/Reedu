"use client";
import GradientButton from "@/components/GradientButton";
import Image from "next/image";

import AvatarLimb4QuestionMark from "/public/images/avatar-limbs-4-question-mark.svg"
import AvatarLimb6Hand from "@/public/images/avatar-limbs-6-hand.svg"

export default function AvatarPreview({avatarData, selectedAvatarItemsIndexes, activeMainCategory}) {

    return (
        <section className="d-flex flex-column justify-content-between">
            <div>
                <h5 className="fw-bold text-darkLow border mb-0 bg-whiteLow border py-3 px-3 mb-2 rounded-3">Avatar</h5>

                <p className="text-greyLower px-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy</p>
            </div>

            <div className="avatar-preview-panel d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column position-relative">
                    {
                        (selectedAvatarItemsIndexes["skin"].styleIndex===3) && <Image style={{position: "absolute",top: 0, left: -50}} width={35} height={"auto"}
                                                                                      src={AvatarLimb4QuestionMark}
                                                                                      alt={"hat"}/>
                    }

                    {
                        (selectedAvatarItemsIndexes["skin"].styleIndex===5) && <Image style={{position: "absolute",top: 0, right: -50}} width={75} height={"auto"}
                                                                                      src={AvatarLimb6Hand}
                                                                                      alt={"hat"}/>
                    }

                    <Image style={{position: "absolute",top: -28, right: 10}} width={110} height={"auto"}
                           src={avatarData["hat"].styles[selectedAvatarItemsIndexes["hat"].styleIndex].imgSrc}
                           alt={"hat"}/>

                    <Image style={{zIndex: 10}} width={110} height={"auto"}
                           src={avatarData["face"].styles[selectedAvatarItemsIndexes["face"].styleIndex].imgSrc}
                           alt={"face"}/>

                    <Image style={{position: "absolute", bottom: 120, left: 7}} width={100} height={"auto"}
                           src={avatarData["building"].styles[selectedAvatarItemsIndexes["building"].styleIndex].imgSrc}
                           alt={"building"}/>

                    <Image style={{position: "relative", zIndex: 10, transform: `translateY(-40px)`, scale: (selectedAvatarItemsIndexes["skin"].styleIndex===2) && 1.5}} width={100} height={200}
                           src={avatarData["skin"].styles[selectedAvatarItemsIndexes["skin"].styleIndex].imgSrc}
                           alt={"skin"}/>

                </div>
            </div>

            <div className="d-flex justify-content-between">
                <button className="bg-transparent border border-greyLow rounded-2" style={{width: 120}}>Cancel</button>
                <div style={{width: 120}}>
                    <GradientButton to="#">Save</GradientButton>
                </div>
            </div>
        </section>
    )

}
