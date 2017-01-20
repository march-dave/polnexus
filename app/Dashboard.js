import React, {Component} from 'react';
import { TabBarIOS } from 'react-natvie';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Activity'
    }
  }

  render() {
    return (
      <TabBarIOS>

    </TabBarIOS>);
  }
}
