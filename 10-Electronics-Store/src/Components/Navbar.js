import React, { useState } from 'react'

function Navbar({List, filterItem}) {
    const [activeItem, setActiveItem] = useState('All');

    const handleClick = (list) => {
        setActiveItem(list);  
        filterItem(list);  
      };
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
          {List.map((list, index) => {
            return (
              <button
                key={index}
                className={`btn-group-item ${activeItem === list ? 'active' : ''}`}
                onClick={() => handleClick(list)}
              >
                {list}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  )
}

export default Navbar
