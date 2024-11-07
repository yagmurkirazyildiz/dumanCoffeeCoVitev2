// components/molecules/Card.js
import React from 'react';
import './Card.css'; // Kendi CSS dosyan

function Card({ title, description, image }) {
    return (
        <div className='custom-card'>
            <div className='custom-card-image'>
                <img src={image} alt={title || "Coffee"} />
            </div>
            <div className='custom-card-content'>
                <h5 className='custom-card-title'>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;
