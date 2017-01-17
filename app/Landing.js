import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let titleConfig = {title:'Landing', tintColor:'white'};
    let titleConfig = { title: 'Landing', tintColor: 'white' };
    return (
      <View>

        <NavigationBar
           title={titleConfig}
         />

        <Text>
          Landing
        </Text>

      </View>
    );
  }
}
