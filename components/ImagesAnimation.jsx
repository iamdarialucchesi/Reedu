"use client";
import React, {useEffect, useRef} from "react";
import Image from "next/image";
import {handleScroll} from "@/public/customjs/custom";
import Git1 from "@/public/images/Loop1-1.gif";
import Git2 from "@/public/images/Loop4.gif";
import Git3 from "@/public/images/Loop5-2.gif";
import Git4 from "@/public/images/Loop6-1.gif";
import Git5 from "@/public/images/Loop2.gif";

function ImagesAnimation(){
    const gifSectionRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return(
        <>
            <div className='hidden-height d-none d-lg-block'></div>
            <section className='gif-section d-none d-lg-block' ref={gifSectionRef}>
                <div className=''>
                    <div className='row'>
                        <div className='col-3 gif-image text-start position-relative'>
                            <Image className='gif-one position-absolute' alt="animated-gif" unoptimized={true}
                                   src={Git1}/>
                        </div>
                        <div className='col-6 gif-image text-center position-relative'>
                            <Image className="gif-two position-absolute" alt="animated-gif" unoptimized={true}
                                   src={Git2}/>
                            <Image className="gif-three position-absolute" alt="animated-gif" unoptimized={true}
                                   src={Git3}/>
                            <Image className="gif-four position-absolute" alt="animated-gif" unoptimized={true}
                                   src={Git4}/>
                        </div>
                        <div className='col-3 gif-image text-end position-relative'>
                            <Image className="gif-five position-absolute" alt="animated-gif" unoptimized={true}
                                   src={Git5}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImagesAnimation;
