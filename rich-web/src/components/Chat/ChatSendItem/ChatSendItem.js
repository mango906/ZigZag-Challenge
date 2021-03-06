import React from 'react';
import './ChatSendItem.scss';
import { withRouter } from 'react-router-dom';
import myInfo from 'static/data/myinfo.json';
import ATTACHMENT from 'static/icon/attachment.png';
import library from 'lib';

const ChatSendItem = ({ data, history, handleLoad }) => {
  const handleBigImage = () => {
    history.push({
      pathname: '/imageBigView',
      state: { url: URL.createObjectURL(data.content) }
    });
  };

  return (
    <div className="chat-send-item">
      <div className="chat-send-item-date">{library.calculateTime(data.date)}</div>
      {(() => {
        if (data.mimeType === 'text')
          return <div className="chat-send-item-content">{data.content}</div>;
        else if (data.mimeType === 'image/jpeg' || data.mimeType === 'image/png')
          return (
            <img
              className="chat-send-item-img"
              src={URL.createObjectURL(data.content)}
              alt="img"
              onLoad={handleLoad}
              onClick={handleBigImage}
            />
          );
        else
          return (
            <a href={URL.createObjectURL(data.content)} download>
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

export default withRouter(ChatSendItem);
