import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
