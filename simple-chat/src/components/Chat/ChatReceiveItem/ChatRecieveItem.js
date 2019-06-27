import React from 'react';
import './ChatRecieveItem.scss';

const ChatRecieveItem = ({ data }) => {
  return (
    <div className="chat-receive-item">
      <div className="chat-receive-item-content">{data.content}</div>
      <img src={data.profile_image} alt="img" />
    </div>
  );
};

export default ChatRecieveItem;
