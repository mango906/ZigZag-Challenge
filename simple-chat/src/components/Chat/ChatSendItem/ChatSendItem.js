import React from 'react';
import './ChatSendItem.scss';
import myInfo from './../../static/data/myinfo.json';

const ChatSendItem = ({ data }) => {
  return (
    <div className="chat-send-item">
      <div className="chat-send-item-content">{data.content}</div>
      <img src={myInfo.profile_image} alt="img" />
    </div>
  );
};

export default ChatSendItem;
