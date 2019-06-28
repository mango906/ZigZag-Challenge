import React from 'react';
import './ChatSendItem.scss';
import { Link } from 'react-router-dom';
import myInfo from './../../static/data/myinfo.json';

const ChatSendItem = ({ data }) => {
  console.log(data);
  return (
    <div className="chat-send-item">
      {(() => {
        if (data.mimeType === 'text')
          return <div className="chat-send-item-content">{data.content}</div>;
        else if (data.mimeType === 'image/jpeg' || data.mimeType === 'image/png')
          return <img className="chat-send-item-img" src={data.content} alt="img" />;
      })()}

      <img className="chat-send-item-profile-image" src={myInfo.profile_image} alt="img" />
    </div>
  );
};

export default ChatSendItem;
