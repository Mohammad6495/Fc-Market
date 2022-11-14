import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkItem = (props) => {
    return (
        <li className={props.className}>
            <NavLink to={props.href}>{props.title}</NavLink>
            {props.children}
        </li>
    )
}

export default LinkItem