import React from 'react';
import './RoomItem.scss';

const RoomItem = ({ data, handleClick }) => {
  const getType = () => {
    const content = data.data;
    if (content.length === 0) {
      return null;
    }

    switch (content[content.length - 1].mimeType) {
      case 'text':
        return content[content.length - 1].content;
      case 'image/jpeg':
      case 'image/png':
        return '(사진)';
      default:
        return '(파일)';
    }
  };

  return (
    <div
      className="chatitem"
      onClick={() => {
        handleClick(data.id);
      }}
    >
      <img className="chatitem-image" src={data.profile_image} alt="img" />
      <div className="chatitem-desc">
        <div className="chatitem-desc-name">{data.name}</div>
        <div className="chatitem-desc-content">{getType()}</div>
      </div>
    </div>
  );
};

export default RoomItem;
