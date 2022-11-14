import React, { useEffect, useState } from 'react';

import './ScrollUp.css';

const ScrollUp = () => {

    const [scroll, setScroll] = useState(false)

    const scrollTopHandler = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }

    useEffect(() => {
        scrollTopHandler()
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div onClick={goToTop} className={scroll ? 'show-scroll' : 'scroll-up'}><i className='fa fa-angle-up'></i></div>
    )
}

export default ScrollUp