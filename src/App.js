import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './component/Main';
import { AlertPageContent } from './component/elementpage/Alertpages';
import { ButtonPageContent } from './component/elementpage/Buttonpage';
import { ProgressPageContent } from './component/elementpage/Progresspage';
import Homepage from './component/Homepage';
import Authentication from './component/Authentication';
import Content from './component/Content';
import { InputPageContent } from './component/elementpage/Inputpage';
import { DropdownPageContent } from './component/elementpage/DropdownPage';
import { AvatarPageContent } from './component/elementpage/Avatarpage';
import { LoaderPageContent } from './component/elementpage/LoaderPage';
import { OtpPageContent } from './component/elementpage/OtpPage';
import { ToastPageContent } from './component/elementpage/Toastpage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Homepage/>,
        },
        {
          path: 'content',
          element: <Content/>,
          children: [
            {
              path: 'buttonpage',
              element: <ButtonPageContent/>,
            },
            {
              path: 'alertpage',
              element: <AlertPageContent/>,
            },
            {
              path: 'progresspage',
              element: <ProgressPageContent/>,
            },
            {
              path: 'inputpage',
              element: <InputPageContent/>,
            },
            {
              path: 'dropdownpage',
              element: <DropdownPageContent/>,
            },
            {
              path: 'avatarpage',
              element: <AvatarPageContent/>,
            },
            {
              path: 'loaderpage',
              element: <LoaderPageContent/>,
            },
            {
              path: 'otppage',
              element: <OtpPageContent/>,
            },
            {
              path: 'toastpage',
              element: <ToastPageContent/>,
            },
          ],
        },
        {
          path: 'login',
          element: <Authentication/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
