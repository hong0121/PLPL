import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Top from '../../components/Top/Top';
import './Home.css';


function Home() {
  return (
    <div className='intro-container'>
      <div className='top-section'>
        {/* navbar-section과 가로길이만 맞추면 됌 */}
        <Top />
      </div>
      <div className='NavBar-section'>
        <NavBar />
      </div>
    </div> 
  );
}

export default Home;