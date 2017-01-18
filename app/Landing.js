import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class Landing extends React.Component {

    render() {
      const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    };

    const titleConfig = {
      title: 'Hello, world',
    };

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig} />
      </View>
    );
  }
}
