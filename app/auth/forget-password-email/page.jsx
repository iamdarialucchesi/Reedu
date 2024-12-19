import Link from "next/link";

export default function ForgetPasswordPage() {

    return (
        <section className="auth-right-panel px-md-6 px-3 d-flex align-items-center">
            <div className="w-100">
                <h1 className="fw-bold text-darkLow">Forgot Password</h1>
                <h6 className="fs-18 text-lighter fw-normal mb-6">Enter your email to set a new password</h6>

                <form>
                    <div>
                        <input type="email" placeholder="Email" className="form-control text-danger shadow-none w-100 border border-lighterGrey rounded-3 py-3 px-3 fs-14 mb-3"/>
                    </div>

                    <button className="auth-submit-btn text-white w-100 text-center border-0 rounded-4 fs-20 fw-bold py-3 mt-5">Confirm</button>
                </form>

                <div className="text-center mt-5">
                    <span className="text-black">Have an account? </span>
                    <Link className="fw-bold text-decoration-none white-purple-gradient-text" href={"#"}>Sign in!</Link>
                </div>
            </div>
        </section>
    )
}
