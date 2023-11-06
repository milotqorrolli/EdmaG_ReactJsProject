import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Architecture from './components/Architecture/Architecture';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Product from './components/Projects/Product/Product';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './pages/Layout';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route
            path='/home'
            element={
              <Layout> {/* Use Layout for pages that require header and footer */}
                <HomePage />
              </Layout>
            }
          />
          <Route path='/aboutus' element={<Layout><AboutUs /></Layout>} />
          <Route path='/architecture' element={<Layout><Architecture /></Layout>} />
          <Route path='/services' element={<Layout><Services /></Layout>} />
          <Route path='/projects' element={<Layout><Projects /></Layout>} />
          <Route path='/contact' element={<Layout><Contact /></Layout>} />
          <Route path='/product/:title' element={<Layout><Product /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
