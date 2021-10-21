import React from "react";
import './Menultem_15.scss';

const Menultem_15 = ({ name, remoteUrl, size}) => {
    return (
        <div className={`${size} menu-item`}>
            <img className='backgroung-image' src={remoteUrl} alt='' />
            <a href='./hats.html' className='content'>
                <h1 className='title'>{name}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </a>
        </div>
    );
};

export default Menultem_15;