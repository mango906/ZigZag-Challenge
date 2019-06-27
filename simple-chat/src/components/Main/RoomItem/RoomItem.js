import React from 'react';
import './RoomItem.scss';

const RoomItem = ({ data }) => {
  return (
    <div className="chatitem">
      <img className="chatitem-image" src={data.profile_image} alt="img" />
      <div className="chatitem-desc">
        <div className="chatitem-desc-name">{data.name}</div>
        <div className="chatitem-desc-content">콘텐츠</div>
      </div>
    </div>
  );
};

export default RoomItem;
