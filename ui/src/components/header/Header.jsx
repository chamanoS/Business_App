import React from 'react';
import './header.css';
import Video from '../../assets/videos/videox.mp4'

function Header() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted />
      <h3>Social Entrepreneurship</h3>
      <p>Connecting Investment Capital To Social Purposes</p>
      
    </div>
  );
}

export default Header
