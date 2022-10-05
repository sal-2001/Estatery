import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      {/*Navbar*/}
      <Header/>
      {/*Body content*/}
      <Home/>
      {/*Footer*/}
      <Footer/>
    </div>
  );
}

export default App;
