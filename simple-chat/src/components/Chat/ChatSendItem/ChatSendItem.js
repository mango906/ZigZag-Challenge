import React from 'react';
import './ChatSendItem.scss';
import myInfo from './../../static/data/myinfo.json';
import ATTACHMENT from './../../static/icon/attachment.png';

const ChatSendItem = ({ data }) => {
  console.log(data);
  return (
    <div className="chat-send-item">
      {(() => {
        if (data.mimeType === 'text')
          return <div className="chat-send-item-content">{data.content}</div>;
        else if (data.mimeType === 'image/jpeg' || data.mimeType === 'image/png')
          return (
            <img className="chat-send-item-img" src={URL.createObjectURL(data.content)} alt="img" />
          );
        else
          return (
            <a href={URL.createObjectURL(data.content)}>
              <div className="chat-send-item-file">
                <img src={ATTACHMENT} alt="img" />
                <span>{data.content.name}</span>
              </div>
            </a>
          );
      })()}

      <img className="chat-send-item-profile-image" src={myInfo.profile_image} alt="img" />
    </div>
  );
};

export default ChatSendItem;
