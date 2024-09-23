import React from 'react';
import SidebarElement from './SidebarElement';
import { useNavigate } from 'react-router-dom';
import { ButtonPageElement } from './elementpage/Buttonpage';
import { AlertPageElement } from './elementpage/Alertpages';
import { ProgressPageElement } from './elementpage/Progresspage';
import { InputPageElement } from './elementpage/Inputpage';
import { DropdownPageElement } from './elementpage/DropdownPage';
import { AvatarPageElement } from './elementpage/Avatarpage';
import { LoaderPageElement } from './elementpage/LoaderPage';
import { OtpPageElement } from './elementpage/OtpPage';
import { ToastPageElement } from './elementpage/Toastpage';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigation = (type) => {
    switch(type){
      case 'buttonpage' : navigate('buttonpage'); break;
      case 'alertpage' : navigate('alertpage'); break;
      case 'progresspage' : navigate('progresspage'); break;
      case 'inputpage' : navigate('inputpage'); break;
      case 'dropdownpage' : navigate('dropdownpage'); break;
      case 'avatarpage' : navigate('avatarpage'); break;
      case 'loaderpage' : navigate('loaderpage'); break;
      case 'otppage' : navigate('otppage'); break;
      case 'toastpage' : navigate('toastpage'); break;
      default : <h1>no page found</h1>
    }
  };

  return (
    <div className='w-[20%] px-9 pt-9 h-full'>
      <h1 className='font-semibold'>Components</h1>
      <div className='mt-5 flex flex-col gap-4 pb-9 w-full h-screen overflow-y-hidden hover:overflow-y-auto scrollbar-custom'>
        <SidebarElement element={InputPageElement} onNavigate={handleNavigation} />
        <SidebarElement element={ButtonPageElement} onNavigate={handleNavigation} />
        <SidebarElement element={DropdownPageElement} onNavigate={handleNavigation} />
        <SidebarElement element={AvatarPageElement} onNavigate={handleNavigation} />
        <SidebarElement element={LoaderPageElement} onNavigate={handleNavigation} />
        <SidebarElement element={AlertPageElement} onNavigate={handleNavigation} />
        <SidebarElement element={ProgressPageElement} onNavigate={handleNavigation} />
        <SidebarElement element={ToastPageElement} onNavigate={handleNavigation} />
        <SidebarElement element={OtpPageElement} onNavigate={handleNavigation} />
      </div>
    </div>
  );
};

export default Sidebar;
