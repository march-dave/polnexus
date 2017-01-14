import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class polnexus extends Component {

  constructor(props) {
    super(props)
  }

  onImageClick(e) {
    console.log('e');
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Image onClick={this.onImageClick.bind(this)}
      //     style={styles.goImages}
      //     resizeMode={"contain"}
      //     source={{uri:'https://res.cloudinary.com/drrwovgv6/image/upload/v1483895904/icon_r5rwee.png'}}
      //   />
      // </View>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View>
          <Image
              style={styles.goImages}
              resizeMode={"contain"}
              source={{uri:'https://res.cloudinary.com/drrwovgv6/image/upload/v1483895904/icon_r5rwee.png'}}
            />
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  goImages: {
    width: 300,
    height: 200,
  }

});

AppRegistry.registerComponent('polnexus', () => polnexus);
