"use client";
import {useEffect, useRef} from "react";
import Image from "next/image";

import {useModule} from "@/app/context/ModuleContext";
import BeginHeader from "@/app/dashboard/components/BeginHeader";
import ModuleOne from "@/app/dashboard/begin/components/ModuleOne";
import DailyQuest from "@/app/dashboard/begin/components/DailyQuest";
import ModuleTwo from "@/app/dashboard/begin/components/ModuleTwo";
import ModuleThree from "@/app/dashboard/begin/components/ModuleThree";
import ModuleFour from "@/app/dashboard/begin/components/ModuleFour";
import ModuleFive from "@/app/dashboard/begin/components/ModuleFive";
import ModuleSix from "@/app/dashboard/begin/components/ModuleSix";
import ModuleSeven from "@/app/dashboard/begin/components/ModuleSeven";
import ModuleEight from "@/app/dashboard/begin/components/ModuleEight";
import ModuleNine from "@/app/dashboard/begin/components/ModuleNine";

import genicAi from "@/public/icons/Genei AI.svg";
import arrowUp from "@/public/icons/up arrow.svg";

export default function BeginPage() {
    const {count} = useModule();
    const moduleOneRef = useRef(null);
    const moduleTwoRef = useRef(null);
    const moduleThreeRef = useRef(null);
    const moduleFourRef = useRef(null);
    const moduleFiveRef = useRef(null);
    const moduleSixRef = useRef(null);
    const moduleSevenRef = useRef(null);
    const moduleEightRef = useRef(null);
    const moduleNineRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (count === 1) {
            moduleOneRef.current?.scrollIntoView({behavior: "smooth"});
        } else if (count === 2) {
            moduleTwoRef.current?.scrollIntoView({behavior: "smooth"});
        } else if (count === 3) {
            moduleThreeRef.current?.scrollIntoView({behavior: "smooth"});
        } else if (count === 4) {
            moduleFourRef.current?.scrollIntoView({behavior: "smooth"});
        } else if (count === 5) {
            moduleFiveRef.current?.scrollIntoView({behavior: "smooth"});
        } else if (count === 6) {
            moduleSixRef.current?.scrollIntoView({behavior: "smooth"});
        } else if (count === 7) {
            moduleSevenRef.current?.scrollIntoView({behavior: "smooth"});
        } else if (count === 8) {
            moduleEightRef.current?.scrollIntoView({behavior: "smooth"});
        } else if (count === 9) {
            moduleNineRef.current?.scrollIntoView({behavior: "smooth"});
        }
    }, [count]);

    function handleTopScroll() {
        if (containerRef.current) {
            // section scroll
            containerRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // window scroll
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <div className="p-2 p-md-4">
            <div className="pb-4">
                <BeginHeader/>
            </div>

            <div className="row">
                <div className="col-md-7 col-lg-8 order-1 order-md-0">
                    <div ref={containerRef}
                         className="mb-3 mb-md-0 scrollbar-hidden overflow-hidden overflow-y-scroll custom-viewport-height-82">
                        <div ref={moduleOneRef}
                             className={`${count >= 1 ? "" : "opacity-25"}`}>
                            <ModuleOne/>
                        </div>
                        <div ref={moduleTwoRef}
                             className={`${count >= 2 ? "" : "opacity-25"}`}>
                            <ModuleTwo/>
                        </div>
                        <div ref={moduleThreeRef}
                             className={`${count >= 3 ? "" : "opacity-25"}`}>
                            <ModuleThree/>
                        </div>
                        <div ref={moduleFourRef}
                             className={`${count >= 4 ? "" : "opacity-25"}`}>
                            <ModuleFour/>
                        </div>
                        <div ref={moduleFiveRef}
                             className={`${count >= 5 ? "" : "opacity-25"}`}>
                            <ModuleFive/>
                        </div>
                        <div ref={moduleSixRef}
                             className={`${count >= 6 ? "" : "opacity-25"}`}>
                            <ModuleSix/>
                        </div>
                        <div ref={moduleSevenRef}
                             className={`${count >= 7 ? "" : "opacity-25"}`}>
                            <ModuleSeven/>
                        </div>
                        <div ref={moduleEightRef}
                             className={`${count >= 8 ? "" : "opacity-25"}`}>
                            <ModuleEight/>
                        </div>
                        <div ref={moduleNineRef}
                             className={`${count >= 9 ? "" : "opacity-25"}`}>
                            <ModuleNine/>
                        </div>

                        {/*position icons*/}
                        <div className="position-fixed fixed-position-bottom-icons z-5 d-md-none d-lg-block">
                            <div className="d-flex flex-column gap-3 align-items-center">
                                <Image src={genicAi} alt="genic-icon" width={60} height={60}/>
                                <button onClick={handleTopScroll} className="btn border-0 p-0">
                                    <Image src={arrowUp} alt="up-arrow" width={40} height={40} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-4 order-0 order-md-1">
                    <div className="mb-3 mb-md-0">
                        <DailyQuest/>
                    </div>
                </div>
            </div>
        </div>
    )
}
