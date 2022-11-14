import React, { useState } from 'react';

import Search from '../Search/Search';
import Cart from '../../Cart/Cart';


const NavTop = (props) => {
    const [showcart, setShowCart] = useState(false)

    const showCartItem = (event) => {
        event.preventDefault();
        if (showcart) {
            setShowCart(false)
        } else {
            setShowCart(true)
        }
    }
    return (
        <div className='nav-top'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <button onClick={props.clickChangeStyle} className='btn-bars d-flex align-items-center d-lg-none'><i className="fa fa-bars"></i></button>
                    <div className='brand-icon d-none d-lg-flex align-items-center'>
                        <h3>FcMarket</h3>
                    </div>
                    <Search />
                    <div className='nav-profile'>
                        <div className='nav-profile-item d-flex align-items-center'>
                            <a onClick={(event) => props.click(event)} style={{ cursor: 'pointer' }} className='d-flex mx-3' href={void (0)}><span><i className='fa fa-user'></i></span><span className='link-font d-none d-lg-block'>ورود</span></a>

                            <a onClick={(event) => showCartItem(event)} style={{ cursor: 'pointer' }} className='d-flex' href={void (0)}><span className='count-cart'>1</span><span><i className='fa fa-shopping-cart'></i></span><span className='link-font d-none d-lg-block'>سبد خرید</span></a>
                            <Cart show={showcart} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTop