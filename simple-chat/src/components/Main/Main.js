import React, { Component } from 'react';
import './Main.scss';
import RoomItem from './RoomItem';
import { withRouter } from 'react-router-dom';
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
    console.log(stores);
    const data = await stores.getRooms();
    this.setState({
      data
    });
  }

  handleRedirect = id => {
    const { history } = this.props;
    history.push(`/chat/${id}`);
  };

  render() {
    const { data } = this.state;
    const items = data.map(data => {
      return <RoomItem key={data.id} data={data} handleClick={this.handleRedirect} />;
    });

    return (
      <div className="main">
        <div className="main-header">CHAT</div>
        {items}
      </div>
    );
  }
}

export default withRouter(Main);
