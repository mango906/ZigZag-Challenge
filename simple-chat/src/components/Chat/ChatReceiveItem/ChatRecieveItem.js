import React from 'react';
import './ChatRecieveItem.scss';

const ChatRecieveItem = ({ data, profile_image }) => {
  return (
    <div className="chat-receive-item">
      <div className="chat-receive-item-content">{data.content}</div>
      <img src={profile_image} alt="img" />
    </div>
  );
};

export default ChatRecieveItem;
