import React from 'react';
import image1 from '../../../images/image1.jpeg';
import icon from '../../../images/down-arrow.svg';
import { Parallax } from 'react-parallax';
import Menu from '../../Menu/Menu';

const Image3 = (scrollingLock) => {
  return (
    <Parallax blur={0} bgImage={image1} bgImageAlt="puppy1" strength={1000}>
      <div className="d-content" id="page3">
        <div className="d-iisi">
          <h2 style={{ letterSpacing: 5 }}>"But martabak in my heart"</h2>
          <a href="#page4">
            <img
              height="70px"
              className="icon"
              style={{ color: 'white' }}
              src={icon}
              alt=""
            />
          </a>
        </div>
      </div>
      <Menu scrollingLock={scrollingLock} />
    </Parallax>
  );
};

export default Image3;
