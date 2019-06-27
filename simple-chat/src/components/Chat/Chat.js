import React, { Component } from 'react';
import './Chat.scss';
import { inject, observer } from 'mobx-react';
import ChatSendItem from './ChatSendItem';
import ChatRecieveItem from './ChatReceiveItem';

@inject('stores')
@observer
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { stores } = this.props;
    const data = await stores.member.getChats();
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;

    console.log(data);

    const items =
      data &&
      data.map(data => {
        if (data.type === 'sended') {
          return <ChatSendItem data={data} key={data.id} />;
        } else {
          return <ChatRecieveItem data={data} key={data.id} />;
        }
      });

    return (
      <div className="chat">
        <div className="chat-header">하이</div>
        <div className="chat-contents">{items}</div>
        <div className="chat-footer">
          <input placeholder="Type something to send..." />
          <button>보내기</button>
        </div>
      </div>
    );
  }
}

export default Chat;
