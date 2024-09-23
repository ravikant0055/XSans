import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex w-full h-full'>
        <Sidebar />
        <div className='flex-1 h-full overflow-y-auto'>
          <Outlet />
        </div>
      </div>
      <div className='p-7 border-t border-slate-500'>
        <h1>All rights reserved</h1>
      </div>
    </div>
  );
};

export default Content;
