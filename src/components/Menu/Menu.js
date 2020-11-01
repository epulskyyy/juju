import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = (props) => {
  const { scrollingLock } = props;
  const [scrollingBac, setScrollingBac] = useState(false);

  useEffect(() => {
    if (!scrollingBac) {
      window.addEventListener('scroll', handleScroll);
    }
  }, [scrollingBac]);
  const handleScroll = () => {
    console.log(window.scrollY <= 0);
    if (window.scrollY > 0) {
      setScrollingBac(true);
    } else if (window.scrollY <= 0) {
      setScrollingBac(false);
    }
  };

  return <div style={{ height: '100vh' }}></div>;
};

export default Menu;
