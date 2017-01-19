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
            title={{ title: 'Title', tintColor: 'black', }}
            leftButton={{ title: 'Back', }}
            rightButton={{ title: 'Forward', }}
            style={{ backgroundColor: "white", }}
            statusBar={{ tintColor: "white", }}
          />

          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={75 / 100}>
            <Text>Press</Text>
          </TouchableOpacity>

      </View>
    );
  }
}
