"use client"
import Image from "next/image";

import SlickSlider from "react-slick";
import LearnersItemCommaIcon from "@/public/icons/learner-item-comma.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider({data}){
    const learnersSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="learners pt-5 pb-100">
            <div className="px-100px px-md-0 px-3 mx-auto">
                <h2 className="learners-h2 text-dark text-center mb-5">Learners</h2>
                <SlickSlider {...learnersSliderSettings}>
                    {
                        data.map((data, i) => (
                            <div key={i} className="learners-slide-wrapper">
                                <div className="learners-slide bg-secondary rounded-4 overflow-hidden">
                                    <div className="learners-slide-main px-4 pt-4">
                                        <Image width={45} src={LearnersItemCommaIcon} alt="image"/>
                                        <p className="mt-4 mb-0 text-lighter">{data.p}</p>
                                        <Image className="d-block ms-auto position-relative learners-item-man-gif"
                                               width={90}
                                               src={data.manGif} alt="image"/>
                                    </div>
                                    <div
                                        className="learners-slide-footer text-white px-4 py-2 d-flex align-items-center gap-3">
                                        <Image width={38} height={38} className="rounded-2" alt="image"
                                               src={data.profilePic}/>
                                        <div>
                                            <h5 className="mb-2">{data.personName}</h5>
                                            <div className="fs-12">{data.personFamilyStatus}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </SlickSlider>
            </div>
        </section>
    )
}

export default Slider
