import React from 'react';

import NavTop from './NavTop/NavTop';
import NavMain from './NavMain/NavMain';
import LoginModal from '../LoginModal/LoginModal';

import './Header.css';

const Header = (props) => {

    return (
        <>
            <header>
                <NavTop click={props.showModalHandler} clickChangeStyle={props.changeStyleHandle} />
                <NavMain show={props.showDropDown} click={props.showDropDownHandler} styled={props.styled} clickChangeStyle={props.changeStyleHandle} />
                <LoginModal close={props.showModalHandler} showModal={props.showModalState} />
            </header>
        </>

    )

}

export default Header