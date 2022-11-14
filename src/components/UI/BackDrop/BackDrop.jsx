import React from 'react';

import './BackDrop.css';

const BackDrop = (props) => {
    return (
        <div onClick={props.click} className='back-drop'></div>
    )
}

export default BackDrop