"use client"

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import editPencilRedGradientIcon from "@/public/icons/edit-pencil-red-gradient.svg";

export default function HeroUsernamePanel() {
    const [isEditUsername, setIsEditUsername] = useState(false)
    const [username, setUsername] = useState("darialucchesi")
    const inputRef = useRef(null)

    const handleEditClick = () => {
        setIsEditUsername(true);

        // had to add delay because, before even re re render is completed by react and the input field that is to be rendered in DOM of which the reference is yet to be updated in inputRef, the code in setTimeout already has run even tho it doesn't has the reference to input field as the input field hasn't yet rendered in dom. so settime of even 0ms would cause the code to run inside the function only when react finished new re render and the inputRef holds the input field's reference
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus(); // Focus the input field when edit is clicked
            }
        }, 0);
    };
    const handleBlur = () => {
        setIsEditUsername(false); // Close the input field when it loses focus
    };

    return (
        <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
                <h2 className="fw-bold text-darkLow">Daria. L</h2>
                {
                    (isEditUsername) ? <input type="text" value={username} ref={inputRef} onBlur={handleBlur}
                                              onChange={(e) => setUsername(e.target.value)}
                                              className="form-control" id="username"/> :
                        <h6 className="fs-18 text-lighter fw-normal">@{username}</h6>
                }
            </div>
            <button className="bg-transparent border-0 p-0" onClick={handleEditClick}>
                <Image width={20} height={20} src={editPencilRedGradientIcon} alt="edit icon"/>
            </button>
        </div>
    )
}