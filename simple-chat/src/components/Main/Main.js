import React, { Component } from 'react';
import './Main.scss';
import ChatItem from './ChatItem';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-header">CHAT</div>
      </div>
    );
  }
}

export default Main;
