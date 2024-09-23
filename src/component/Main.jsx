import React from 'react';
import { Link, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import { GiEvilEyes } from 'react-icons/gi';
import Authentication from './Authentication';
import Content from './Content';

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className=' flex flex-col w-full h-full bg-[#080808] text-white'>
      <header className='fixed top-0 left-0 w-full bg-[#000000a0] backdrop-blur-md z-10'>
        <nav className='flex justify-between items-center p-3 gap-3'>
          <div className='flex items-center gap-3'>
            <div onClick={() => handleNavigation('/')} className='font-medium flex items-center gap-3 cursor-pointer'>
              <GiEvilEyes className='text-3xl rounded-full' />
              <span className='mr-2 text-xl font-notosans font-semibold'>Xsans</span>
            </div>
            <div className='flex items-center gap-5 text-sm text-slate-400 font-notosans'>
              <Link to="/" className={`hover:text-white ${isActive('/') ? 'text-white' : 'text-slate-400'}`}>Docs</Link>
              <Link to="/content" className={`hover:text-white ${isActive('/content/buttonpage') ? 'text-white' : 'text-slate-400'}`}>Component</Link>
              <Link to='/blocks' className={`hover:text-white ${isActive('/blocks') ? 'text-white' : 'text-slate-400'}`}>Blocks</Link>
              <Link to='/theme' className={`hover:text-white ${isActive('/theme') ? 'text-white' : 'text-slate-400'}`}>Theme</Link>
              <Link to='/charts' className={`hover:text-white ${isActive('/charts') ? 'text-white' : 'text-slate-400'}`}>Charts</Link>
              <Link to='/colors' className={`hover:text-white ${isActive('/colors') ? 'text-white' : 'text-slate-400'}`}>Colors</Link>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Link to='/login' className={`hover:text-white ${isActive('/login') ? 'text-white' : 'text-slate-400'}`}>Login</Link>
          </div>
        </nav>
      </header>

      <main className='pt-[60px] flex flex-col w-full h-full'>
        <div className='flex w-full h-full items-center justify-center'>
           <Outlet/>
        </div>
      </main>
    </div>
  );
};

export default Main;
