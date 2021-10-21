import React, {useState} from 'react';
import items from './Menu-items-data';
import './Directory_15.scss';
import Menuitem_15 from './Menuitem_15';

const Directory_15 = () => {
  const [menuItems, setMenItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) =>{
          const { id, name, remoteUrl, size} =item;
          return(
            <Menuitem_15
            id={id}
            name={name}
            remoteUrl={remoteUrl}
            size={size}
          />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_15;
