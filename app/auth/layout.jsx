import localFont from "next/font/local";
import "@/styles/global.scss";
import BootstrapClient from "@/components/BootstrapClient";
import React from "react";
import Image from "next/image";

import LogoWhiteImg from "@/public/images/logo-white.png"
import FacebookLogo from "@/public/icons/facebook-logo-white.png";
import TwitterLogo from "@/public/icons/twitter-logo-white.png";
import InstagramLogo from "@/public/icons/instagram-logo-white.png";
import LinkedinLogo from "@/public/icons/linkedin-logo-white.png";
import AuthCharacterGif1 from "@/public/images/Loop4.gif";
import AuthCharacterGif2 from "@/public/images/Loop5-2.gif";
import AuthCharacterGif3 from "@/public/images/Loop6-1.gif";
import Header from "@/components/Header";

const DinRoundPro = localFont({
    src: [
        {
            path: '../fonts/DINRoundPro-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/DINRoundPro.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/DINRoundPro-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/DINRoundPro-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/DINRoundPro-Black.woff',
            weight: '900',
            style: 'normal',
        },
    ],
})

export const metadata = {
    title: "ReEdu",
    description: "",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={DinRoundPro.className}>
        <Header />
        <div className="auth-grid-container pt-md-7 pt-6">
            <section className="auth-left-panel overflow-hidden d-flex flex-column justify-content-between">
                <div className="px-5 pt-5">
                    <Image width={110} src={LogoWhiteImg} alt={"logo white"}/>
                    <p className="text-white mb-4 fw-normal mt-5 mb-5 pe-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        {"industry's"} standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type
                        and scrambled it to make a type specimen book.
                    </p>
                    <ul className="list-unstyled mb-0 d-flex align-items-center gap-3">
                        <li>
                            <a href="#"
                               className={`footer-social-media-link d-flex align-items-center justify-content-center border rounded-1 text-decoration-none`}>
                                <Image width={16.5} src={FacebookLogo} alt=""/>
                            </a>
                        </li>

                        <li>
                            <a href="#"
                               className="footer-social-media-link d-flex align-items-center justify-content-center border rounded-1 text-decoration-none">
                                <Image width={16.5} src={TwitterLogo} alt=""/>
                            </a>
                        </li>

                        <li>
                            <a href="#"
                               className="footer-social-media-link d-flex align-items-center justify-content-center border rounded-1 text-decoration-none">
                                <Image width={16.5} src={InstagramLogo} alt=""/>
                            </a>
                        </li>

                        <li>
                            <a href="#"
                               className="footer-social-media-link d-flex align-items-center justify-content-center border rounded-1 text-decoration-none">
                                <Image width={16.5} src={LinkedinLogo} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="auth-character-gifs w-100 d-flex justify-content-center">
                    <Image className="w-33 h-auto" unoptimized={true} src={AuthCharacterGif1} alt={"auth character gif 1"}/>
                    <Image className="w-33 h-auto" unoptimized={true} src={AuthCharacterGif2} alt={"auth character gif 2"}/>
                    <Image className="w-33 h-auto" unoptimized={true} src={AuthCharacterGif3} alt={"auth character gif 3"}/>
                </div>
            </section>
            {children}
        </div>
        <BootstrapClient/>
        </body>
        </html>
    );
}
