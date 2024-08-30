import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { FaSearch } from 'react-icons/fa';
//import homeImage from './home.jpg';
import slide1Image from './slide1.jpg';
import slide2Image from './slide2.jpg';
import slide3Image from './slide3.jpg';
import slide4Image from './slide4.jpg';
import slide5Image from './slide5.jpg';
import slide6Image from './slide6.jpg';
import slide7Image from './slide7.jpg';

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of image paths for the slider  
    const imageSlides = [
        //homeImage,
        slide1Image,
        slide2Image,
        slide3Image,
        slide4Image,
        slide5Image,
        slide6Image,
        slide7Image
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    // Effect to change the image every 5 seconds  
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSlides.length);
        }, 3000); // Change image every 3000ms (3 seconds)  

        return () => clearInterval(intervalId); // Cleanup interval on unmount  
    }, [imageSlides.length]);

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="menu">
                    <button className="hamburger" onClick={toggleMenu}>☰</button>
                    {isMenuOpen && (
                        <nav className="nav-menu">
                            <Link to="/auth/signup">Sign Up</Link>
                            <Link to="/auth/login">Login</Link>
                            <Link to="/mydashboard/userdashboard">Dashboard</Link>
                            <Link to="/mydashboard/consultantdashboard">Dashboard</Link>
                        </nav>
                    )}
                </div>
                <h1 className="header-title">skinhero</h1>
                <div className="search-container">
                    <button onClick={toggleSearch} className="searchIcon">
                        <FaSearch />
                    </button>
                    {searchVisible && (
                        <input
                            type="text"
                            className="searchInput active"
                            placeholder="Search ..."
                        />
                    )}
                </div>
            </header>
            <main className="main-content">
                <div className="text-content">
                    <h2 className="main-heading">"Transform <br /> your <br /> skin"</h2>
                    <Link to="/auth/login">
                        <button className="get-started-button">Get Started</button>
                    </Link>
                </div>
                <img src={imageSlides[currentImageIndex]} className="main-image" alt="Image slideshow" />
            </main>
        </div>
    );
};

export default HomePage;