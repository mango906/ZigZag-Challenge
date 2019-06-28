import React from 'react';
import './ImageBigView.scss';

import CLOSE from './../../../static/icon/close.png';

const ImageBigView = ({ history, location }) => {
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="image-bigview">
      <img className="image-bigview-img" src={location.state.url} alt="img" />
      <img className="image-bigview-closebtn" src={CLOSE} alt="img" onClick={handleBack} />
    </div>
  );
};

export default ImageBigView;
