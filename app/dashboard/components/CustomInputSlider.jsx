"use client"
import React, {useEffect, useState} from 'react';

// const CustomRangeInput = () => {
//     const [sliderValue, setSliderValue] = useState(500);
//
//     const handleSliderChange = (event) => {
//         setSliderValue(event.target.value);
//     };
//
//     useEffect(() => {
//         console.log("slider", sliderValue)
//     }, [sliderValue]);
//
//     return (
//         <div className="slider-container">
//             <input
//                 type="range"
//                 min="99"
//                 max="663"
//                 value={sliderValue}
//                 className="form-range custom-range"
//                 id="myRange"
//                 onChange={handleSliderChange}
//                 style={{
//                     height: 7,
//                     borderRadius: 20,
//                     background: `linear-gradient(to right, #4e31f5 ${sliderValue}%, #e0e0e0 ${sliderValue}%)`,
//                 }}
//             />
//         </div>
//     );
// };

function CustomInputSlider({inputId, minValue, maxValue, sliderLabelMin,sliderLabelMax, stepSize}) {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event) => {
        setSliderValue(Number(event.target.value));
    };

    // const minValue = 50;
    // const maxValue = 675;

    // Calculate the percentage
    const calculatePercentage = () => {
        return ((sliderValue - minValue) / (maxValue - minValue)) * 100;
        // return (sliderValue / maxValue) * 100;
    };


    return (
        <div className="custom-input-slider-container">
            <label htmlFor={inputId} className="slider-label d-flex justify-content-between align-items-center">
                <div className="text-lighter">{sliderLabelMin}</div>
                <div className="text-lighter">{sliderLabelMax}</div>
            </label>
            <input
                type="range"
                min={minValue}
                max={maxValue}
                {...(stepSize? { step: stepSize } : {})}
                value={sliderValue}
                className="form-range custom-input-slider"
                id={inputId}
                onChange={handleSliderChange}
                style={{
                    height: 6.5,
                    borderRadius: 20,
                    background: `linear-gradient(to right, #4e31f5 ${calculatePercentage()}%, #e0e0e0 ${calculatePercentage()}%)`,
                }}
            />
        </div>
    );
}


export default CustomInputSlider;

