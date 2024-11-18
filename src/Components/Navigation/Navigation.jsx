import React, {useState, useEffect} from 'react';
import logo from '../../Assets/Images/ttllogo.png';
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import './navigation.css';
import SideBar from './SideBar';


const Navigation = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [isNavScrolled, setIsNavScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // console.log("Scroll Position:", window.scrollY);
            // console.log("Viewport Height:", window.innerHeight);

            // Check if scrolled past 50vh (viewport height)
            if (window.scrollY > window.innerHeight / 2) {
                setIsHeaderVisible(false);
                setIsNavScrolled(true);
            } else {
                setIsHeaderVisible(true);
                setIsNavScrolled(false);
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <section className='appbar'>
    {/* Header - toggles visibility on scroll */}
    <header className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
        <span className='header-text'>UNLOCK THE PRE-RACE PASTE</span>
        <span>Find the sprint to be finish! 1 FREE with a 7 pack</span>
    </header>

    {/* Navbar - changes background color on scroll */}
    <nav className={`navbar ${isNavScrolled ? 'scrolled' : ''} 
    ${isHeaderVisible ? 'below-header' : 'at-top'} `}>
        <div className='logo'>
            <img src={logo} alt="TTL Logo" />
        </div>
        <ul>
            <li>Shop All</li>
            <li>Shop by Benefits</li>
            <li>About</li>
            <li>Bundles</li>
            <li>Contact</li>
        </ul>
        <ul className='nav-icon'>
            <li><CiSearch /></li>
            <li><CiShoppingCart /></li>
            <li><CiUser /></li>
        </ul>
        <SideBar />
    </nav>
</section>
  )
}

export default Navigation;