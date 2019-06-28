import React, { Component } from 'react';
import './Chat.scss';
import { inject, observer } from 'mobx-react';
import ChatSendItem from './ChatSendItem';
import ChatRecieveItem from './ChatReceiveItem';
import ATTACHMENT from './../../static/icon/attachment.png';

@inject('stores')
@observer
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      contents: ''
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

  handleChange = e => {
    this.setState({
      contents: e.target.value
    });
  };

  handleSubmit = async () => {
    const { contents, data } = this.state;
    const { stores, match } = this.props;
    const idx = match.params.id;
    let req = {
      id: data.data.length,
      type: 'sended',
      content: contents,
      mimeType: 'text'
    };

    await stores.member.submitChat(idx, req);
    const chatData = await stores.member.getChats(idx);
    this.setState({
      data: chatData
    });

    this.setState({
      contents: ''
    });
  };

  uploadFile = async e => {
    const { data } = this.state;
    const { stores, match } = this.props;
    const idx = match.params.id;

    const file = e.target.files[0];

    let req = {
      id: data.data.length,
      mimeType: file.type,
      type: 'sended',
      content: file
    };

    await stores.member.submitChat(idx, req);
    const chatData = await stores.member.getChats(idx);
    this.setState({
      data: chatData
    });
  };

  render() {
    const { data, contents } = this.state;

    const items =
      data.data &&
      data.data.map(d => {
        if (d.type === 'sended') {
          return <ChatSendItem data={d} key={d.id} handleBigImage={this.handleBigImage} />;
        } else {
          return <ChatRecieveItem data={d} key={d.id} profile_image={data.profile_image} />;
        }
      });

    return (
      <div className="chat">
        <div className="chat-header">
          <div className="chat-header-btn">뒤로</div>
          <div className="chat-header-name">{data.name}</div>
        </div>
        <div className="chat-contents">{items}</div>
        <div className="chat-footer">
          <label for="file-input">
            <img src={ATTACHMENT} alt="img" />
          </label>
          <input className="file-input" type="file" id="file-input" onChange={this.uploadFile} />
          <input
            onChange={this.handleChange}
            value={contents}
            placeholder="Type something to send..."
          />
          <button onClick={this.handleSubmit}>보내기</button>
        </div>
      </div>
    );
  }
}

export default Chat;
