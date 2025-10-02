import React from 'react' ;
import Navbar from './Navbar' ;
import Footer from './Footer';
// home and pages are treated as children 
const Layout = ({children}) =>{
  return (
    <div className="bg-[url('/JSS.png')] bg-cover bg-center min-h-screen relative">
       <div className='absolute inset-0'/>
       <div className='relative z-10'>
      <Navbar/>
      <main className='p-6'>{children}</main>
      <Footer/>
    </div>
    </div>
  );
};
export default Layout ;