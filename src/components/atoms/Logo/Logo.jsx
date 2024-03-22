import React, { useState, useEffect } from 'react';
import logo from '../../../assets/images/logo.png';

import './Logo.scss';

const Logo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <img src={logo} alt="Logo" className="logo" />
      {windowWidth > 650 && <h2>Federação Paulista de Futebol</h2>}
    </>
  );
};

export default Logo;
