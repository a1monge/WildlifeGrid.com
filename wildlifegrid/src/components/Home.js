// src/components/Home.js
import React, { useEffect } from 'react';
import '../App.css'; // Ensure this CSS file is in the src directory
import Header from './Header'; // Adjust the path if necessary

// Import images
import logo from '../img/logo.png';
import parrot from '../img/parrot.jpg';
import bear from '../img/bear.jpg';
import bird from '../img/bird.jpg';
import bgreport from '../img/bgreport.png';
import bgmap from '../img/bgmap.png';
import bgsearch from '../img/bgsearch.png';

const Home = () => {
    useEffect(() => {
        // Function to show slides
        const showSlides = () => {
            let slideIndex = 0;
            const slides = document.getElementsByClassName('slide');

            const updateSlides = () => {
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = 'none';
                }
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1;
                }
                slides[slideIndex - 1].style.display = 'block';
                setTimeout(updateSlides, 6000); // Change interval
            };

            updateSlides();
        };

        showSlides();
    }, []);

    return (
        <div>
            <Header />
            <div className="slideshow-container">
                <img src={logo} alt="Your Logo" className="logo" />
                <div className="slide fade">
                    <img src={parrot} alt="Slide 1" />
                </div>
                <div className="slide fade">
                    <img src={bear} alt="Slide 2" />
                </div>
                <div className="slide fade">
                    <img src={bird} alt="Slide 3" />
                </div>
            </div>

            <section className="search">
                <h2>Welcome to our platform!</h2>
                <h2>We're on a mission to track and celebrate the biodiversity around us. Report sightings, join our community, and help protect our planet's wildlife.</h2>
            </section>

            <div className="card-container">
                <a href="/report-sightings" className="button">
                    <div className="card">
                        <img src={bgreport} alt="Report Sightings" />
                        <div className="text">REPORT SIGHTING</div>
                    </div>
                </a>
                <a href="/map" className="button">
                    <div className="card">
                        <img src={bgmap} alt="Map" />
                        <div className="text">MAP</div>
                    </div>
                </a>
                <a href="/search" className="button">
                    <div className="card">
                        <img src={bgsearch} alt="Search" />
                        <div className="text">SEARCH</div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Home;
