"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import Track1Img from "@/public/images/track-img-1.png";
import Track2Img from "@/public/images/track-img-2.png";
import Track3Img from "@/public/images/track-img-3.png";
import Track4Img from "@/public/images/track-img-4.png";
import Track5Img from "@/public/images/track-img-5.png";
import Track6Img from "@/public/images/track-img-6.png";
import Track7Img from "@/public/images/track-img-7.png";
import oldWomanGif from "@/public/images/Loop4.gif"
import blackWomanGif from "@/public/images/Loop5-2.gif"

//dynamically import Carousel and WaveformAudioPlayer with SSR disabled
const Carousel = dynamic(() => import("react-spring-3d-carousel"), { ssr: false });
const WaveformAudioPlayer = dynamic(() => import("@/app/dashboard/components/WaveformAudioPlayer"), { ssr: false });

// import Track1Audio from "@/public/audios/sample-15s.mp3";

export default function MusicPlayerCarousel() {
    const tracks = [
        { id: 1, title: "Track 1", image: Track1Img, audio: "/audios/sample-3s.mp3" },
        { id: 2, title: "Track 2", image: Track2Img, audio: "/audios/sample-15s.mp3" },
        { id: 3, title: "Track 3", image: Track3Img, audio: "/audios/sample-6s.mp3" },
        { id: 4, title: "Track 4", image: Track4Img, audio: "/audios/sample-9s.mp3" },
        { id: 5, title: "Track 5", image: Track5Img, audio: "/audios/sample-12s.mp3" },
        { id: 6, title: "Track 6", image: Track6Img, audio: "/audios/sample-6s.mp3" },
        { id: 7, title: "Track 7", image: Track7Img, audio: "/audios/sample-9s.mp3" },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const slides = tracks.map((track, index) => ({
        key: index,
        content: (
            <div
                className={`carousel-slide ${index === selectedIndex ? 'active-slide' : ''}`}
                onClick={() => setSelectedIndex(index)}
            >
                <Image src={track.image} alt={`Track ${index + 1}`} className="w-100 h-100 object-fit-cover" />
            </div>
        ),
    }));

    return (
        <div className="music-player-carousel">
            {/* Carousel Section */}
            <div className="carousel-container px-3 mb-3 position-relative">
                <Carousel
                    slides={slides}
                    goToSlide={selectedIndex}
                    offsetRadius={3}
                    showNavigation={false}
                />

                <div className="music-player-gifs d-md-flex d-none justify-content-between align-content-between position-absolute">
                    <Image width={55} height={"auto"} unoptimized={true} src={oldWomanGif} alt="old woman" />
                    <Image width={55} height={"auto"} unoptimized={true} src={blackWomanGif} alt="old woman" />
                </div>
            </div>

            <div className="border-top"></div>

            <div className="audio-player-container px-3 py-2">
                <WaveformAudioPlayer selectedTrackSrc={tracks[selectedIndex].audio} />
            </div>
        </div>
    );
}
