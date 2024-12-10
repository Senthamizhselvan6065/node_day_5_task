import React from 'react';
import Hero from './components/Hero';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PasswordForgot from './components/PasswordForgot';
import PasswordReset from './components/PasswordReset';
import PageNotFound from './components/PageNotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
    
    const router = createBrowserRouter([
       {
         path: "/",
         element: <Hero />
       },
       {
         path: "/sign_up",
         element: <SignUp />
       },
       {
         path: "/sign_in",
         element: <SignIn />
       },
       {
         path: "/password/forgot",
         element: <PasswordForgot />
       },
       {
         path: "/password/reset/:token",
         element: <PasswordReset />
       },
       {
         path: "*",
         element: <PageNotFound />
       },
    ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App