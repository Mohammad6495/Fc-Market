import React from 'react';

import './BackDropModal.css';

const BackDropModal = (props) => {
    return (
        <div onClick={props.click} className='back-drop-modal'></div>
    )
}

export default BackDropModal