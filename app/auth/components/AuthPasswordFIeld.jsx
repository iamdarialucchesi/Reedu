"use client"

import Image from "next/image";
import EyeSlashIcon from "@/public/icons/eye-slash-grey.png";
import {useState} from "react";


export default function AuthPasswordField() {
    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <div className="w-100 border border-lighterGrey rounded-3 py-3 ps-3 pe-3 d-flex position-relative">
            <input type={isShowPassword ? "text" : "password"} placeholder="Password"
                   className="input-default-style-remove-focus border-0 w-100 p-0 fs-14"/>
            <button onClick={() => setIsShowPassword((prevState) => !prevState)} className="p-0 m-0 border-0 bg-transparent d-flex align-items-center">
                <Image width={20} src={EyeSlashIcon} alt={"Eye slash"}/>
            </button>
        </div>
    )
}