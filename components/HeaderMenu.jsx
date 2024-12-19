"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

function HeaderMenu() {
    const pathname = usePathname();

    return (
        <ul className="navbar-nav mx-auto mb-lg-0">
            <li className="nav-item">
                <Link
                    className={`nav-link p-0 fs-6 ${
                        pathname === '/' ? 'text-danger fw-semibold border-bottom border-danger border-2' : 'text-dark'
                    }`}
                    aria-current="page"
                    href="/"
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link p-0 fs-6 ${
                    pathname === '/about' ? 'text-danger fw-semibold border-bottom border-danger border-2' : 'text-dark'
                }`} href="/about">
                    About
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link p-0 text-info fs-6" href="#">Content</a>
            </li>

            <li className="nav-item">
                <a className="nav-link p-0 text-info fs-6" href="#">Learners</a>
            </li>

            <li className="nav-item">
                <a className="nav-link p-0 text-info fs-6" href="#">Creators</a>
            </li>

            <li className="nav-item d-lg-none d-block">
                <Link className={`nav-link p-0 fs-6 ${
                    pathname === '/contact' ? 'text-danger fw-semibold border-bottom border-danger border-2' : 'text-dark'
                }`} href="/contact">Contact Us</Link>
            </li>
        </ul>
    )
}

export default HeaderMenu;
