import React from 'react';

const SidebarElement = ({ element, onNavigate }) => {
  return (
    <div className='flex items-center gap-3'>
      <button className='text-slate-400 hover:text-white cursor-pointer'
        onClick={() => onNavigate(element.type)} // Navigate based on type
      >
        {element.label}
      </button>
    </div>
  );
};

export default SidebarElement;
