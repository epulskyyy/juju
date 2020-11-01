import React from 'react';
import image2 from '../../../images/image2.jpeg';

import icon from '../../../images/down-arrow.svg';
import { Parallax } from 'react-parallax';
import Menu from '../../Menu/Menu';

const Image2 = (scrollingLock) => {
  return (
    <Parallax blur={0} bgImage={image2} bgImageAlt="puppy1" strength={1000}>
      <div className="d-content" id="page2">
        <div className="d-iisi">
          <h2 style={{ letterSpacing: 5 }}>"You are not apple in my eye"</h2>
          <a href="#page3">
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

export default Image2;
