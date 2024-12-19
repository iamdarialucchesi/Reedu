import Image from "next/image";
import EyeSlashIcon from "../../../public/icons/eye-slash-grey.png"
import AuthPasswordField from "@/app/auth/components/AuthPasswordFIeld";
import Link from "next/link";

export default function SignInPage() {
    return (
        <section className="auth-right-panel px-md-6 px-3 d-flex align-items-center">
            <div className="w-100">
                <h1 className="fw-bold text-darkLow">Welcome Back</h1>
                <h6 className="fs-18 text-lighter fw-normal mb-6">Login into your account</h6>

                <form>
                    <div>
                        <input type="email" placeholder="Email" className="form-control text-danger shadow-none w-100 border border-lighterGrey rounded-3 py-3 px-3 fs-14 mb-3"/>
                        <input type="password" placeholder="Password" className="form-control text-danger shadow-none w-100 border border-lighterGrey rounded-3 py-3 px-3 fs-14"/>
                        {/*<AuthPasswordField/>*/}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4">
                        <div className="form-check form-switch login-toggle-switch">
                            <input className="form-check-input shadow-none" type="checkbox" role="switch"
                                   id="flexSwitchCheckDefault"/>
                            <label className="form-check-label text-darkLow fw-medium fs-16" htmlFor="flexSwitchCheckDefault">Remember me</label>
                        </div>

                            <Link href="/auth/forget-password-email" className="text-danger fw-medium border-bottom border-danger text-decoration-none">Forgot Password?</Link>
                    </div>

                    <button className="auth-submit-btn text-white w-100 text-center border-0 rounded-4 fs-20 fw-bold py-3 mt-5">Sign In</button>
                </form>

                <div className="text-center mt-5">
                    <span className="text-black">Don’t have an account? </span>
                    <Link className="fw-bold text-decoration-none white-purple-gradient-text" href="/auth/signup">Sign up!</Link>
                </div>
            </div>
        </section>
    )
}
