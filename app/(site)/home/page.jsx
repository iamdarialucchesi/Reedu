import ContactUs from "@/components/ContactUs.jsx";
import Slider from "@/components/Slider";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";
import Accordions from "@/components/Accordions";
import GradientButton from "@/components/GradientButton";
import ImagesAnimation from "@/components/ImagesAnimation";

import LearnersItemMan1Gif from "@/public/images/learners-item-man-1.png";
import LearnersItemMan2Gif from "@/public/images/learners-item-man-2.png";
import LearnersItemProfilePic1 from "@/public/images/learners-item-profile-pic-1.png";
import LearnersItemProfilePic2 from "@/public/images/learners-item-profile-pic-2.png";

export default function HomePage() {
    const learnersSlideData = [
        {
            p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            manGif: LearnersItemMan1Gif,
            profilePic: LearnersItemProfilePic1,
            personName: "Regan Lynch",
            personFamilyStatus: "Parent"
        },
        {
            p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            manGif: LearnersItemMan2Gif,
            profilePic: LearnersItemProfilePic2,
            personName: "Lauren L. | Third Grader",
            personFamilyStatus: "Child"
        }
    ]

    return (
        <div className="mt-5 pt-5">
            <section className="hero position-relative">
                <div className="container">
                    <div className="hero-title pt-4 d-flex align-items-center flex-column">
                        <h1 className="fw-semibold text-center mb-4">
                            <span className="text-danger fw-semibold">ReEdu</span> is about changing the way <br/>
                            Buyer’s buy <span className="text-danger fw-semibold">Real Estate.</span>
                        </h1>
                        <p className="text-center fs-6 mb-0 mx-auto mw-940px text-lighter">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className="mt-4">
                            <GradientButton to="/auth/signin">Get Started</GradientButton>
                        </div>
                    </div>
                </div>
            </section>

            <WhoWeAre/>
            <div className="container">
                <WhyChooseUs animatedGif={false}/>
                <Slider data={learnersSlideData}/>
                <Accordions icons={true} btn={true}/>
                <ContactUs/>
                <ImagesAnimation/>
            </div>
        </div>
    )
}
