import React from "react";
import '../components/Menuitem_15.scss';

const Menuitem_15 = ({ name, remoteUrl, size}) => {
    return (
        <div className={`${size} menu-item`}>
            <img className='background-image' src={remoteUrl} alt='' />
            <a href='./hats.html' className='content'>
                <h1 className='title'>{name}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </a>
        </div>
    );
};

export default Menuitem_15;