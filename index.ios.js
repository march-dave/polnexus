import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  TouchableHighlight
} from 'react-native';

export default class polnexus extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sentence: ['Hello']
    }
  }

  ImageClick(e) {
    console.log('e', e);

    AlertIOS.alert('onPressssssss', '111');
  }

  render() {
    return (
    
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View>

          <TouchableHighlight
            onPress={this.ImageClick.bind(this)}
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}>

            <Image
                style={styles.goImages}
                resizeMode={"contain"}
                source={{uri:'https://res.cloudinary.com/drrwovgv6/image/upload/v1483895904/icon_r5rwee.png'}}
              />
          </TouchableHighlight>
        </View>

        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />

        <Text style={ {height: 50, backgroundColor: 'steelblue'} }>{this.state.sentence}</Text>

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
