import React, {useEffect, useRef, useState} from 'react';
import WaveSurfer from 'wavesurfer.js';
import Image from "next/image";

import prevTrackArrowIcon from "@/public/icons/prev-track-arrow-dark-grey.svg"
import nextTrackArrowIcon from "@/public/icons/next-track-arrow-dark-grey.svg"
import playTrackArrowIcon from "@/public/icons/play-bars-dark-grey.svg"
import pauseTrackArrowIcon from "@/public/icons/pause-arrow-dark-grey.svg"
import speakerSoundWavesIcon from "@/public/icons/speaker-with-sound-waves-dark-grey.svg"

const WaveformAudioPlayer = ({selectedTrackSrc}) => {
    const waveformRef = useRef(null);
    const waveSurferRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    // const [sliderValue, setSliderValue] = useState(0);

    const minValue = 0;
    const maxValue = 1;
    // const handleSliderChange = (event) => {
    //     setSliderValue(Number(event.target.value));
    // };

    const calculatePercentage = () => {
        return ((volume - minValue) / (maxValue - minValue)) * 100;
        // return (sliderValue / maxValue) * 100;
    }

    // Initialize WaveSurfer instance on mount
    // useEffect(() => {
    useEffect(() => {


        const controller = new AbortController();
        const signal = controller.signal;

        waveSurferRef.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#4334dd',
            progressColor: '#4334dd',
            cursorColor: '#3232AA',
            barWidth: 2.5,
            barGap: 3.5,
            height: 45,
            // url: "/audios/sample-3s.mp3"
            url: selectedTrackSrc
        });

        waveSurferRef.current.on('ready', () => {
            waveSurferRef.current.pause();   // Ensure track is paused
            waveSurferRef.current.seekTo(0); // Reset playhead to start
            setIsPlaying(false);             // Ensure isPlaying state is false
        });

        waveSurferRef.current.on('finish', () => {
            setIsPlaying(false);
        });

        // very old
        // const loadAudio = async () => {
        //     try {
        //         const response = await fetch('/audios/sample-15s.mp3', { signal });
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         const blob = await response.blob();
        //         const audioURL = URL.createObjectURL(blob);
        //         waveSurferRef.current.load(audioURL);
        //     } catch (error) {
        //         if (error.name === 'AbortError') {
        //             console.log('Audio load aborted');
        //         } else {
        //             console.error('Error loading audio:', error);
        //         }
        //     }
        // };
        //
        // loadAudio();

        // old
        // This IIFE allows us to use async/await within useEffect without making the effect itself async
        // (async () => {
        //     try {
        //         const response = await fetch('/audios/sample-15s.mp3', { signal });
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         const blob = await response.blob();
        //         const audioURL = URL.createObjectURL(blob);
        //         waveSurferRef.current.load(audioURL);
        //     } catch (error) {
        //         if (error.name === 'AbortError') {
        //             console.log('Audio load aborted');
        //         } else {
        //             console.error('Error loading audio:', error);
        //         }
        //     }
        // })();

        // Cleanup on unmount: abort fetch and destroy WaveSurfer instance
        return () => {
            controller.abort();
            if (waveSurferRef.current) {
                waveSurferRef.current.destroy();
            }
        };
    }, [selectedTrackSrc]);

    // Toggle play/pause
    const togglePlay = () => {
        if (waveSurferRef.current.isPlaying()) {
            waveSurferRef.current.pause();
            setIsPlaying(false);
        } else {
            waveSurferRef.current.play();
            setIsPlaying(true);
        }
    };

    // Change volume
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        waveSurferRef.current.setVolume(newVolume);
    };

    // Skip to the previous/next track (mock functionality)
    const playPrevTrack = () => {
        waveSurferRef.current.seekTo(0); // Mock previous track by seeking to the start
        setIsPlaying(true);
        waveSurferRef.current.play();
    };

    const playNextTrack = () => {
        waveSurferRef.current.seekTo(0.9); // Mock next track by seeking to 90%
        setIsPlaying(true);
        waveSurferRef.current.play();
    };

    return (
        <div className="audioPlayerContainer d-flex flex-md-row flex-column align-items-md-center gap-3">
            {/* Audio Controls on the Left */}
            <div className="d-flex align-items-center justify-content-between">
                <div className="audio-controls d-flex align-items-center gap-2">
                    <button className="border-0 p-0 bg-transparent d-flex align-items-center" onClick={playPrevTrack}>
                        <Image width={20} height={20} src={prevTrackArrowIcon} alt="prev track arrow"/>
                    </button>
                    <button className="border-0 p-0 bg-transparent d-flex align-items-center" onClick={togglePlay}>
                        <Image style={{position: "relative", left: (isPlaying) ? 0 : 2}} width={(isPlaying) ? 20 : 20}
                               height={(isPlaying) ? 20 : 16}
                               src={(isPlaying) ? playTrackArrowIcon : pauseTrackArrowIcon} alt="prev track arrow"/>
                    </button>
                    <button className="border-0 p-0 bg-transparent d-flex align-items-center" onClick={playNextTrack}>
                        <Image width={20} height={20} src={nextTrackArrowIcon} alt="prev track arrow"/>
                    </button>
                </div>

                {/* Volume Control on the Right */}
                <div className="volume-controls d-md-none d-flex align-items-center gap-2">
                    <Image width={22} height={22} src={speakerSoundWavesIcon} alt="speaker"/>
                    {/*<input*/}
                    {/*    type="range"*/}
                    {/*    min="0"*/}
                    {/*    max="1"*/}
                    {/*    step="0.01"*/}
                    {/*    value={volume}*/}
                    {/*    onChange={handleVolumeChange}*/}
                    {/*    className="volumeSlider"*/}
                    {/*/>*/}
                    <input
                        type="range"
                        min={minValue}
                        max={maxValue}
                        step="0.01"
                        value={volume}
                        className="form-range custom-input-slider custom-input-slider-mini"
                        id={"volume-level-2"}
                        onChange={handleVolumeChange}
                        style={{
                            height: 3,
                            borderRadius: 20,
                            background: `linear-gradient(to right, #4e31f5 ${calculatePercentage()}%, #e0e0e0 ${calculatePercentage()}%)`,
                        }}
                    />
                    <span style={{width: 38.5}} className="fs-14 fw-semibold">{Math.round(volume * 100)}%</span>
                </div>
            </div>
            {/* Waveform in the Center */}
            <div ref={waveformRef} className="waveform flex-1"/>

            {/* Volume Control on the Right */}
            <div className="volume-controls d-md-flex d-none align-items-center gap-2">
                <Image width={22} height={22} src={speakerSoundWavesIcon} alt="speaker"/>
                {/*<input*/}
                {/*    type="range"*/}
                {/*    min="0"*/}
                {/*    max="1"*/}
                {/*    step="0.01"*/}
                {/*    value={volume}*/}
                {/*    onChange={handleVolumeChange}*/}
                {/*    className="volumeSlider"*/}
                {/*/>*/}
                <input
                    type="range"
                    min={minValue}
                    max={maxValue}
                    step="0.01"
                    value={volume}
                    className="form-range custom-input-slider custom-input-slider-mini"
                    id={"volume-level"}
                    onChange={handleVolumeChange}
                    style={{
                        height: 3,
                        borderRadius: 20,
                        background: `linear-gradient(to right, #4e31f5 ${calculatePercentage()}%, #e0e0e0 ${calculatePercentage()}%)`,
                    }}
                />
                <span style={{width: 38.5}} className="fs-14 fw-semibold">{Math.round(volume * 100)}%</span>
            </div>
        </div>
    );
};

export default WaveformAudioPlayer;
