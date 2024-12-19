import Image from "next/image";
import Link from "next/link";
import React from "react";

import BlackLogo from "@/public/images/logo.png";

export default function Logo() {
    return (
        <div>
            <Link className="navbar-brand" href="/">
                <Image width={80} src={BlackLogo} alt=""/>
            </Link>
        </div>
    )
}
