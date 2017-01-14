import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class polnexus extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          style={{
            width: 300,
            height: 200,
          }}
          resizeMode={"contain"}
          source={{uri:'https://res.cloudinary.com/drrwovgv6/image/upload/v1483895904/icon_r5rwee.png'}}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('polnexus', () => polnexus);
