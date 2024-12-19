import Image from "next/image";

import GradientButton from "@/components/GradientButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhoWeAre from "@/components/WhoWeAre";
import Accordions from "@/components/Accordions";
import CarouselSlider from "@/components/CarouselSlider";

import BuildingWithCar from "@/public/images/buildingWithCar.png";
import Git3 from "@/public/images/Loop5-2.gif";
import Person1 from "@/public/images/person1.png";
import Person2 from "@/public/images/person2.png";
import Person3 from "@/public/images/person3.png";
import Person4 from "@/public/images/person4.png";
import Person5 from "@/public/images/person5.png";
import Person6 from "@/public/images/person6.png";
import ImagesAnimation from "@/components/ImagesAnimation";

function AboutPage() {
    const teamMembers = [
        {
            id: 1,
            name: 'Aleena Jonathan',
            role: 'CEO',
            experience: '5+ Years',
            location: 'USA',
            email: 'aleenajonathan@gmail.com',
            image: Person1,
        },
        {
            id: 2,
            name: 'John Doe',
            role: 'CTO',
            experience: '8+ Years',
            location: 'Canada',
            email: 'john.doe@example.com',
            image: Person2,
        },
        {
            id: 3,
            name: 'Jane Smith',
            role: 'CFO',
            experience: '10+ Years',
            location: 'UK',
            email: 'jane.smith@example.com',
            image: Person3,
        },
        {
            id: 4,
            name: 'Michael Clark',
            role: 'COO',
            experience: '7+ Years',
            location: 'Australia',
            email: 'michael.clark@example.com',
            image: Person4,
        },
        {
            id: 5,
            name: 'Emily Davis',
            role: 'CMO',
            experience: '6+ Years',
            location: 'Germany',
            email: 'emily.davis@example.com',
            image: Person5,
        },
        {
            id: 6,
            name: 'Davis Emily',
            role: 'CTO',
            experience: '2+ Years',
            location: 'Germany',
            email: 'davis.emily.@example.com',
            image: Person6,
        },
        {
            id: 7,
            name: 'Dsxavis Emily',
            role: 'CTO',
            experience: '2+ Years',
            location: 'Germany',
            email: 'davis.emily.@example.com',
            image: Person6,
        },
    ];

    return (
        <>
            <div className="about-us pt-7">
                <div className="container">
                    {/*about hero section*/}
                    <div className="mb-4 mb-md-6">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="about-hero-text">
                                    <h1 className="fw-semibold mb-4 pe-0 pe-md-4">
                                        <span className="text-danger fw-semibold">ReEdu</span> is about changing the way
                                        Buyer’s buy <span className="text-danger fw-semibold">Real Estate.</span>
                                    </h1>
                                    <p className="mb-4 text-lighter pe-0 pe-md-5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book.
                                    </p>

                                    <div className="custom-width-140">
                                        <GradientButton to="/auth/signin">Get Started</GradientButton>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-md-end mt-3 mt-md-0 position-relative">
                                    <Image src={BuildingWithCar} alt="contact-hero-image"
                                           className="img-fluid w-auto h-auto"/>
                                    <Image src={Git3} alt="git 3"
                                           className="about-hero-position position-absolute bottom-n5 start-0 flip-horizontal"
                                           unoptimized={true}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*about why choose us section*/}
                    <WhyChooseUs animatedGif={true}/>
                </div>
                {/*about who we are section*/}
                <WhoWeAre/>

                {/*accordion*/}
                <div className="bg-secondary my-7 py-5">
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h3 className="text-dark fw-semibold fs-2 d-none d-lg-block">Complete
                                        Solutions<br/> Provider</h3>
                                    <h3 className="text-dark fw-semibold fs-2 d-block d-lg-none mb-3">Complete Solutions
                                        Provider</h3>
                                </div>
                                <div className="col-lg-5">
                                    <p className="m-0 text-light fs-14">when an unknown printer took a galley of type
                                        and
                                        scrambled
                                        it to
                                        make a type
                                        specimen book. It has survived not only five centuries, but also the leap
                                        into electronic
                                        typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                        <Accordions woodenBody={true} clientText={true} line={true} transparentEffect={true}/>
                    </div>
                </div>


                <div className="mb-5">
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h3 className="text-dark fw-semibold fs-2 d-none d-lg-block">Meet Our
                                        Team<br/> Members
                                    </h3>
                                    <h3 className="text-dark fw-semibold fs-2 d-block d-lg-none mb-3">Members</h3>
                                </div>
                                <div className="col-lg-5">
                                    <p className="m-0 text-light fs-14">Lorem Ipsum is simply dummy text of the printing
                                        and
                                        typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                                        text
                                        ever since
                                        the 1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a
                                        type
                                        specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CarouselSlider teamMembers={teamMembers}/>
                </div>
            </div>
            <div className="container">
                <ImagesAnimation/>
            </div>
        </>
    )
}

export default AboutPage;
