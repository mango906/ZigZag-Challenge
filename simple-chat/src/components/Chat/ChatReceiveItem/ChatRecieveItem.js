import React from 'react';
import './ChatRecieveItem.scss';
import library from '../../../lib';

const ChatRecieveItem = ({ data, profile_image }) => {
  return (
    <div className="chat-receive-item">
      <div className="chat-receive-item-content">{data.content}</div>
      <img src={profile_image} alt="img" />
      <div className="chat-receive-item-date">{library.calculateTime(data.date)}</div>
    </div>
  );
};

export default ChatRecieveItem;
