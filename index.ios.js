import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  Navigator,
  TouchableHighlight,
  TouchOpacity
} from 'react-native';

import Landing from './app/Landing';

export default class polnexus extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // sentence: ['Hello']
      like: 0,
      dislike: 0
    }
  }

  ImageClick(e) {
    // AlertIOS.alert('onPressssssss', '111');

    this.setState({
        like: (parseInt(this.state.like) + 1)
    })

    fetch('https://polnexusserver.herokuapp.com/api/clients/587b66786c867e001150cd10', {
    // fetch('http://localhost:3000/api/clients/587b64ba2d0aaaedc92f6614', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        like: this.state.like,
        dislike: 2,
      })
    })
  }

  render() {
    return (

      <Navigator
        initialRoute={ { name: 'Landing'} }
        renderScene= { (route, navigator) => {
          switch(route.name) {
            case 'Landing':
              return (
                <Landing navigator={navigator} />
              )
          }
        } }
      />

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
