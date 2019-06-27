import React, { Component } from 'react';
import './Main.scss';
import RoomItem from './RoomItem';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const { stores } = this.props;
    const data = await stores.member.getRooms();
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    const items = data.map(d => {
      return <RoomItem data={d} />;
    });

    return (
      <div className="main">
        <div className="main-header">CHAT</div>
        {items}
      </div>
    );
  }
}

export default Main;
