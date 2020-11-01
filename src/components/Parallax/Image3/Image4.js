import React from 'react';
import image1 from '../../../images/image4.jpeg';
import icon from '../../../images/down-arrow.svg';
import { Parallax } from 'react-parallax';
import Menu from '../../Menu/Menu';

const Image4 = (scrollingLock) => {
  return (
    <Parallax blur={0} bgImage={image1} strength={1000}>
      <div className="d-content" id="page4">
        <div className="d-iisi">
          <h1 style={{ letterSpacing: 10 }}>JULIAN</h1>
        </div>
      </div>
      <Menu scrollingLock={scrollingLock} />
    </Parallax>
  );
};

export default Image4;
