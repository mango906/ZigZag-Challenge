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
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const { stores, match } = this.props;
    const idx = match.params.id;
    const data = await stores.member.getChats(idx);
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;

    const items =
      data.data &&
      data.data.map(d => {
        if (d.type === 'sended') {
          return <ChatSendItem data={d} key={d.id} />;
        } else {
          return <ChatRecieveItem data={d} key={d.id} profile_image={data.profile_image} />;
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
