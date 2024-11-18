import React, { useEffect, useState } from 'react';
import './scroll-btn.css';
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`scroll-up-btn flex justify-center items-center ${isVisible ? 'show' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <MdKeyboardArrowUp />
        </div>
    )
}

export default ScrollBtn;