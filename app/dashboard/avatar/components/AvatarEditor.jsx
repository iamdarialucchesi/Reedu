"use client"
import {useEffect, useState} from "react";
import AvatarPreview from "@/app/dashboard/avatar/components/AvatarPreview";
import AvatarEditControls from "@/app/dashboard/avatar/components/AvatarEditControls";
import TitleNameHeader from "@/app/dashboard/components/TitleNameHeader";

import Hat1 from "@/public/images/avatar-hat-1.svg"
import Hat2 from "@/public/images/avatar-hat-2.svg"
import Hat3 from "@/public/images/avatar-hat-3.svg"
import Face1 from "@/public/images/avatar-face-1.svg"
import Face2 from "@/public/images/avatar-face-2.svg"
import Face3 from "@/public/images/avatar-face-3.svg"
import Face4 from "@/public/images/avatar-face-4.svg"
import Face5 from "@/public/images/avatar-face-5.svg"
import Face6 from "@/public/images/avatar-face-6.svg"
import Limbs1 from "@/public/images/avatar-limbs-1.svg"
import Limbs2 from "@/public/images/avatar-limbs-2.svg"
import Limbs3 from "@/public/images/avatar-limbs-3.svg"
import Limbs4 from "@/public/images/avatar-limbs-4.svg"
import Limbs5 from "@/public/images/avatar-limbs-5.svg"
import Limbs6 from "@/public/images/avatar-limbs-6.svg"
import Building1 from "@/public/images/avatar-building-1.svg"
import Building2 from "@/public/images/avatar-building-2.svg"
import Building3 from "@/public/images/avatar-building-3.svg"
import Building4 from "@/public/images/avatar-building-4.svg"
import Building5 from "@/public/images/avatar-building-5.svg"
import Building6 from "@/public/images/avatar-building-6.svg"


export default function AvatarEditor() {
    let avatarData = {
        hat: {
            imgSrc: Hat1,
            styles: [
                {
                    name: "hat1",
                    imgSrc: Hat1,
                    colors: ["blue", "green"]
                },
                {
                    name: "hat2",
                    imgSrc: Hat2,
                    colors: ["blue", "green", "maroon"]
                },
                {
                    name: "hat3",
                    imgSrc: Hat3,
                    colors: ["red", "pink", "purple"]
                },
            ],
        },
        face: {
            imgSrc: Face1,
            styles: [
                {
                    name: "face1",
                    imgSrc: Face1,
                    colors: ["blue", "green", "red"]
                },
                {
                    name: "face2",
                    imgSrc: Face2,
                    colors: ["blue", "green", "purple", "yellow"]
                },
                {
                    name: "face3",
                    imgSrc: Face3,
                    colors: ["blue", "brown", "red"]
                },
                {
                    name: "face4",
                    imgSrc: Face4,
                    colors: ["blue", "orange", "purple", "yellow"]
                },
                {
                    name: "face5",
                    imgSrc: Face5,
                    colors: ["blue", "teal", "red"]
                },
                {
                    name: "face6",
                    imgSrc: Face6,
                    colors: ["blue", "orange", "red", "yellow"]
                },
            ],
        },
        skin: {
            imgSrc: Limbs1,
            styles: [
                {
                    name: "skin1",
                    imgSrc: Limbs1,
                    colors: ["blue", "green", "indigo", "grey"]
                },
                {
                    name: "skin2",
                    imgSrc: Limbs2,
                    colors: ["blue", "green", "aliceblue"]
                },
                {
                    name: "skin1",
                    imgSrc: Limbs3,
                    colors: ["blue", "green", "indigo", "grey"]
                },
                {
                    name: "skin2",
                    imgSrc: Limbs4,
                    colors: ["blue", "green", "aliceblue"]
                },
                {
                    name: "skin1",
                    imgSrc: Limbs5,
                    colors: ["blue", "green", "indigo", "grey"]
                },
                {
                    name: "skin2",
                    imgSrc: Limbs6,
                    colors: ["blue", "green", "aliceblue"]
                },
            ],
        },
        building: {
            imgSrc: Building1,
            styles: [
                {
                    name: "building1",
                    imgSrc: Building1,
                    colors: ["blue", "purple", "magenta"]
                },
                {
                    name: "building2",
                    imgSrc: Building2,
                    colors: ["blue", "green", "silver"]
                }, {
                    name: "building3",
                    imgSrc: Building3,
                    colors: ["red", "purple", "magenta"]
                },
                {
                    name: "building4",
                    imgSrc: Building4,
                    colors: ["yellow", "green", "silver"]
                }, {
                    name: "building5",
                    imgSrc: Building5,
                    colors: ["grey", "purple", "magenta"]
                },
                {
                    name: "building6",
                    imgSrc: Building6,
                    colors: ["brown", "green", "indigo"]
                },
            ],
        },
    }

    const [selectedAvatarItemsIndexes, setSelectedAvatarItemsIndexes] = useState(() => {
        const initialIndexes = {};
        Object.keys(avatarData).forEach((category) => {
            initialIndexes[category] = {
                styleIndex: 0, // Default style index for the category
                colorIndex: 0  // Default color index for the category
            };
        });
        return initialIndexes;
    });

    const [activeMainCategory, setActiveMainCategory] = useState(Object.keys(avatarData)[0])


    const returnMainCategory = (key) => {
        return Object.keys(avatarData)[key]
    }

    const returnCategoryStyle = (categoryKey, styleIndex) => {
        return returnMainCategory(categoryKey).styles[styleIndex]
    }

    const returnStyleColor = (categoryKey, styleIndex, colorIndex) => {
        return returnCategoryStyle(categoryKey, styleIndex).colors[colorIndex]
    }

    useEffect(() => {
        console.log(selectedAvatarItemsIndexes)
    }, [selectedAvatarItemsIndexes]);

    return (
        <>
            <div className="px-3 border-bottom">
                <TitleNameHeader title={"Avatar"}/>
            </div>
            <div className="avatar-editor-container px-3 py-3">
                <AvatarEditControls avatarData={avatarData} selectedAvatarItemsIndexes={selectedAvatarItemsIndexes}
                                    setSelectedAvatarItemsIndexes={setSelectedAvatarItemsIndexes} activeMainCategory={activeMainCategory} setActiveMainCategory={setActiveMainCategory} />
                <AvatarPreview avatarData={avatarData} selectedAvatarItemsIndexes={selectedAvatarItemsIndexes} activeMainCategory={activeMainCategory} />
            </div>
        </>
    )
}
