import React from 'react';
import Image from '../../assets/images/home.png'

import "./header.css";

function Header() {
  return (
    <div className="header">
      
      <img
        className="headerImg"
        src={Image}
        alt=""
      />
    </div>
  );
}

export default Header