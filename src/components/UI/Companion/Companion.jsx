import React from 'react';
import { Link } from 'react-router-dom';

import './Companion.css';

const Companion = (props) => {   
    return (
        <div className='companion-banner'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='companion-text'>
                        <h3>{props.title}</h3>
                    </div>
                    <div className='companion-link d-flex justify-content-between align-items-center'>
                        <Link to='/' className='page-link'><span><i className='fa fa-home'></i></span>خانه</Link>
                        <a href='#' className='nav-link mx-1'>{props.title}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companion