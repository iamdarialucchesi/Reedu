"use client";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

import Logo from "@/components/Logo";
import GradientButton from "@/components/GradientButton";

import rocketWhite from '@/public/icons/rocket-white.svg';
import rocketBlack from '@/public/icons/rocket-black.svg';
import avatarRed from "@/public/icons/avatar-red-background.svg";
import avatarBlue from "@/public/icons/avatar-blue-background.svg";
import userBlack from "@/public/icons/user-black.svg";
import userWhite from "@/public/icons/user-white.svg";
import messageBlack from "@/public/icons/message-black.svg";
import messageWhite from "@/public/icons/message-white.svg";
import gearBlack from "@/public/icons/gear-black.svg";
import gearWhite from "@/public/icons/gear-white.svg";
import logoutLogo from "@/public/icons/exit-white.svg";
import crossIcon from "@/public/icons/cross-black.svg";

export default function Sidebar({isOpen, toggleSidebar}) {
    const pathname = usePathname();

    return (
        <aside
            className={`border-end border-primary bg-whiteLow py-2 position-fixed sidebar-width top-0 start-0 z-10 vh-100 d-flex flex-column justify-content-between overflow-hidden ${isOpen && "sidebar-width-small"}`}>
            <div className="align-self-end position-absolute sidebar-humburger-icon d-none end-5">
                <Image src={crossIcon} alt="cross-icon" width={20} height={20} onClick={() => toggleSidebar(false)}/>
            </div>
            <div className="mx-3">
                <div className="d-flex justify-content-center mt-3">
                    <Logo/>
                </div>
                <ul className="mt-5 list-unstyled">
                    <Link href="/dashboard" onClick={toggleSidebar}
                          className={`d-block text-decoration-none fw-bold fs-6 rounded-3 px-3 py-2 mb-3 ${(pathname === "/dashboard/avatar" || pathname === '/dashboard/profile' || pathname === '/dashboard/support' || pathname === '/dashboard/settings') ? "text-darkLower" : "text-white dashboard-active"}`}>
                        <Image
                            src={(pathname === "/dashboard/avatar" || pathname === '/dashboard/profile' || pathname === '/dashboard/support' || pathname === '/dashboard/settings') ? rocketBlack : rocketWhite}
                            alt="Rocket Icon"
                            className="me-4" width={35} height={35}
                        />
                        Begin
                    </Link>
                    <Link href="/dashboard/avatar" onClick={toggleSidebar}
                          className={`d-block text-decoration-none fw-bold fs-6 rounded-3 px-3 py-2 mb-3 ${pathname === '/dashboard/avatar' ? "text-white dashboard-active" : "text-darkLower"}`}>
                        <Image
                            src={pathname === "/dashboard/avatar" ? avatarBlue : avatarRed}
                            alt="Rocket Icon"
                            className="me-4" width={35} height={35}
                        />
                        Avatar
                    </Link>
                    <Link href="/dashboard/profile" onClick={toggleSidebar}
                          className={`d-block text-decoration-none fw-bold fs-6 rounded-3 px-3 py-2 mb-3 ${pathname === '/dashboard/profile' ? "text-white dashboard-active" : "text-darkLower"}`}>
                        <Image
                            src={pathname === "/dashboard/profile" ? userWhite : userBlack}
                            alt="Rocket Icon"
                            className="me-4" width={35} height={35}
                        />
                        Profile
                    </Link>
                    <Link href="/dashboard/support" onClick={toggleSidebar}
                          className={`d-block text-decoration-none fw-bold fs-6 rounded-3 px-3 py-2 mb-3 ${pathname === '/dashboard/support' ? "text-white dashboard-active" : "text-darkLower"}`}>
                        <Image
                            src={pathname === "/dashboard/support" ? messageWhite : messageBlack}
                            alt="Rocket Icon"
                            className="me-4" width={35} height={35}
                        />
                        Chat Support
                    </Link>
                    <Link href="/dashboard/settings" onClick={toggleSidebar}
                          className={`d-block text-decoration-none fw-bold fs-6 rounded-3 px-3 py-2 mb-3 ${pathname === '/dashboard/settings' ? "text-white dashboard-active" : "text-darkLower"}`}>
                        <Image
                            src={pathname === "/dashboard/settings" ? gearWhite : gearBlack}
                            alt="Rocket Icon"
                            className="me-4" width={35} height={35}
                        />
                        Settings
                    </Link>
                </ul>
            </div>

            <div className="mx-3">
                <GradientButton to="/auth/signin" src={logoutLogo} width={20} height={20}>Logout</GradientButton>
            </div>
        </aside>
    )
}
