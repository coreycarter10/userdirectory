import React from 'react';

const ArrowButton = ({text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default ArrowButton;