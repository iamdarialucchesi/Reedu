"use client"

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import editPencilRedGradientIcon from "@/public/icons/edit-pencil-red-gradient.svg";

export default function HeroDescriptionPanel() {
    const [isEditDescription, setIsEditDescription] = useState(false)
    const [description, setDescription] = useState(`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown
                printer took a galley of type and scrambled it to make a type specimen book. It has
                survived
                not
                only five centuries, but also the leap into electronic typesetting, remaining
                essentially
                unchanged.
                It was popularised in the 1960s`)
    const inputRef = useRef(null)

    const handleEditClick = () => {
        setIsEditDescription(true);

        // had to add delay because, before even re re render is completed by react and the input field that is to be rendered in DOM of which the reference is yet to be updated in inputRef, the code in setTimeout already has run even tho it doesn't has the reference to input field as the input field hasn't yet rendered in dom. so settime of even 0ms would cause the code to run inside the function only when react finished new re render and the inputRef holds the input field's reference
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus(); // Focus the input field when edit is clicked
            }
        }, 0);
    };
    const handleBlur = () => {
        setIsEditDescription(false); // Close the input field when it loses focus
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-darkLow fw-bold fs-18 mb-0">Description</h6>
                <button className="bg-transparent border-0 p-0"  onClick={handleEditClick}>
                    <Image width={20} height={20} src={editPencilRedGradientIcon} alt="edit icon"/>
                </button>
            </div>
            {
                (isEditDescription) ? <textarea rows={6} typeof="text" value={description} ref={inputRef} onBlur={handleBlur}
                                             onChange={(e) => setDescription(e.target.value)}
                                             className="form-control" id="description"/> :
                <p className="text-lighter">{description.trim()}</p>
            }
        </div>
    )
}