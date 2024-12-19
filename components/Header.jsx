import React from "react"

import GradientButton from "@/components/GradientButton";
import HeaderMenu from "@/components/HeaderMenu";
import Logo from "@/components/Logo";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-white position-fixed top-0 start-0 end-0 custom-shadow">
                <div className="container py-1 py-lg-2 ">
                    <Logo />
                    <button
                        className="navbar-toggler p-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <HeaderMenu/>
                        <div className="d-lg-block d-none">
                            <GradientButton to="/contact">Contact Us</GradientButton>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
