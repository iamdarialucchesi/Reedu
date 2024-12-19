import Image from "next/image";
import EyeSlashIcon from "../../../public/icons/eye-slash-grey.png"
import AuthPasswordField from "@/app/auth/components/AuthPasswordFIeld";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <section className="auth-right-panel px-md-6 px-3 d-flex align-items-center">
            <div className="w-100">
                <h1 className="fw-bold text-darkLow">Get Started With ReEdu</h1>
                <h6 className="fs-18 text-lighter fw-normal mb-6">Getting started is easy</h6>

                <form>
                    <div>
                        <input type="text" placeholder="Full Name" className="form-control text-danger shadow-none w-100 border border-lighterGrey rounded-3 py-3 px-3 fs-14 mb-3"/>
                        <input type="email" placeholder="Enter Email" className="form-control text-danger shadow-none w-100 border border-lighterGrey rounded-3 py-3 px-3 fs-14 mb-3"/>
                        <input type="password" placeholder="Password" className="form-control text-danger shadow-none w-100 border border-lighterGrey rounded-3 py-3 px-3 fs-14 mb-3"/>
                        <input type="password" placeholder="Confirm Password" className="form-control text-danger shadow-none w-100 border border-lighterGrey rounded-3 py-3 px-3 fs-14"/>
                    </div>

                    <button className="auth-submit-btn text-white w-100 text-center border-0 rounded-4 fs-20 fw-bold py-3 mt-5">Sign Up</button>
                </form>

                <div className="text-center mt-5">
                    <span className="text-black">Have an account? </span>
                    <Link className="fw-bold text-decoration-none white-purple-gradient-text" href="/auth/signin">Sign In!</Link>
                </div>
            </div>
        </section>
    )
}