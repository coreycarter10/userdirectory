import React from 'react';

const PillButton = ({text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default PillButton;