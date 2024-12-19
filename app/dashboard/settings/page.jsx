import Image from "next/image";

import TitleNameHeader from "@/app/dashboard/components/TitleNameHeader"
import CustomInputSlider from "@/app/dashboard/components/CustomInputSlider"
import MusicPlayerCarousel from "@/app/dashboard/components/MusicPlayerCarousel";

import VolumeBarsIcon from "@/public/icons/volume-bars-red-gradient.svg"
import QuestionMarkIcon from "@/public/icons/question-mark-red-gradient.svg"
import SunRedIcon from "@/public/icons/sun-red-gradient.svg"
import MusicNoteRedIcon from "@/public/icons/music-note-red-gradient.svg"
import KidGirlGif from "@/public/images/Loop1-1.gif"
import KidBoyGif from "@/public/images/Loop6-1.gif"

export default function SettingsPage() {


    return (
        <div className="settings-container position-relative">
            <div className="bg-characters d-flex justify-content-between align-items-center w-100 overflow-hidden">
                <Image className="gif-1 position-relative" width={180} height={"100%"} unoptimized={true}
                       src={KidGirlGif} alt={"Kid Girl Gif"}/>
                <Image className="gif-2 position-relative" width={180} height={"100%"} unoptimized={true}
                       src={KidBoyGif} alt={"Kid Girl Gif"}/>
            </div>
            <div className="border-bottom px-2">
                <TitleNameHeader title="Settings"/>
            </div>
            <div className="p-2 p-md-3">
                <div className="settings-accordion accordion d-flex flex-column gap-4 position-relative"
                     id="accordionFlushExample">
                    <div className="accordion-item bg-whiteLow rounded-2">
                        <h2 className="accordion-header px-3">
                            <button className="accordion-button collapsed shadow-none bg-transparent px-0 py-3"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                <div className="d-flex align-items-center gap-3">
                                    <Image src={VolumeBarsIcon} width={22} height={22} alt="Volume bars"/>
                                    <div>
                                        <h5 className="fw-bold text-darkLow mb-1">Sound</h5>
                                        <p className="mb-0 text-lighter fs-14">Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="w-100 px-3">
                                <div className="border-top"></div>
                            </div>
                            <div className="accordion-body p-3">
                                <div className="settings-accordion-item-1-body">
                                    <div>
                                        <h5 className="fw-bold text-darkLow mb-3">Avatar</h5>
                                        <CustomInputSlider inputId="custom-input-slider-1" minValue={0} maxValue={100}
                                                           sliderLabelMin="Low"
                                                           sliderLabelMax="High"/>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-darkLow mb-3">FX</h5>
                                        <CustomInputSlider inputId="custom-input-slider-2" minValue={200} maxValue={900}
                                                           sliderLabelMin="Low"
                                                           sliderLabelMax="High"/>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-darkLow mb-3">Toggle</h5>
                                        <CustomInputSlider inputId="custom-input-slider-3" minValue={120} maxValue={663}
                                                           sliderLabelMin="Low"
                                                           sliderLabelMax="High"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item bg-whiteLow rounded-2">
                        <h2 className="accordion-header px-3">
                            <button className="accordion-button collapsed shadow-none bg-transparent px-0 py-3"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                <div className="d-flex align-items-center gap-3">
                                    <Image src={SunRedIcon} width={22} height={22} alt="Volume bars"/>
                                    <div>
                                        <h5 className="fw-bold text-darkLow mb-1">Brightness</h5>
                                        <p className="mb-0 text-lighter fs-14">Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="w-100 px-3">
                                <div className="border-top"></div>
                            </div>
                            <div className="accordion-body p-3">
                                <div className="settings-accordion-item-1-body">
                                    <div>
                                        <h5 className="fw-bold text-darkLow mb-3">Level</h5>
                                        <CustomInputSlider inputId="custom-input-slider-4" minValue={100} maxValue={250}
                                                           sliderLabelMin="Dim"
                                                           sliderLabelMax="Bright"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item bg-whiteLow rounded-2">
                        <h2 className="accordion-header px-3">
                            <button className="accordion-button collapsed shadow-none bg-transparent px-0 py-3"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                <div className="d-flex align-items-center gap-3">
                                    <Image src={MusicNoteRedIcon} width={22} height={22} alt="Volume bars"/>
                                    <div>
                                        <h5 className="fw-bold text-darkLow mb-1">Ambient Music</h5>
                                        <p className="mb-0 text-lighter fs-14">Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="w-100 px-3">
                                <div className="border-top"></div>
                            </div>
                            <h5 className="fw-bold text-darkLow mb-1 ps-3 mt-3">Select Track</h5>
                            <div className="accordion-body p-0 overflow-hidden">
                                <MusicPlayerCarousel/>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item bg-whiteLow rounded-2">
                        <h2 className="accordion-header px-3">
                            <button className="accordion-button collapsed shadow-none bg-transparent px-0 py-3"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                <div className="d-flex align-items-center gap-3">
                                    <Image src={QuestionMarkIcon} width={22} height={22} alt="Volume bars"/>
                                    <div>
                                        <h5 className="fw-bold text-darkLow mb-1">Help</h5>
                                        <p className="mb-0 text-lighter fs-14">Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="w-100 px-3">
                                <div className="border-top"></div>
                            </div>
                            <div className="accordion-body p-3">
                                <h5 className="fw-bold text-darkLow mb-1">Email</h5>
                                <p className="mb-0 text-lighter fs-14">Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.</p>

                                <h5 className="fw-bold text-darkLow mt-4">FAQs</h5>


                                <div className="settings-help-accordion accordion d-flex flex-column gap-3"
                                     id="accordionExample">
                                    <div className="accordion-item border-0 bg-transparent">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button bg-transparent shadow-none px-0 py-2"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                <h5 className="fw-bold text-darkLow m-0">How does Credit Recovery
                                                    work?</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show border-bottom"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-0 pt-2 pb-3 text-lighter fs-14">
                                                Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item border-0 bg-transparent">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed bg-transparent shadow-none px-0 py-2"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                                <h5 className="fw-bold text-darkLow m-0">How does Credit Recovery
                                                    work?</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse border-bottom"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-0 pt-2 pb-3 text-lighter fs-14">
                                                Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item border-0 bg-transparent">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed bg-transparent shadow-none px-0 py-2"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                                <h5 className="fw-bold text-darkLow m-0">How does Credit Recovery
                                                    work?</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse border-bottom"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-0 pt-2 pb-3 text-lighter fs-14">
                                                Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item border-0 bg-transparent">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed bg-transparent shadow-none px-0 py-2"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false"
                                                aria-controls="collapseFour">
                                                <h5 className="fw-bold text-darkLow m-0">How does Credit Recovery
                                                    work?</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse border-bottom"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-0 pt-2 pb-3 text-lighter fs-14">
                                                Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item border-0 bg-transparent">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed bg-transparent shadow-none px-0 py-2"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="false"
                                                aria-controls="collapseFive">
                                                <h5 className="fw-bold text-darkLow m-0">How does Credit Recovery
                                                    work?</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse border-bottom"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-0 pt-2 pb-3 text-lighter fs-14">
                                                Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.Lorem Ipsum is simply dummy text of
                                                the
                                                printing and typesetting industry.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <h5 className="fw-bold text-darkLow mt-4">Corporate</h5>
                                    <p className="mb-0 fs-14 text-lighter">Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <h6 className="text-dark-lower mb-0 text-center mt-5">All Rights Reserved, ReEdu 2024 Version 1.1</h6>
            </div>
        </div>
    )
}
