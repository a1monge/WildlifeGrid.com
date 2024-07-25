// src/components/Slides.js
import React, { useEffect } from 'react';

const Slides = () => {
    useEffect(() => {
        let slideIndex = 0;
        const slides = document.getElementsByClassName('slide');

        const showSlides = () => {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = 'block';
            setTimeout(showSlides, 6000); // Change 6000 to adjust interval
        };

        showSlides();
    }, []);

    return (
        <div className="slideshow-container">
            <div className="slide fade">
                <img src="img/parrot.jpg" alt="Slide 1" />
            </div>
            <div className="slide fade">
                <img src="img/bear.jpg" alt="Slide 2" />
            </div>
            <div className="slide fade">
                <img src="img/bird.jpg" alt="Slide 3" />
            </div>
        </div>
    );
};

export default Slides;
