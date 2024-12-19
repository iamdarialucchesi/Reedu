"use client";
import {useState} from "react";
import Image from "next/image";
import "@/styles/global.scss";

import Sidebar from "@/app/dashboard/components/Sidebar";
import {ModuleProvider} from "@/app/context/ModuleContext";
import hamburgerIcon from "@/public/icons/hamburger-menu.svg";

export default function ClientLayout({children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ModuleProvider>
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
                <div className="main-left-margin w-100">
                    <div className="w-100">
                        <div className="sidebar-humburger-icon d-none mt-2 px-2 px-md-3">
                            <Image src={hamburgerIcon} alt="hamburger" width={30} height={30}
                                   onClick={() => toggleSidebar(true)}/>
                        </div>
                        {children}
                    </div>
                </div>

                {
                    isOpen && <div className="bg-dark bg-opacity-50 w-100 vh-100 top-0 start-0 position-fixed z-9 d-block d-lg-none"
                                   onClick={toggleSidebar}></div>
                }
            </ModuleProvider>
        </>
    )
}
