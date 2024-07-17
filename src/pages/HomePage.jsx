import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import image from '/home.png';
import { FaSearch } from 'react-icons/fa';

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    return (
        <div className="home-container">
            <header className="header">
                <div className="menu">
                    <button className="hamburger" onClick={toggleMenu}>☰</button>
                    {isMenuOpen && (
                        <nav className="nav-menu">
                            <Link to="/auth/signup">Sign Up</Link>
                            <Link to="/auth/login">Login</Link>
                            <Link to="/dashboard">Dashboard</Link>
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
                    <Link to="/auth/signup">
                        <button className="get-started-button">Get Started</button>
                    </Link>
                </div>
                <img src={image} alt="Transform your skin" className="main-image" />
            </main>
        </div>
    );
};

export default HomePage;